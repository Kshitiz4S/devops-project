from rest_framework import serializers
from .models import Art


class ArtSerializer(serializers.ModelSerializer):
    image = serializers.ImageField(read_only=True)

    class Meta:
        model = Art
        fields = ["id", "name", "image", "description"]