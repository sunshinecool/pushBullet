from django.db import models

# Create your models here.
class Login(models.Model):
    username = models.CharField(max_length=30)
    password = models.CharField(max_length=30)
    key = models.CharField(max_length=50)

class Data(models.Model):
    key = models.CharField(max_length=50)
    text = models.TextField()
    flag = models.BooleanField()
