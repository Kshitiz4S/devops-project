from rest_framework import serializers
from .models import Art


class ArtSerializer(serializers.ModelSerializer):
    image = serializers.SerializerMethodField()

    class Meta:
        model = Art
        fields = ["id", "name", "image", "description"]

    def get_image(self, obj):
        if obj.image:
            return obj.image.url
        return None
