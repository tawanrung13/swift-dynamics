from django.urls import path

from . import views

app_name = 'todo'
urlpatterns = [
    path('', views.index, name='index'),
    path('add/', views.add_list, name='add_list'),
    path('edit/<int:todolist_id>/', views.edit_list, name='edit_list'),
    path('delete/<int:todolist_id>/', views.delete_list, name='delete_list'),
    path('<int:todolist_id>/', views.view_list, name='view_list'),
    # path('<int:question_id>/', views.detail, name='detail'),
    # path('<int:question_id>/results/', views.results, name='results'),
    # path('<int:question_id>/vote/', views.vote, name='vote'),
]
