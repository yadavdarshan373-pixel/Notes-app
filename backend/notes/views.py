from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import Note
from .serializers import NoteSerializer


# Handles requests to /api/notes/  (no specific id)
class NoteListCreate(APIView):

    # GET /api/notes/  -> return all notes
    def get(self, request):
        all_notes = Note.objects.all()
        serializer = NoteSerializer(all_notes, many=True)
        return Response(serializer.data)

    # POST /api/notes/  -> create a new note
    def post(self, request):
        serializer = NoteSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


# Handles requests to /api/notes/<id>/  (a specific note)
class NoteDetail(APIView):

    # helper function: find a note by id, or return None
    def get_note(self, pk):
        try:
            return Note.objects.get(pk=pk)
        except Note.DoesNotExist:
            return None

    # PUT /api/notes/<id>/  -> update a specific note
    def put(self, request, pk):
        note = self.get_note(pk)
        if note is None:
            return Response(status=status.HTTP_404_NOT_FOUND)
        serializer = NoteSerializer(note, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    # DELETE /api/notes/<id>/  -> delete a specific note
    def delete(self, request, pk):
        note = self.get_note(pk)
        if note is None:
            return Response(status=status.HTTP_404_NOT_FOUND)
        note.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

#     Explanation:

# NoteListCreate — handles the "no id" URL (/api/notes/): listing all notes and creating new ones
# NoteDetail — handles the "with id" URL (/api/notes/<id>/): updating and deleting one specific note
# get_note(self, pk) — a helper function you wrote yourself, so both put and delete can reuse it instead of repeating the same lookup code
# Each HTTP method (get, post, put, delete) is its own clearly named function — no hidden auto-behavior like ModelViewSet had