from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from django.http.response import JsonResponse
from django.core.files.storage import default_storage
from rest_framework.decorators import api_view
from rest_framework.generics import CreateAPIView
from rest_framework.response import Response
from backend.models import Evenement
from backend.serializers import   EventSerializer 
from backend.models import PointInteret
from backend.serializers import  PISerializer 
from backend.models import Commentaire
from backend.serializers import  CommentaireSerializer
from backend.models import MoyenTransport
from backend.serializers import  MTSerializer
from backend.models import Region
from backend.serializers import  RegionSerializer
from backend.models import Visiteur
from backend.serializers import  VisiteurSerializer
from backend.models import VisiteurAuth
from backend.serializers import  VisiteurAuthSerializer
from backend.models import PiImg
from backend.serializers import  PiImageSerializer
from backend.models import eventImage
from backend.serializers import  EvImageSerializer
from django.contrib.auth.hashers import make_password,check_password
from django.utils.crypto import get_random_string
from django.core.mail import send_mail
from django.core.exceptions import ObjectDoesNotExist
from django.utils.deprecation import MiddlewareMixin
from django.conf import settings
from rest_framework.views import APIView
from backend.models import Admin
from backend.serializers import AdminSerializer
from rest_framework.parsers import MultiPartParser, FormParser
from rest_framework import status
from math import sin,cos,sqrt,atan2,radians
from  django.db.models import F,Func

# Create your views here.
class PiImage(APIView):
    parser_classes = (MultiPartParser, FormParser)

    def get(self, request, *args, **kwargs):
        images =PiImg.objects.all()
        serializer = PiImageSerializer(images, many=True)
        return Response(serializer.data)

    def post(self, request, *args, **kwargs):
        image_serializer = PiImageSerializer(data=request.data)
        if image_serializer.is_valid():
            image_serializer.save()
            return Response(image_serializer.data, status=status.HTTP_201_CREATED)
        else:
            print('error', image_serializer.errors)
            return Response(image_serializer.errors, status=status.HTTP_400_BAD_REQUEST)
