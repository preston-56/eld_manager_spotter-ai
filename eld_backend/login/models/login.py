from django.db import models
from django.contrib.auth.models import User
from django.utils.timezone import now

class LoginAttempt(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name="login_attempts", null=True, blank=True)
    ip_address = models.GenericIPAddressField(null=True, blank=True)
    user_agent = models.TextField(null=True, blank=True)
    timestamp = models.DateTimeField(default=now)
    success = models.BooleanField(default=False)

    def __str__(self):
        return f"{self.user.username if self.user else 'Unknown'} - {'Success' if self.success else 'Failed'} at {self.timestamp}"
