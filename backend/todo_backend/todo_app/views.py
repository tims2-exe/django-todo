from django.shortcuts import redirect, render
from django.http import HttpResponse
from .models import Todo

# Create your views here.


def test(request):
    return HttpResponse('hello world !!')

def todo_list(request):
    tasks = Todo.objects.all()
    return HttpResponse('test')

def add_todo(request):
    Todo.objects.create(task = 'test', completed = False)
    return redirect('todo_list')

