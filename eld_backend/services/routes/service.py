from rest_framework.response import Response
from rest_framework.decorators import api_view
from drf_yasg.utils import swagger_auto_schema
from services.models.service import Service
from services.serializers.service import ServiceSerializer
from services.schema.services import service_schema

@api_view(["GET"])
def get_services(request):
    """
    Retrieve all services.
    """
    services = Service.objects.all()
    serializer = ServiceSerializer(services, many=True)
    return Response(serializer.data)

@swagger_auto_schema(
    method="post",
    request_body=service_schema,
    responses={
        201: ServiceSerializer(),
        400: "Invalid data",
    },
)

@api_view(["POST"])
def create_service(request):
    """
    Create a new service.
    """
    serializer = ServiceSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=201)
    return Response(serializer.errors, status=400)
