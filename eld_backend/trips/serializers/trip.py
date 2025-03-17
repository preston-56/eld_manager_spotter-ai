from rest_framework import serializers
from trips.models.trip import Trip

class TripSerializer(serializers.ModelSerializer):
    class Meta:
        model = Trip
        fields = "__all__"
