from django.db import models

class Trip(models.Model):
    current_location = models.CharField(max_length=255, blank=True, null=True)
    pickup_location = models.CharField(max_length=255)
    dropoff_location = models.CharField(max_length=255)
    current_cycle_used = models.IntegerField(default=0)  
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.pickup_location} to {self.dropoff_location}"
