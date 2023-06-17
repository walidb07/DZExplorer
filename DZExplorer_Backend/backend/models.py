from django.db import models


# Create your models here.
class Region(models.Model):
    idRegion=models.AutoField(primary_key=True) 
    designation=models.CharField(max_length=50,default="")
    zoom=models.IntegerField(default=5)
    xcoor=models.FloatField(default=0)
    ycoor=models.FloatField(default=0)


class Admin (models.Model):
    idAdmin=models.AutoField(primary_key=True)
    Nom=models.CharField(max_length=60)
    Prenom=models.CharField(max_length=60,null=True)
    NumTel=models.CharField(max_length=10,null=True)
    email=models.EmailField(max_length=254)
    motDePasse=models.CharField(max_length=500)
    regionId=models.ForeignKey(Region,on_delete=models.SET_NULL,default=None,null=True) 

class PointInteret(models.Model):
  JOUR_CHOICES=(
  ('dimanche','Dimanche'),
  ('lundi','Lundi'),
  ('mardi','Mardi'),
  ('mercredi','Mercredi'),
  ('jeudi','Jeudi'),
  ('vendredi','Vendredi'),
  ('samedi','Samedi'),
  ) 
  idPoint=models.AutoField(primary_key=True)
  Nom=models.CharField(max_length=60)
  description=models.CharField(max_length=500,default=" ")
  longitude=models.FloatField(default=4)
  latitude=models.FloatField(default=1)
  jours=models.CharField(max_length=100,choices=JOUR_CHOICES,blank=True)
  heureOuverture=models.TimeField(null=False,default="00:00:00")
  heureFermeture=models.TimeField(null=False,default="00:00:00")
  rate=models.FloatField(default=0)
  categorie=models.CharField(max_length=50,default=" ") 
  theme=models.CharField(max_length=50,default="")
  regionId=models.ForeignKey(Region,on_delete=models.SET_NULL,null=True)
  transports=models.ManyToManyField(to='moyentransport')
  def set_jours(self,days):
      self.jours=','.join(days)
  def get_jours(self):
     return  self.jours.split(',')if self.jours else []
class Evenement(models.Model):
    idEvenement=models.AutoField(primary_key=True)
    Nom=models.CharField(max_length=80)
    Description=models.CharField(max_length=400)
    DateDebut=models.DateField()
    DateFin=models.DateField()
    DatePublication=models.DateField(auto_now_add=True)
    PiId=models.ForeignKey(PointInteret,on_delete=models.CASCADE,default=None)
    
class Visiteur(models.Model):
    idVisiteur=models.AutoField(primary_key=True)
    Nom=models.CharField(max_length=60)
    Prenom=models.CharField(max_length=60,null=True)
    Pays=models.CharField(max_length=45)
    NumTel=models.CharField(max_length=10,null=True)
    email=models.EmailField(max_length=254)
    motDePasse=models.CharField(max_length=500)
class VisiteurAuth(models.Model):
    idauth=models.AutoField(primary_key=True)
    Nom=models.CharField(max_length=60)
    Prenom=models.CharField(max_length=60,null=True)
    Pays=models.CharField(max_length=45)
    NumTel=models.CharField(max_length=10,null=True)
    email=models.EmailField(max_length=254)
    motDePasse=models.CharField(max_length=500)
    token=models.CharField(max_length=32)
      

class Commentaire(models.Model):
    idCommentaire=models.AutoField(primary_key=True)
    Contenu=models.CharField(max_length=100)
    date=models.DateField(auto_now_add=True)
    visiteurId=models.ForeignKey(Visiteur,on_delete=models.CASCADE,default=None)
    PiId=models.ForeignKey(PointInteret,on_delete=models.CASCADE,default=None)
    accept=models.BooleanField(default=False)

class MoyenTransport(models.Model):
    idMoyenTransport=models.AutoField(primary_key=True)
    type=models.CharField(max_length=50)
    NombrePassagers=models.IntegerField()  
 
class eventImage(models.Model):
  id=models.AutoField(primary_key=True)
  image=models.ImageField(upload_to='images/',default=None) 
  eventId=models.ForeignKey(Evenement,on_delete=models.CASCADE,default=None)
class PiImg(models.Model):
  id=models.AutoField(primary_key=True)
  image=models.ImageField(upload_to='images/',default=None) 
  piId=models.ForeignKey(PointInteret,on_delete=models.CASCADE,default=None)
 
  
