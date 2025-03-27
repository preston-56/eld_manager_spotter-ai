from rest_framework.response import Response
from rest_framework.decorators import api_view
from drf_yasg.utils import swagger_auto_schema
from trips.models.trip import Trip  
from trips.serializers.trip import TripSerializer  
from trips.schema.trips import trip_schema

@api_view(["GET"])
def get_trips(request):
    """
    Retrieve all trips.
    """
    trips = Trip.objects.all()
    serializer = TripSerializer(trips, many=True)
    return Response(serializer.data)
@swagger_auto_schema(
    method="post",
    request_body=trip_schema,
    responses={
        201: TripSerializer(),
        400: "Invalid data",
    },
)

@api_view(["POST"])
def create_trip(request):
    """
    Create a new trip.
    """
    serializer = TripSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=201)
    return Response(serializer.errors, status=400)
