from django.urls import path
from . import views

urlpatterns = [
    path('tasks/', views.todo_list_view_create, name = 'todo_list'),
    path('tasks/<int:pk>/', views.todo_update_delete_view, name='todo_edit')
]