from django.shortcuts import render
from users.models import User

# Create your views here.
def home(request):
    return render(request, 'users/home.html')

def users(request):
    
    user_list = User.objects.order_by('last_name')
    user_dict = {'users':user_list}
    
    return render(request, 'users/users.html', context=user_dict)