class EvImage(APIView):
    parser_classes = (MultiPartParser, FormParser)

    def get(self, request, *args, **kwargs):
        images = eventImage.objects.all()
        serializer = EvImageSerializer(images, many=True)
        return Response(serializer.data)

    def post(self, request, *args, **kwargs):
        image_serializer = EvImageSerializer(data=request.data)
        if image_serializer.is_valid():
            image_serializer.save()
            return Response(image_serializer.data, status=status.HTTP_201_CREATED)
        else:
            print('error', image_serializer.errors)
            return Response(image_serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@csrf_exempt
def EventAPI(request ,pk=0):
 if request.method=='GET':
      if pk==0:
       events = Evenement.objects.all()
       events_serializer = EventSerializer(events, many=True)
       return JsonResponse(events_serializer.data, safe=False)
      elif pk!=0:
          events = Evenement.objects.filter(PiId=pk) 
          events_serializer = EventSerializer(events, many=True)
          return JsonResponse(events_serializer.data, safe=False)
 elif request.method == 'POST':
       event_data = JSONParser().parse(request)
       event_serializer = EventSerializer(data=event_data)
       if event_serializer.is_valid():
        event_serializer.save()
        return JsonResponse("creating event Successfully", safe=False)
       return JsonResponse("error ,make sure you have supply all the required fields ", safe=False)
 elif request.method == 'PUT':
       event_data = JSONParser().parse(request)
       event = Evenement.objects.get(idEvenement=pk)
       event_serializer = EventSerializer(event, data=event_data )
       if event_serializer.is_valid():
         event_serializer.save()
         return JsonResponse("Updated Successfully", safe=False)
       return JsonResponse("Failed To Update", safe=False)	
 elif request.method == 'DELETE':
		 event = Evenement.objects.get(idEvenement=pk)
		 event.delete()
		 return JsonResponse("event has been Deleted Successfully", safe=False)				


@csrf_exempt
def PIAPI(request ,pk=0):
 if request.method=='GET':
      if(pk==0):
        pi = PointInteret.objects.all()
        pi_serializer = PISerializer(pi, many=True)
        return JsonResponse(pi_serializer.data, safe=False)
      elif(pk!=0):
        pi= PointInteret.objects.get(idPoint=pk)
        pi_serializer=PISerializer(pi)
        return JsonResponse(pi_serializer.data, safe=False)
 elif request.method == 'POST':
       pi_data = JSONParser().parse(request)
       pi_serializer = PISerializer(data=pi_data)
       if pi_serializer.is_valid():
         pi_serializer.save()
         return JsonResponse(["creating PI Successfully",pi_serializer.data['idPoint']], safe=False)
       return JsonResponse("error ,make sure you have supply all the required fields ", safe=False)
 elif request.method == 'PUT':
       pi_data = JSONParser().parse(request)
       pi= PointInteret.objects.get(idPoint=pi_data['idPoint'])
       pi_serializer = PISerializer(pi, data=pi_data )
       if pi_serializer.is_valid():
         pi_serializer.save()
         return JsonResponse("Updated Successfully", safe=False)
       return JsonResponse("Failed To Update")	
 elif request.method == 'DELETE':
		 pi= PointInteret.objects.get(idPoint=pk)
		 pi.delete()
		 return JsonResponse("PI has been Deleted Successfully", safe=False)				

@csrf_exempt
def CommentaireAPI(request ,pk=0):
 if request.method=='GET':
      if (pk!=0):
       commentaires= Commentaire.objects.filter(PiId=pk)
       commentaires_serializer = CommentaireSerializer(commentaires, many=True)
       return JsonResponse(commentaires_serializer.data, safe=False)
      elif (pk==0):
       commentaires= Commentaire.objects.filter(accept=0)
       commentaires_serializer = CommentaireSerializer(commentaires, many=True)
       return JsonResponse(commentaires_serializer.data, safe=False)   
 elif request.method == 'POST':
       commentaire_data = JSONParser().parse(request)
       commentaire_serializer = CommentaireSerializer(data=commentaire_data)
       if commentaire_serializer.is_valid():
         commentaire_serializer.save()
         return JsonResponse("creating commentaire Successfully", safe=False)
       return JsonResponse("error ,make sure you have supply all the required fields ", safe=False)
 elif request.method == 'PUT':
       commentaire_data = JSONParser().parse(request)
       commentaire= Commentaire.objects.get(idCommentaire=commentaire_data['idCommentaire'])
       commentaire_serializer = CommentaireSerializer(commentaire, data=commentaire_data )
       if commentaire_serializer.is_valid():
         commentaire_serializer.save()
         return JsonResponse("Updated Successfully", safe=False)
       return JsonResponse("Failed To Update")	
 elif request.method == 'DELETE':
		 commentaire = Commentaire.objects.get(idCommentaire=pk)
		 commentaire.delete()
		 return JsonResponse("Commentaire has been Deleted Successfully", safe=False)				

@csrf_exempt
def MTAPI(request ,pk=0):
 if request.method == 'GET':
    if pk != 0:
        mts = MoyenTransport.objects.filter(pk=pk)
        mts_serializer = MTSerializer(mts, many=True)
        return JsonResponse(mts_serializer.data, safe=False)
    else:
        mts = MoyenTransport.objects.all()
        mts_serializer = MTSerializer(mts, many=True)
        return JsonResponse(mts_serializer.data, safe=False)      
 elif request.method == 'POST':
       mt_data = JSONParser().parse(request)
       mt_serializer = MTSerializer(data=mt_data)
       if mt_serializer.is_valid():
          mt_serializer.save()
          return JsonResponse("creating moyen transport Successfully", safe=False)
       return JsonResponse("error ,make sure you have supply all the required fields ", safe=False)
 elif request.method == 'PUT':
       mt_data = JSONParser().parse(request)
       mt = MoyenTransport.objects.get(idMoyenTrasport=event_data['idMoyenTransport'])
       mt_serializer = MTSerializer(MT, data=mt_data )
       if mt_serializer.is_valid():
         mt_serializer.save()
         return JsonResponse("Updated Successfully", safe=False)
       return JsonResponse("Failed To Update")	
 elif request.method == 'DELETE':
		 mt = MoyenTransport.objects.get(idMoyenTransport=pk)
		 mt.delete()
		 return JsonResponse("moyen transport has been Deleted Successfully", safe=False)				

@csrf_exempt
def RegionAPI(request ,pk=0):
 if request.method=='GET':
      if(pk==0):
       regions = Region.objects.all()
       regions_serializer = RegionSerializer(regions, many=True)
       return JsonResponse(regions_serializer.data, safe=False)
      elif(pk!=0):
        pis= PointInteret.objects.filter(regionId=pk)
        pi_serializer=PISerializer(pis,many=True)
        return JsonResponse(pi_serializer.data, safe=False)
 elif request.method == 'POST':
       region_data = JSONParser().parse(request)
       region_serializer = RegionSerializer(data=region_data)
       if region_serializer.is_valid():
            region_serializer.save()
       return JsonResponse("creating region Successfully", safe=False)
 elif request.method == 'PUT':
       event_data = JSONParser().parse(request)
       region = Evenement.objects.get(idRegion= region_data['idRegion'])
       region_serializer =  RegionSerializer( region, data= region_data )
       if  region_serializer.is_valid():
          region_serializer.save()
          return JsonResponse("Updated Successfully", safe=False)
       return JsonResponse("Failed To Update")	
 elif request.method == 'DELETE':
		  region = Region.objects.get(idEvenement=pk)
		  region.delete()
		  return JsonResponse(" region has been Deleted Successfully", safe=False)				
@csrf_exempt
def Login (request,pk=0):
   if request.method=='POST':
       visiteur_data = JSONParser().parse(request)
       mdp=visiteur_data["motDePasse"]
       visiteur_data["motDePasse"]=make_password(mdp,hasher='bcrypt')
       visiteur_serializer = VisiteurSerializer(data=visiteur_data)
       visiteur=Visiteur.objects.filter(email=visiteur_data["email"])
       vis_ser= VisiteurSerializer(visiteur,many=True)
       if  visiteur_serializer.is_valid():
         if vis_ser.data!=[]:
           if check_password( mdp,vis_ser.data[0]["motDePasse"]):
            #response.set_cookie(settings.USE_ID_COOKIE_NAME,vis_ser.data[0]["idVisiteur"],httponly=True)
            return JsonResponse("loging succesfully", safe=False)
           return JsonResponse("mot de passe erroné", safe=False)
         return JsonResponse("unknown user ,you should sign up first",safe=False)
       return JsonResponse("error",safe=False)      
 
@csrf_exempt
def VisiteurAPI(request ):

 if request.method == 'POST':
       visiteur_data = JSONParser().parse(request)
       mdp=visiteur_data["motDePasse"]
       mdp=make_password(mdp,hasher='bcrypt')
       visiteur_data["motDePasse"]=make_password(mdp,hasher='bcrypt')
       visiteur_serializer = VisiteurSerializer(data=visiteur_data)
       visiteur=Visiteur.objects.filter(email=visiteur_data["email"])
       vis_ser= VisiteurSerializer(visiteur,many=True)
       if  visiteur_serializer.is_valid():
            if vis_ser.data==[]:
             token = get_random_string(length=32)
             VisiteurAuth.objects.create(email=visiteur_data["email"],Nom=visiteur_data["Nom"],Prenom=visiteur_data["Prenom"],NumTel=visiteur_data["NumTel"],Pays=visiteur_data["Pays"],motDePasse=mdp,token=token)
             confirmUrl=request.build_absolute_uri(f'/confirm/{token}/')
             send_mail('Confirm your Email',f'Click the folllowing link to confirm your email:{confirmUrl}','ki_mechitoua@esi.dz',[visiteur_data['email']],fail_silently=False)       
             return render(request,'confirmation_sent.html')
            return JsonResponse("user with the same email already exists", safe=False)
       return JsonResponse("error",safe=False)
 elif request.method == 'PUT':
       visiteur_data = JSONParser().parse(request)
       visiteur =Visiteur.objects.get(email=visiteur_data['email'])
       visiteur_serializer = VisiteurSerializer(visiteur, data=visiteur_data )
       if  visiteur_serializer.is_valid():
         if check_password( visiteur_data["motDePasse"],visiteur.motDePasse):
           visiteur_serializer.save()
           return JsonResponse("Updated Successfully", safe=False)
       return JsonResponse("Failed To Update", safe=False)
       
 elif request.method == 'DELETE':
          visiteur_data = JSONParser().parse(request)
          visiteur = Visiteur.objects.get(email=visiteur_data['email'])
          if check_password( visiteur_data["motDePasse"],visiteur.motDePasse):
           visiteur.delete()
           return JsonResponse("visiteur has been deleted Successfully", safe=False)
          return JsonResponse("visiteur has not been Deleted Successfully", safe=False)				
            
@csrf_exempt
def confirm_registration(request,tkn ):
 if request.method == 'GET': 
      try:
       visiteur_data=VisiteurAuth.objects.get(token=tkn)
       Visiteur.objects.create(email=visiteur_data.email,Nom=visiteur_data.Nom,Prenom=visiteur_data.Prenom,NumTel=visiteur_data.NumTel,Pays=visiteur_data.Pays,motDePasse=visiteur_data.motDePasse)
       visiteur_data.delete()
       return JsonResponse("user created seccusfully",safe=False)
      except ObjectDoesNotExist:
       return JsonResponse("confirmation link has expired",safe=False)


@csrf_exempt

def AdminAPI(request):
 if request.method=='POST':
       admin_data = JSONParser().parse(request)
       mdp=admin_data["motDePasse"]
       print(mdp)
       admin=Admin.objects.filter(email=admin_data["email"])
       ad_ser= AdminSerializer(admin,many=True)
       if ad_ser.data!=[]:
           if  mdp==ad_ser.data[0]["motDePasse"]:
            return JsonResponse("loging succesfully", safe=False)
           return JsonResponse("mot de passe erroné", safe=False)
       return JsonResponse("unexisting admin",safe=False)
@csrf_exempt
def CreateAdminApi(request):
      if(request.method=='POST'):
            admin=JSONParser().parse(request)
            ad_ser=AdminSerializer(data=admin)
            if ad_ser.is_valid():
              ad_ser.save()
              return JsonResponse("creating admin succesfully",safe=False)
            else:
                  print(ad_ser.errors)
                  return JsonResponse("error",safe=False)
            

@csrf_exempt
def Diffrence(lat1,lon1,lat2,lon2):
    lat1 = radians(lat1)
    lon1 = radians(lon1)
    lat2 = radians(lat2)
    lon2 = radians(lon2)

    # Rayon moyen de la Terre en mètres
    radius = 6371.0 * 1000 # en mètres

    # Différence de latitude et de longitude
    dlat = lat2 - lat1
    dlon = lon2 - lon1

    # Formule de la distance de Haversine
    a = sin(dlat / 2)**2 + cos(lat1) * cos(lat2) * sin(dlon / 2)**2
    c = 2 * atan2(sqrt(a), sqrt(1 - a))

    distance = radius * c
    return distance
def ActualitesAPI(request,pk=0):
    if(request.method=='GET'):
      actualites_data = JSONParser().parse(request)
      lat=actualites_data["latitude"]
      lng=actualites_data["longitude"]
      dist=Diffrence(45,12,25,23)
      print(dist)
      closest_events=PointInteret.objects.annotate(distance=Diffrence(lat,lng,F('latitude'),F('longitude'))).order_by('distance')[:10]
      actSer=EventSerializer(closest_events,many=True)      
    return JsonResponse(actSer.data,safe=False)