from drf_yasg import openapi

service_schema = openapi.Schema(
    type=openapi.TYPE_OBJECT,
    required=["name"],
    properties={
        "name": openapi.Schema(type=openapi.TYPE_STRING, description="Service name"),
    },
)
