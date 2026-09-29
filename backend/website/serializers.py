from rest_framework import serializers
from . import models


class BannerSerializer(serializers.ModelSerializer):
    image = serializers.SerializerMethodField()

    class Meta:
        model = models.Banner
        fields = ["id", "title", "image"]

    def get_image(self, obj):
        if obj.image:
            return obj.image.url
        return None
