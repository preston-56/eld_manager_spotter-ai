from drf_yasg import openapi

user_schema = openapi.Schema(
    type=openapi.TYPE_OBJECT,
    required=["username", "password", "email"],
    properties={
        "username": openapi.Schema(
            type=openapi.TYPE_STRING,
            description="Unique username for the user"
        ),
        "password": openapi.Schema(
            type=openapi.TYPE_STRING,
            format="password",
            description="Password for authentication"
        ),
        "email": openapi.Schema(
            type=openapi.TYPE_STRING,
            format="email",
            description="User's email address"
        ),
        "first_name": openapi.Schema(
            type=openapi.TYPE_STRING,
            description="User's first name"
        ),
        "last_name": openapi.Schema(
            type=openapi.TYPE_STRING,
            description="User's last name"
        ),
        "groups": openapi.Schema(
            type=openapi.TYPE_ARRAY,
            items=openapi.Items(type=openapi.TYPE_STRING),
            description="Groups the user belongs to"
        ),
        "user_permissions": openapi.Schema(
            type=openapi.TYPE_ARRAY,
            items=openapi.Items(type=openapi.TYPE_STRING),
            description="User-specific permissions"
        ),
        "is_staff": openapi.Schema(
            type=openapi.TYPE_BOOLEAN,
            description="Indicates if the user has staff privileges"
        ),
        "is_active": openapi.Schema(
            type=openapi.TYPE_BOOLEAN,
            description="Indicates if the user account is active"
        ),
        "date_joined": openapi.Schema(
            type=openapi.TYPE_STRING,
            format="date-time",
            description="Timestamp when the user joined"
        ),
    },
)
