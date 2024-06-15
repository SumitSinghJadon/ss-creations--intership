from django.shortcuts import render
from rest_framework import viewsets
from .models import *
from .serializers import LeaveSerializer

# Create your views here.


class LeaveViewSet(viewsets.ModelViewSet):
    queryset = ApplyLeave.objects.all()
    serializer_class = LeaveSerializer