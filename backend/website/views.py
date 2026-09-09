from rest_framework.generics import ListAPIView
from . import serializers
from . import models

class BannerList(ListAPIView):
    serializer_class=serializers.BannerSerializer
    queryset=models.Banner.objects.all()