from django.urls import path
from . import views

urlpatterns = [
    path('', views.todo_list, name= 'todo_list'),
    path('new/', views.add_todo, name = 'new_todo'),
]