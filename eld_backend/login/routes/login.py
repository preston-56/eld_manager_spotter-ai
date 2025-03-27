from django.contrib.auth import authenticate
from drf_yasg.utils import swagger_auto_schema
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from rest_framework_simplejwt.tokens import RefreshToken
from users.serializers.user import UserSerializer
from login.serializers.login import LoginSerializer
from login.models.login import LoginAttempt
from login.schema.login import login_attempt_schema
@swagger_auto_schema(
    method="post",
    request_body=login_attempt_schema,
    responses={
        200: "Login successful",
        401: "Invalid credentials",
    },
)
@api_view(["POST"])
def login_view(request):
    """Handles user login and logs login attempts."""
    serializer = LoginSerializer(data=request.data)
    
    ip_address = request.META.get("REMOTE_ADDR")
    user_agent = request.META.get("HTTP_USER_AGENT")

    if serializer.is_valid():
        username = serializer.validated_data["username"]
        password = serializer.validated_data["password"]

        user = authenticate(username=username, password=password)

        # Log the attempt
        LoginAttempt.objects.create(
            user=user if user else None,
            ip_address=ip_address,
            user_agent=user_agent,
            success=bool(user),
        )

        if user:
            refresh = RefreshToken.for_user(user)
            return Response(
                {
                    "message": "Login successful",
                    "user": UserSerializer(user).data,
                    "token": {
                        "refresh": str(refresh),
                        "access": str(refresh.access_token),
                    },
                },
                status=status.HTTP_200_OK,
            )

    return Response({"error": "Invalid credentials"}, status=status.HTTP_401_UNAUTHORIZED)
