# 1 – Analyse MCD existant

## 1. Etablir et rédiger les règles de gestion correspondant au domaine étudié du SI.

Les employés sont identifiés par un numéro unique, possèdent un nom, un prénom, une date d'entrée et un âge.

Ils son affectés à un service. Chaque service est identifié par un numéro unique et possèdent un nom.

Chaque service peut disposer si besoin de véhicule(s) durant des périodes.
Chaque période est indentifiée par un numéro unique, et possède une date de début et une date de fin.
Chaque véhicule est identifié par un numéro unique d'immatriculation et possède une date d'entrée dans le parc automobile.

Un véhicule est d'un type de modèle particulier. Chaque modèle est identifié par un numéro unique, et possède un nom court et un nom long.

Chaque modèle est produit par une marque. Chaque marque est identifiée par un numéro unique et possède un nom de marque.

Chaque employé peut utiliser un ou plusieurs véhicules.

## 2. Rescencer les associations et préciser leur type (CIF, CIM).

Il y a 5 associations:
- affecter
- disposerDe
- estDuType
- ProduitPar
- utiliser

affecter: CIF (Contrainte d'Intégrité Fonctionnelle) car il y a une branche avec un max de 1. De plus elle est binaire et elle ne possède pas de propriété.

disposerDe: CMI (Contrainte d'intégrité multiple) car elle n'a pas de 1 en max sur l'une de ses branche, et elle est ternaire.

estDutype: CIF car une de ses branches a un max en 1. De plus elle est binaire et ne possède pas de propriété.

ProduitPar: CIF car une des ses branches a un max en 1. De plus elle est binaire et ne possède pas de propriété.

utiliser: CIF car une de ses branches a un max en 1. De plus elle est binaire et ne possède pas de propriété.

## 3. Réaliser le modèle logique des données relationnel (MLDR).

**Employe**(<font color='cyan'><ins>id</ins></font>, nom, prenom, dateEntree, age, <font color='Chartreuse'>#idService</font>)  
<font color='cyan'>Clé primaire: id</font>  
<font color='Chartreuse'>Clé(s) étrangère(s): idService en référence à id de Service</font>  


**Service**(<font color="cyan"><ins>id</ins></font>, nom)
<font color='cyan'>Clé primaire: id</font>  

**Periode**(<font color='cyan'><ins>id_Periode</ins></font>, dateDebut, dateFin, <font color='Chartreuse'>#idService, #immat</font>)  
<font color='cyan'>Clé primaire: id_periode</font>  
<font color='Chartreuse'>Clé(s) étrangère(s):
- idService en référence à id de Service
- immat en référence à immat de Vehicule

</font>  


**Vehicule**(<font color='cyan'><ins>immat</ins></font>, dateEntreeParc, <font color='Chartreuse'>#idEmploye, #idModele</font>)  
<font color='cyan'>Clé primaire: immat</font>  
<font color='Chartreuse'>Clé(s) secondaire(s):
- idEmploye en référence à id d'Employe
- idModele en référence à id de Modele 

</font>  


**Modele**(<font color='cyan'><ins>id</ins></font>, nomCourt, nomLong, <font color='Chartreuse'>#idMarque</font>)  
<font color='cyan'>Clé primaire: id</font>  
<font color='Chartreuse'>Clé(s) secondaire(s): idMarque en référence à id de Marque</font>  


**Marque**(<font color='cyan'><ins>id</ins></font>, nomMarque)  
<font color='cyan'>Clé primaire: id</font>  


**disposerDe**(<font color='Chartreuse'>#idService, #immat, #id_Periode</font>)  
<font color='cyan'>Clé primaire: idService, immat, id_Periode</font>  
<font color='Chartreuse'>Clé(s) étrangère(s):
- idService en référence à id de Service
- immat en référence à immat de Vehicule
- id_Periode en référence à id_Periode de Periode

</font>
