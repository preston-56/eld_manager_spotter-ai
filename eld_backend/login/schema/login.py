from drf_yasg import openapi

login_attempt_schema = openapi.Schema(
    type=openapi.TYPE_OBJECT,
    required=["username", "password"],
    properties={
        "username": openapi.Schema(type=openapi.TYPE_STRING, description="User's username"),
        "password": openapi.Schema(type=openapi.TYPE_STRING, description="User's password"),
        "ip_address": openapi.Schema(type=openapi.TYPE_STRING, format="ipv4", description="User's IP Address"),
        "user_agent": openapi.Schema(type=openapi.TYPE_STRING, description="Browser user agent"),
        "timestamp": openapi.Schema(type=openapi.TYPE_STRING, format="date-time", description="Timestamp of the login attempt"),
        "success": openapi.Schema(type=openapi.TYPE_BOOLEAN, description="Indicates if the login was successful"),
    },
)
