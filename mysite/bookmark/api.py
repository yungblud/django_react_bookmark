from rest_framework import viewsets, permissions

from .models import Bookmark
from .serializers import BookmarkSerializer
from rest_framework.generics import RetrieveUpdateDestroyAPIView

class BookmarkViewSet(viewsets.ModelViewSet):
    queryset = Bookmark.objects.all().order_by('-id')
    permission_classes = [permissions.AllowAny, ]
    serializer_class = BookmarkSerializer

class BookmarkUpdateViewSet(RetrieveUpdateDestroyAPIView):
    queryset = Bookmark.objects.all()
    serializer_class = BookmarkSerializer
