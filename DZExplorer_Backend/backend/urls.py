from django.urls.resolvers import URLPattern
from backend import views

from django.urls import path
from django.conf.urls.static import static
from django.conf import settings

urlpatterns = [
  
    path('Evenement/', views.EventAPI),
    path('Evenement/<int:pk>/', views.EventAPI),
    path('PI/', views.PIAPI),
    path('PI/<int:pk>/', views.PIAPI),
    path('Commentaire/', views.CommentaireAPI),
    path('Commentaire/<int:pk>/', views.CommentaireAPI),
    path('MoyenTransport/', views.MTAPI),
    path('MoyenTransport/<int:pk>/', views.MTAPI),
    path('Region/', views.RegionAPI),
    path('Region/<int:pk>/', views.RegionAPI),
    path('Visiteur/', views.VisiteurAPI),
    path('VisiteurLogin/', views.Login),
    path('Admin/', views.AdminAPI),
    path('actualites/',views.ActualitesAPI),
    path('confirm/<str:tkn>/',views.confirm_registration),
    path('PiImage/', views.PiImage.as_view(), name= 'image_list1'),
    path('EvImage/', views.EvImage.as_view(), name= 'image_list2'),
    path('createAdmin/',views.CreateAdminApi),
]