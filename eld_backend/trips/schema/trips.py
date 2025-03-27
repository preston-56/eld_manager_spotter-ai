from drf_yasg import openapi

trip_schema = openapi.Schema(
    type=openapi.TYPE_OBJECT,
    required=["pickup_location", "dropoff_location"],
    properties={
        "current_location": openapi.Schema(
            type=openapi.TYPE_STRING,
            description="Current location of the trip (optional)"
        ),
        "pickup_location": openapi.Schema(
            type=openapi.TYPE_STRING,
            description="Pickup location of the trip"
        ),
        "dropoff_location": openapi.Schema(
            type=openapi.TYPE_STRING,
            description="Dropoff location of the trip"
        ),
        "current_cycle_used": openapi.Schema(
            type=openapi.TYPE_INTEGER,
            description="Current cycle used in the trip"
        ),
        "created_at": openapi.Schema(
            type=openapi.TYPE_STRING,
            format="date-time",
            description="Timestamp when the trip was created"
        ),
    },
)
