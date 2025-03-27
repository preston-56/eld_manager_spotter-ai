from drf_yasg import openapi

register_schema = openapi.Schema(
    type=openapi.TYPE_OBJECT,
    required=["email", "password", "first_name", "last_name"],
    properties={
        "email": openapi.Schema(type=openapi.TYPE_STRING, format=openapi.FORMAT_EMAIL),
        "password": openapi.Schema(type=openapi.TYPE_STRING, format=openapi.FORMAT_PASSWORD),
        "first_name": openapi.Schema(type=openapi.TYPE_STRING),
        "last_name": openapi.Schema(type=openapi.TYPE_STRING),
    },
)
