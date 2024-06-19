from rest_framework import routers
from .views import *
from django.urls import path,include

router = routers.DefaultRouter()
router.register(r'ApplyLeave', LeaveViewSet)
router.register(r'ChartData', ChartDataViewSet,basename="ChartData")

urlpatterns = [
    path('', include(router.urls))
]