import datetime

from django.db import models
from django.utils import timezone


class List(models.Model):
    title = models.CharField(max_length=50)
    description = models.TextField()
    date_add = models.DateTimeField(auto_now_add=True)
    date_modified = models.DateTimeField(auto_now=True)
    startdate = models.DateField()
    enddate = models.DateField()
