from django.conf.urls import include, url
from django.urls import path
from rest_framework import routers

from .api import BookmarkViewSet, BookmarkUpdateViewSet

# router = routers.DefaultRouter()
# router.register('bookmarks', BookmarkUpdateViewSet)
# router.register('bookmarks/<int:pk>/', BookmarkUpdateViewSet)

app_name = 'bookmark'

urlpatterns = [
    path('', BookmarkViewSet.as_view({
        'get': 'list',
        'post': 'create'
    })),
    path('<int:pk>/', BookmarkViewSet.as_view({
        'get': 'retrieve',
        'put': 'update',
        'patch': 'partial_update',
        'delete': 'destroy'
    })),
    # path('update/<int:pk>', BookmarkUpdateViewSet.as_view()),
]
