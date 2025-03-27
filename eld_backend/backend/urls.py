from django.contrib import admin
from django.urls import path, re_path
from django.http import JsonResponse
from rest_framework import permissions
from drf_yasg.views import get_schema_view
from drf_yasg import openapi

# Import routes
from trips.routes.trip import get_trips, create_trip  
from logs.routes.log import get_logs, create_log  
from users.routes.user import get_users, create_user
from services.routes.service import get_services, create_service 
from drivers.routes.drivers import drivers, driver_detail
from login.routes.login import login_view
from register.routes.register import register_user

# API Documentation Schema
schema_view = get_schema_view(
    openapi.Info(
        title="ELD API",
        default_version="v1",
        description="API documentation for ELD backend",
        terms_of_service="https://www.example.com/terms/",
        contact=openapi.Contact(email="prestonosoro56@gmail.com"),
        license=openapi.License(name="MIT License"),
    ),
    public=True,
    permission_classes=[permissions.AllowAny],
    authentication_classes=[],
)

# Custom error handlers
def custom_bad_request(request, exception):
    return JsonResponse({"error": "Bad Request"}, status=400)

def custom_permission_denied(request, exception):
    return JsonResponse({"error": "Permission Denied"}, status=403)

def custom_page_not_found(request, exception):
    return JsonResponse({"error": "Page Not Found"}, status=404)

def custom_server_error(request):
    return JsonResponse({"error": "Internal Server Error"}, status=500)

# Assign handlers
handler400 = custom_bad_request
handler403 = custom_permission_denied
handler404 = custom_page_not_found
handler500 = custom_server_error

# URL Patterns
urlpatterns = [
    path('admin/', admin.site.urls),

    # API Documentation (Swagger & ReDoc)
    re_path(r'^swagger/$', schema_view.with_ui('swagger', cache_timeout=0), name='swagger-ui'),
    re_path(r'^redoc/$', schema_view.with_ui('redoc', cache_timeout=0), name='redoc'),

    # Trip Routes
    path("trips/", get_trips, name="get_trips"),
    path("trips/create/", create_trip, name="create_trip"),

    # Log Routes
    path("logs/", get_logs, name="get_logs"),
    path("logs/create/", create_log, name="create_log"),

    # User Routes
    path("users/", get_users, name="get_users"),
    path("users/create/", create_user, name="create_user"),

    # Service Routes
    path("services/", get_services, name="get_services"),
    path("services/create/", create_service, name="create_service"), 

    # Driver Routes
    path("drivers/", drivers, name="drivers"),
    path("drivers/<int:pk>/", driver_detail, name="driver_detail"),

    # Authentication Route
    path('auth/login/', login_view, name="login"),

    # Registration Route
    path("auth/register/", register_user, name="register_user"),
]
