from rest_framework.decorators import api_view
from drf_yasg.utils import swagger_auto_schema
from rest_framework.response import Response
from rest_framework import status
from drivers.models import Driver
from drivers.serializers import DriverSerializer
from drivers.schema.drivers import driver_schema
@swagger_auto_schema(
    method="post",
    request_body=driver_schema,
    responses={
        201: DriverSerializer(),
        400: "Invalid data",
    },
)
@api_view(["GET", "POST"])
def drivers(request):
    """
    GET: Retrieve all drivers.
    POST: Create a new driver.
    """
    if request.method == "GET":
        drivers = Driver.objects.all()
        serializer = DriverSerializer(drivers, many=True)
        return Response(serializer.data)

    if request.method == "POST":
        serializer = DriverSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(["GET", "PUT", "DELETE"])
def driver_detail(request, pk):
    """
    GET: Retrieve a single driver.
    PUT: Update a driver.
    DELETE: Remove a driver.
    """
    try:
        driver = Driver.objects.get(pk=pk)
    except Driver.DoesNotExist:
        return Response({"error": "Driver not found"}, status=status.HTTP_404_NOT_FOUND)

    if request.method == "GET":
        serializer = DriverSerializer(driver)
        return Response(serializer.data)

    if request.method == "PUT":
        serializer = DriverSerializer(driver, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    if request.method == "DELETE":
        driver.delete()
        return Response({"message": "Driver deleted successfully"}, status=status.HTTP_204_NO_CONTENT)
