from django.urls import path, include
from rest_framework import routers

from .api import UserViewSet, CreateUserViewSet

router = routers.DefaultRouter()
router.register('accounts', UserViewSet)
# router.register(r'register', CreateUserViewSet)

app_name = 'accounts'

urlpatterns = [
    # path('', CreateUserViewSet.as_view()),
    path('', UserViewSet.as_view({
        'get': 'list',
        'post': 'create'
    })),
]
