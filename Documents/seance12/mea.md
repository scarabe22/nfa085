# 1 – Analyse MCD existant


## 1. Etablir et rédiger les règles de gestion correspondant au domaine étudié du SI.

Les clients sont identifiés par un numéro unique, possèdent un nom, un prénom, une adresse (adresse, cp, ville) et des coordonnées de contact (tel, email).

Ils peuvent passer des commandes qui sont identifiées par un numéro unique, une date de création, une adresse de livraison et un code d'état.

La livraison de ces commandes peut se faire selon avec ou sans types de livraison.

La livraison sans type est identifiée par un numéro unique et une date de livraison.

La livraison avec type est identifiée par un numéro unique, un libellé, des frais de port et le délai de livraison.

Les commandes peuvent être détaillées selon une certaine quantité et concernent des articles qui sont identifiés par une référence (numéro unique), une désignation, un prix, une tranche d'âge et sa disponibilité.

La livraison peut se faire par lot selon une certaine quantité.

## 2. Rescencer les associations et préciser leur type (CIF, CIM).

Il y a 5 associations:
- Passer de type CIF (Contrainte d'Intégrité Fonctionnelle) car une des branches a un max en 1.
- LivrerEnMode: de type CIF car une des branches a un max en 1.
- Livrer de type CIF car une des branches a un max en 1.
- LivrerLot de type CIM (Contrainte d'Intégrité Multiple) car elle possède une propriété.
- Detailler de type CIM car elle possède une propriété.

## 3. Réaliser le modèle logique des données relationnel (MLDR).

Client(id_client, nom, prenom, adresse, cp, ville, tel, email)
clé primaire: id_Client

Commande(id_Commande, dateC, adresseLivraison, codeEtat, id_Client, id_TypeLivraison)
clé primaire: id_Commande
clés étrangères: id_Client en référence à id_client de Client
id_TypeLivraison en référence à type de livraison Textuelle "courte":
Commande(id_Commande, dateC, adresseLivraison, codeEtat, #id_Client, #id_TypeLivraison)

Passer(id_commande, id_Client)
Clé primaire: id_Commande, id_client
Clés étrangères: id_Commande en référence à id_Commande de Commande
id_Client en référence à id_Client de Client
Textuelle "courte":
Passer(#id_Commande, #id_Client)

LivrerEnMode(#id_TypeLivraison, #id_Commande)
Clés étrangères: id_TypeLivraison, id_Commande

TypeLivraison(id_TypeLivraison, libelle, fraisPort, delaiPort)
Clé primaire: TypeLivraison

Article(reference, designation, prix, trancheAge, dispo)
Clé primaire: reference

Livraison(id_Livraison, dateLivraison, #reference)
Clé primaire: id_Livraison
Clé étrangère: reference

LivrerLot(#id_livraison, #reference, quantiteLivree)

Detailler(#reference, #id_Commande, quantite)

Livrer(#id_livraison, #id_Commande)

# 2 – Corrections sur MCD

Client ---(0,n)---Passer---(1,1)---Commande---(1,n)---Comporter---(0,n)---Produit

Produit---(1,n)---Fournir---(0,n)---Fournisseur

Commande est passée par un et un seul client donc la cardinalité est (1,1)
S'il y a une commande il y a au moins un produit dans la commande donc entre Commande et Comporter il y a une cardinalité de (1,n).
Un produit peut faire l'objet de d'une commande ou pas (il est juste en stock) donc entre comporter et produit la cardinalité est de (0,n).
Un produit peut être fourni par un ou plusieurs fournisseurs donc la cardinalité entre produit et Fournir est (1,n).

D'après les règles de gestion, il n'y a pas d'identifiant Fournisseur id_Fournisseur, c'est la raisonSociale qui est la clé primaire.


# 3 – MCD Faux

Un Usager peut souscrire ou pas un seul contrat donc la cardinalité entre Usager et Souscrire est (0,1).

L'entité DateContrat avec l'attribut dateC n'a pas lieu d'être car on peut mettre dateC en propriété de l'association Souscrire.

La propriété numImmat de l'association Concerner est superflue.

L'entité ModeleBatterie est concerné par un seul contrat donc la cardinalité entre Concerner et ModeleBatterie est (1,1).

