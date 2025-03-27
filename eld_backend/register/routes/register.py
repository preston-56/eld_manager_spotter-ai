from rest_framework.response import Response
from rest_framework.decorators import api_view
from drf_yasg.utils import swagger_auto_schema
from register.serializers.register import RegisterSerializer
from register.schema.register import register_schema

@swagger_auto_schema(
    method="post",
    request_body=register_schema,
    responses={
        201: RegisterSerializer(),
        400: "Invalid data",
    },
)
@api_view(["POST"])
def register_user(request):
    serializer = RegisterSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=201)
    return Response(serializer.errors, status=400)
