from django.shortcuts import render
from django.http import HttpResponse
# Create your views here.

def index(request):
    my_dict = {'insert_me':"Hello, I'm from views.py"}
    return render(request, 'first_app/index.html', context=my_dict)

def help(request):
    my_dict = {
        'first_list_elem' : 10,
        'second_list_elem' : 20,
    }
    return render(request, 'first_app/help.html', context=my_dict)