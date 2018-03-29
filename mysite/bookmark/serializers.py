from rest_framework import serializers

from .models import Bookmark

class BookmarkSerializer(serializers.ModelSerializer):
    class Meta:
        model = Bookmark
        fields = ['id', 'site_title', 'site_url']

    #
    # def update(self, instance, validated_data):
    #     instance.filter = validated_data.get('site_title', instance.site_title)
    #     instance.filter = validated_data.get('site_url', instance.site_url)
    #     instance.save()
    #     return instance

