from django.urls import path
from .views import ArtListView, ArtDetailView


urlpatterns = [
    path("arts/", ArtListView.as_view(), name="art_list"),
    path("arts/<int:pk>/", ArtDetailView.as_view(), name="art_detail"),
]