from django.http import HttpResponse, HttpResponseRedirect
from django.shortcuts import get_object_or_404, render, redirect
from django.urls import reverse
from django.template import loader
from django.contrib import messages

from .models import List


def index(request):
    todo_list = List.objects.order_by('date_modified')
    context = {'lists': todo_list}
    return render(request, 'todo/index.html', context)


def add_list(request):
    if request.method == 'POST':
        todo = List(
            title=request.POST['title'],
            description=request.POST['description'],
            startdate=request.POST['startdate'],
            enddate=request.POST['enddate']
        )
        todo.save()
        return redirect('todo:index')
    return render(request, 'todo/todolist.html')


def edit_list(request, todolist_id):
    todo = List.objects.get(id=todolist_id)
    if request.method == 'POST':
        todo.title=request.POST['title']
        todo.description=request.POST['description']
        todo.startdate=request.POST['startdate']
        todo.enddate=request.POST['enddate']
        todo.save()
        return redirect('todo:index')
    context = {'list': todo}
    return render(request, 'todo/todolist.html', context)


def delete_list(request, todolist_id):
    List.objects.filter(id=todolist_id).delete()
    return redirect('todo:index')


def view_list(request, todolist_id):
    todo = List.objects.get(id=todolist_id)
    context = {'list': todo}
    return render(request, 'todo/detail.html', context)
