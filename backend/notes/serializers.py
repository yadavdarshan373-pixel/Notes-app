from rest_framework import serializers
from .models import Note

class NoteSerializer(serializers.Serializer):  

    id = serializers.IntegerField(read_only=True)  # Check for the id of the content.
    title = serializers.CharField(max_length=200)  # Checks for the Title.
    content = serializers.CharField()  # Check for the Content.
    date = serializers.DateField(read_only=True)  # Has a valid date or not 

# This function runs when creating a new note (POST)
    def create(self, validated_data):
        return Note.objects.create(
            title=validated_data['title'],
            content=validated_data['content']
        )

    # This function runs when updating an existing note (PUT)
    def update(self, instance, validated_data):
        instance.title = validated_data.get('title', instance.title)
        instance.content = validated_data.get('content', instance.content)
        instance.save()
        return instance