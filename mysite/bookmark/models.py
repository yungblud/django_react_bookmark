from django.db import models

# Create your models here.

class Bookmark(models.Model):
    site_title = models.CharField(max_length=100)
    site_url = models.URLField('site_url')

    def __str__(self):
        return self.site_title