from backend.models import PointInteret 
from backend.models import  Evenement
from backend.models import Commentaire
from backend.models import MoyenTransport
from backend.models import Region
from backend.models import Visiteur
from backend.models import VisiteurAuth
from backend.models import Admin
from backend.models import PiImg
from backend.models import eventImage
from rest_framework import fields,serializers




class PISerializer(serializers.ModelSerializer):
    jours = serializers.ListField(child=serializers.CharField())

    class Meta:
        model = PointInteret
        fields = '__all__'

    def create(self, validated_data):
        jours = validated_data.pop('jours', [])
        instance = super().create(validated_data)
        instance.set_jours(jours)
        instance.save()
        return instance

    def update(self, instance, validated_data):
        jours = validated_data.pop('jours', [])
        instance = super().update(instance, validated_data)
        instance.set_jours(jours)
        instance.save()
        return instance

    def to_representation(self, instance):
        representation = super().to_representation(instance)
        jours = instance.get_jours()
        representation['jours'] = jours
        return representation
class EventSerializer (serializers.ModelSerializer):
 class Meta:
  model=Evenement
  fields=['Nom','Description','DateDebut','DateFin','PiId']
class CommentaireSerializer (serializers.ModelSerializer):
 class Meta:
  model=Commentaire
  fields=['Contenu','visiteurId','PiId']
class MTSerializer (serializers.ModelSerializer):
 class Meta:
  model=MoyenTransport
  fields='__all__'
class RegionSerializer (serializers.ModelSerializer):
 class Meta:
  model=Region
  fields='__all__'
class VisiteurSerializer (serializers.ModelSerializer):
 class Meta:
  model=Visiteur
  fields='__all__'
class VisiteurAuthSerializer (serializers.ModelSerializer):
 class Meta:
  model=VisiteurAuth
  fields='__all__'
class AdminSerializer (serializers.ModelSerializer):
 
 class Meta:
  model=Admin
  fields='__all__'
class   PiImageSerializer (serializers.ModelSerializer):
 class Meta:
  model=PiImg
  fields='__all__'
class EvImageSerializer (serializers.ModelSerializer):
 class Meta:
  model=eventImage
  fields='__all__' 