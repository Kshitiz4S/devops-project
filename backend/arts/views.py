from rest_framework.generics import ListAPIView, RetrieveAPIView

from .models import Art
from .serializers import ArtSerializer


class ArtListView(ListAPIView):
    queryset = Art.objects.all()
    serializer_class = ArtSerializer


class ArtDetailView(RetrieveAPIView):
    queryset = Art.objects.all()
    serializer_class = ArtSerializer