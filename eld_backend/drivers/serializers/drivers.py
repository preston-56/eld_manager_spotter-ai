from rest_framework import serializers
from drivers.models.drivers import Driver

class DriverSerializer(serializers.ModelSerializer):
    class Meta:
        model = Driver
        fields = "__all__"
