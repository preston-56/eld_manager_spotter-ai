from django.contrib import admin
from django.urls import path
from trips.routes.trip import get_trips, create_trip  
from logs.routes.log import get_logs, create_log  
from users.routes.user import get_users, create_user
from services.routes.service import get_services, create_service 
from drivers.routes.drivers import drivers, driver_detail
from django.http import JsonResponse

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

urlpatterns = [
    path('admin/', admin.site.urls),

    # Trip routes
    path("trips/", get_trips, name="get_trips"),
    path("trips/create/", create_trip, name="create_trip"),

    # Log routes
    path("logs/", get_logs, name="get_logs"),
    path("logs/create/", create_log, name="create_log"),

    # User routes
    path("users/", get_users, name="get_users"),
    path("users/create/", create_user, name="create_user"),

    # Service routes
    path("services/", get_services, name="get_services"),
    path("services/create/", create_service, name="create_service"), 

    # Driver routes
    path("drivers/", drivers, name="drivers"),
    path("drivers/<int:pk>/", driver_detail, name="driver_detail"),
]
