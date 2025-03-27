from drf_yasg import openapi

driver_schema = openapi.Schema(
    type=openapi.TYPE_OBJECT,
    required=["first_name", "last_name", "email", "phone_number", "license_number"],
    properties={
        "first_name": openapi.Schema(type=openapi.TYPE_STRING, description="Driver's first name"),
        "last_name": openapi.Schema(type=openapi.TYPE_STRING, description="Driver's last name"),
        "email": openapi.Schema(type=openapi.TYPE_STRING, format="email", description="Driver's email"),
        "phone_number": openapi.Schema(type=openapi.TYPE_STRING, description="Driver's phone number"),
        "license_number": openapi.Schema(type=openapi.TYPE_STRING, description="Driver's license number"),
    },
)