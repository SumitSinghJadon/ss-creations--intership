from django.shortcuts import render,HttpResponse
from rest_framework.response import Response
from rest_framework import viewsets
from .models import *
from .serializers import LeaveSerializer
from django.db.models.query import QuerySet
from rest_framework import serializers
import json
from django.http import JsonResponse


# Create your views here.


class LeaveViewSet(viewsets.ModelViewSet):
    
    queryset = ApplyLeave.objects.all()
    serializer_class = LeaveSerializer
    
    
class ChartDataViewSet(viewsets.ViewSet):
    
    def list(self, request):
        days_of_week = [
            'Sunday',    
            'Monday',
            'Tuesday',
            'Wednesday',
            'Thursday',
            'Friday',
            'Saturday'
        ]  
        data={}
        
         
        for day in days_of_week:
            day_index = days_of_week.index(day) + 1
            print("day =",day,"index =",day_index)
            filter_data=ApplyLeave.objects.filter(date__week_day=day_index).count()
            data[day] = filter_data 
        return Response(data)
        





