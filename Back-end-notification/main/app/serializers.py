from rest_framework import serializers
from .models import *

class LeaveSerializer(serializers.ModelSerializer):
    class Meta:
        model = ApplyLeave
        fields = '__all__'