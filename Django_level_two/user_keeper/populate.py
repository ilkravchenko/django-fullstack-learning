import os
os.environ.setdefault('DJANGO_SETTINGS_MODULE','user_keeper.settings')

import django
django.setup()

from users.models import User
from faker import Faker

fakegen = Faker()

def populate(N=5):
    for entry in range(N):
        fake_name = fakegen.name().split()
        
        fake_first_name = fake_name[0]
        fake_last_name = fake_name[1]
        fake_email = fakegen.email()
        
        # new Entry
        User.objects.create(first_name=fake_first_name, last_name=fake_last_name, email=fake_email)
        
if __name__ == '__main__':
    print('POPULATING DATABASE')
    populate(20)
    print('END POPULATION')