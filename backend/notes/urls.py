from django.urls import path
from .views import NoteListCreate, NoteDetail

urlpatterns = [
    path('notes/', NoteListCreate.as_view()),           # Handles GET(all) and Post(create)
    path('notes/<int:pk>/', NoteDetail.as_view()),      # Handles Put(update) and Delete(delete)
]