from django.contrib.auth.models import User
from django.http import HttpResponseRedirect
from rest_framework import viewsets, permissions, status
from rest_framework.generics import CreateAPIView, GenericAPIView

from .serializers import UserSerializer

#
class UserViewSet(viewsets.ModelViewSet):
    # model = User
    queryset = User.objects.all().order_by('-date_joined')
    permission_classes = [permissions.AllowAny]
    serializer_class = UserSerializer

class CreateUserViewSet(CreateAPIView):
    queryset = User.objects.all()
    permission_classes = [permissions.AllowAny]
    serializer_class = UserSerializer

