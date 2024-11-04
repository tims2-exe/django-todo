from django.shortcuts import redirect, render
from django.http import HttpResponse
from .models import Todo
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .serializers import TodoSerializer

# Create your views here.


def test(request):
    return HttpResponse('hello world !!')


@api_view(['GET', 'POST'])
def todo_list_view_create(request):
    if request.method == 'GET':
        todos = Todo.objects.all()
        serializer = TodoSerializer(todos, many = True)
        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = TodoSerializer(data = request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)