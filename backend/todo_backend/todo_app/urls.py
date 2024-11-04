from django.urls import path
from . import views

urlpatterns = [
    path('', views.todo_list_view_create, name = 'todo_list'),
]