from django.contrib.auth.models import User
from django.db import models

class Register(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, related_name="register")
    email = models.EmailField(unique=True)
    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)

    def __str__(self):
        return self.user.email
