# Client Serveur Web – Culture Web  

[1 - Web statique et web dynamique](#1---web-statique-et-web-dynamique)    
[2 - Langages](#2--langages)  
[3 - Technologies](#3---technologies)  
[4 - Librairie et framework](#4---librairie-et-framework)   
[5 - Architecture](#5--architecture)  
[6 - Interrogation d'API Web - lecture](#6--interrogation-dapi-web---lecture)  
[7 - Interrogation d'API Web - operations multiples](#7---interrogation-dapi-web---operations-multiples)  
[8 - Pages Web](#8---pages-web)   
[9 - Configuration de serveur HTTP ](#9---configuration-de-serveur-http)

[Menu](./files/menu.md)  

## 1 - Web statique et web dynamique    
[[haut de page]](#client-serveur-web--culture-web)  

### Expliquez la différence entre les deux

|                                |                      Pages Web statiques	                   |                        Pages Web dynamiques                                                       |
|:------------------------------:|:--------------------------------------------------------------:|:-------------------------------------------------------------------------------------------------:|
|            Contenu             | fixe et ne change pas en fonction des actions de l'utilisateur |        généré en temps réel en fonction de l'action de l'utilisateur ou d'autres facteurs         |
|        Base de données	      |                     pas de base de données                     |                                    appel à une base de données                                    |
| Temps de chargement de la page |                             rapide                             | plus long en théorie (outils d'accélération tels que le CDN, le caching et l'optimisation du code |
|   Changement d’information	  |                 manuelle en modifiant le code                  |                                            automatique                                            |
|         Complexité	          |                       facile à concevoir                       |                                   moins aisé à mettre en oeuvre                                   |
|          Code utilisé          |                     HTML, CSS, JavaScript                      |               HTML, CSS, JavaScript, NodeJs, Python, Ruby, Perl, PHP, AJAX, ASP ...               |
|            qualité             |                          consultatif                           |                                            interactif                                             | 
|         fréquentation          |                           plus rare                            |                                     accrue car plus attractif                                     |
<br>

### Comment identifier qu’une ressource Web est statique ou dynamique ?

**De 2 façons:**
- Aller sur le site et voir si la page qui s'affiche change ou pas. S'il s'agit d'une page web statique, il n'y a pas de changement.
 S'il y a des changements dans la page lorsque l'on y retourne plusieurs fois, il s'agit alors d'une page web dynamique.  
- Utiliser l'inspecteur du navigateur et voir si des scripts particuliers sont présents.  
La présence de scripts JavaScript peut faire penser à un site dynamique dans la mesure où JavaSript est utilisé pour apporter
une certaine interactivité, mais cela ne doit pas être le seul critère.  
En effet, selon l'importance du degré d'interactivité, cela répond ou pas aux critères de définition d'un site statique ou dynamique.
Des scripts tels que des appels AJAX, des scripts serveurs (PHP, ASP, JSP, Ruby on Rail...) sont plus en faveur d'un site dynamique.

<br>

### Les sites suivants sont-ils statiques ou dynamiques ? Justifiez.   

o http://www.rleonardi.com/interactive-resume/  
Ce site est visiblement dynamique dans la mesure où il y a interaction entre la page web et l'utilisateur par le biais de la souris ou du clavier.  
Le degré d'interactivité est toutefois limité, car le déroulement de l'animation est toujours la même.   

o https://www.je-change-de-metier.com/  
Il s'agit d'un site statique, car à chaque fois que l'on accède à la page web, il n'y a aucun changement quant à l'affichage.  

<br>

## 2 – Langages  
[[haut de page]](#client-serveur-web--culture-web)

### Après avoir expliqué ce que sont back et front-end, citez les langages utilisables de chacun des 2 côtés (pas besoin d’être exhaustif en back…).
#### - front-end   
Cela correspond à la partie visible du site web, l'interface utilisateur.  
Les images, le texte, la mise en page, le design, correspondent au front-end.    


#### - back-end  
Il s'agit de la partie cachée qui travaille en arrière-plan, comme la gestion des bases de données, l'authentification des utilisateurs et la gestion des requêtes de l'utilisateur.

|          |                               front-end                               |                back-end                |
|:--------:|:---------------------------------------------------------------------:|:--------------------------------------:|
| langages |  HTML, CSS, JavaScript,SSAS, React, Angular, Vue, jQuery, Swift, Elm  | Node.js, PHP, Python, Ruby, Java, Perl |


## 3 - Technologies  
[[haut de page]](#client-serveur-web--culture-web)  

### Expliquez les notions suivantes et donnez en une illustration :
• Ajax  
• SPA web  
• API web  

#### - Ajax :  
Ajax (Asynchronous JavaScript and XML) est une technique de développement web qui permet de créer des applications web interactives et dynamiques sans nécessiter de rechargement de la page entière. Cela signifie qu'une page peut être mise à jour en arrière-plan sans perturber l'expérience de l'utilisateur. Ajax utilise des technologies web telles que JavaScript et XML pour envoyer et recevoir des données du serveur, souvent via des requêtes HTTP asynchrones.  
  Par exemple, lorsqu'un utilisateur remplit un formulaire de contact sur un site web et clique sur le bouton "Envoyer", Ajax peut être utilisé pour envoyer les données du formulaire au serveur en arrière-plan, sans que la page entière soit rechargée. Les messages de réussite ou d'erreur peuvent alors être affichés dynamiquement sur la page, sans perturber l'expérience utilisateur.  

#### - SPA web :  
  SPA (Single Page Application) est un type d'application web qui ne nécessite qu'une seule page HTML pour fonctionner. Les SPAs utilisent souvent des frameworks JavaScript tels que React, Vue.js ou Angular pour rendre la page interactive et dynamique en modifiant le contenu de la page en réponse aux actions de l'utilisateur, sans que la page entière soit rechargée.
  Par exemple, un site web de commerce électronique peut être conçu comme une SPA, où les produits sont affichés dynamiquement à mesure que l'utilisateur fait défiler la page, sans qu'une nouvelle page soit chargée à chaque fois. Cela peut rendre l'expérience utilisateur plus fluide et rapide.

#### - API web :  
Une API (Application Programming Interface) web est un ensemble de protocoles et de spécifications qui permettent aux applications de communiquer entre elles via Internet. Les API web permettent aux développeurs de créer des applications qui utilisent des services web tiers pour accéder à des données et des fonctionnalités supplémentaires.
Par exemple, une application mobile de réservation de voyage peut utiliser une API web pour se connecter à une base de données de compagnies aériennes, de trains ou d'hôtels pour rechercher des offres et des disponibilités. L'API web fournit un moyen standardisé pour que les différentes applications communiquent entre elles, ce qui permet une intégration plus facile et une plus grande flexibilité dans la création d'applications web. Citons également Google Map et des services de paiement en ligne. Les API sont nombreuses et souvent payantes mais le gain de temps en développement est en faveur de leur utilisation. 

<br>

## 4 - Librairie et framework
[[haut de page]](#client-serveur-web--culture-web)

### Quelle est la différence entre les 2 ?   

**Une bibliothèque** (ou librairie) est un ensemble de fonctions ou de modules qui peuvent être appelés par un programme pour effectuer des tâches spécifiques. Une bibliothèque est généralement conçue pour effectuer des tâches particulières et est souvent modulaire, ce qui signifie qu'elle peut être utilisée pour ajouter des fonctionnalités spécifiques à un programme.

**Un framework**, quant à lui, est un ensemble de concepts, de pratiques et de normes de codage qui peuvent être utilisés pour guider le développement d'applications. Les frameworks fournissent souvent une structure de base pour l'architecture d'une application, ce qui peut accélérer le développement. Les frameworks peuvent également inclure des bibliothèques pour faciliter la tâche des développeurs.  

### Citez quelques librairies et framework, en dissociant back et front-end  

En ce qui concerne les exemples de bibliothèques et de frameworks pour le développement web, on peut les dissocier en back-end et front-end :

#### Back-end :

- *Express* : un framework pour Node.js pour construire des applications web et des API.
- *Django* : un framework pour Python pour le développement web.
- *Spring* : un framework pour Java pour la création d'applications web et d'API. 
- *Axios* : une bibliothèque JavaScript permettant de réaliser des requêtes HTTP depuis le navigateur ou depuis Node.js.
- *Lodash* : une bibliothèque JavaScript qui fournit des méthodes utilitaires pour manipuler des tableaux, des chaînes de caractères, des objets et bien plus encore.
- *Mongoose* : une bibliothèque Node.js pour la gestion de bases de données MongoDB. 

#### Front-end :

- *Query* : une bibliothèque JavaScript qui simplifie la manipulation du DOM et la gestion des événements.
- *Moment.js* : une bibliothèque JavaScript pour manipuler, valider et afficher des dates et des heures.
- *D3.js* : une bibliothèque JavaScript pour la visualisation de données à l'aide de graphiques et de tableaux interactifs.
- *React* : une bibliothèque JavaScript pour la création d'interfaces utilisateur.
- *Vue.js* : un framework pour la création d'interfaces utilisateur avec JavaScript.
- *Angular* : un framework pour la création d'applications web avec TypeScript. 
<br>

## 5 – Architecture  
[[haut de page]](#client-serveur-web--culture-web)

### Que qualifie-t-on d’architecture 3-tiers dans le domaine du Web ?

L'architecture 3-tiers est une approche courante pour la conception d'applications web. Cette architecture divise l'application en trois couches distinctes, chacune ayant sa propre fonction et ses propres responsabilités.

Voici une explication des trois couches :

**1. La couche de présentation (front-end)** : Cette couche est chargée de présenter l'interface utilisateur de l'application. Elle est généralement construite à l'aide de technologies telles que HTML, CSS et JavaScript. Elle communique avec la couche de logique métier via des requêtes HTTP. Il s'agit en fait du client, c'est à dire l'ordinateur qui navigue sur le Web grâce à des navigateurs tels que Microsoft EDGE, Google Chrome, Mozilla Firefox, Opera, Vivaldi et Safari.

**2. La couche de logique métier (back-end)** : Cette couche est responsable de la gestion de la logique métier de l'application. Elle est chargée de traiter les requêtes HTTP de la couche de présentation et de fournir les résultats appropriés. Elle peut également communiquer avec une base de données pour stocker ou récupérer des informations. Il s'agit en fait du serveur qui réceptionne les demandes du client et lui renvoie un resultat, tels que Apache, NGINX, et Microsoft IIS.

**3. La couche de stockage de données** : Cette couche est responsable du stockage et de la gestion des données de l'application. Elle peut être une base de données, un système de fichiers ou tout autre système de stockage approprié. Il s'agit principalement des serveurs de base de données tels que MySQL, Microsoft SQL Server, Oracle Database, PostgreSQl et mongoDB.


Voici un exemple de schéma illustrant l'architecture 3-tiers pour une application web :

![](images/deux_tiers.excalidraw.png)  
*Réalisé avec Excalidraw (Obsidian)*


Dans ce schéma, la couche de présentation (front-end) est chargée de présenter l'interface utilisateur de l'application. Elle envoie une requête HTTP à la couche de logique métier (back-end), qui traite la requête et fournit les résultats appropriés. La couche de logique métier peut également communiquer avec la couche de stockage de données pour stocker ou récupérer des informations nécessaires. Enfin, la couche de logique métier renvoie une réponse HTTP à la couche de présentation, qui peut alors afficher les résultats à l'utilisateur.

<br>

## 6 – Interrogation d’API Web - lecture   
[[haut de page]](#client-serveur-web--culture-web)  
### Créer un compte sur API Ninjas    

![](images/api_ninja.png)  

 Interrogations à partir de CURL ou Reqbin, préciser à chaque fois la requête effectuée et la réponse obtenue (y compris les headers).  

#### 1 -  En utilisant l’API dadjokes, retourner 3 blagues.
   
- Git Bash  
 ```shell
$ curl https://api.api-ninjas.com/v1/dadjokes?limit=3 -H "X-Api-Key: AIW2INJ1OR5AP4K3ER8MTgCxDuOB0VHNkRl55eHu" | jq
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed
100   195  100   195    0     0    294      0 --:--:-- --:--:-- --:--:--   296
[
  {
    "joke": "What’s green and has wheels? Grass. I lied about the wheels."
  },
  {
    "joke": "It really takes guts to be an organ donor."
  },
  {
    "joke": "Why did the picture go to jail? He was framed."
  }
]
```  
<br>

- Requête  
```shell
GET /v1/dadjokes?limit=3 HTTP/1.1
Host: api.api-ninjas.com
X-Api-Key: AIW2INJ1OR5AP4K3ER8MTgCxDuOB0VHNkRl55eHu
```
<br>

- Réponse  
```shell
HTTP/1.1 200 OK
Content-Type: application/json
Content-Length: 322
Connection: keep-alive
Date: Wed, 15 Mar 2023 23:49:31 GMT
x-amzn-RequestId: 08079d93-31df-4c88-8577-7d967b294c30
Access-Control-Allow-Origin: *
Allow: GET, OPTIONS, POST
Access-Control-Allow-Headers: *
x-amz-apigw-id: B2LtwGhGPHcFavQ=
Access-Control-Allow-Methods: GET, OPTIONS, POST
X-Amzn-Trace-Id: Root=1-6412598a-0b283ce3442492345fc95633;Sampled=0
X-Cache: Miss from cloudfront
Via: 1.1 534f7e815b25f5cd40ef32ea39fc9a8c.cloudfront.net (CloudFront)
X-Amz-Cf-Pop: JFK50-P4
X-Amz-Cf-Id: aQU2Zfla4ORIPW58y3K9KOdMXuA-wQPFHrku1wetLqV119HoWa93ag==

[{"joke": "I wanted to go on a diet, but I feel like I have way too much on my plate right now."}, {"joke": "My wife just completed a 40 week bodybuilding program this morning. It's a girl and weighs 7lbs 12 oz."}, {"joke": "I was reading a great book about an immortal dog the other day. It was impossible to put down."}]
```
<br>

#### 2 - En utilisant l’API textsimilarity, préciser le score de similarité entre les 2 textes suivants :  

   • Nous le savons, et pas seulement de Marseille.  
   • Le savon de Marseille  

- Git Bash
```shell
$ curl -X POST https://api.api-ninjas.com/v1/textsimilarity -H "X-Api-Key: AIW2INJ1OR5AP4K3ER8MTgCxDuOB0VHNkRl55eHu" -H "Content-Type: application/json" -d "{\"text_1\": \"Nous le savons, et pas seulement de Marseille.\", \"text_2\": \"Le savon de Marseille\"}"
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed
100   129  100    34  100    95     37    105 --:--:-- --:--:-- --:--:--   143{"similarity": 0.7598556280136108}
```
<br>

- Requête   
```shell
POST /v1/textsimilarity HTTP/1.1
Host: api.api-ninjas.com
X-Api-Key: AIW2INJ1OR5AP4K3ER8MTgCxDuOB0VHNkRl55eHu
Content-Type: application/json
Content-Length: 95

{"text_1": "Nous le savons, et pas seulement de Marseille.", "text_2": "Le savon de Marseille"}
```
<br>

- Réponse   
```shell
HTTP/1.1 200 OK
Content-Type: application/json
Content-Length: 34
Connection: keep-alive
Date: Wed, 15 Mar 2023 23:59:41 GMT
x-amzn-RequestId: 1d1897a7-453c-4679-9261-b101710f799a
Access-Control-Allow-Origin: *
Allow: GET, OPTIONS, POST
Access-Control-Allow-Headers: *
x-amz-apigw-id: B2NNEGndPHcFs2g=
Access-Control-Allow-Methods: GET, OPTIONS, POST
X-Amzn-Trace-Id: Root=1-64125bec-50f7cd241828cda75afbe151;Sampled=0
X-Cache: Miss from cloudfront
Via: 1.1 f7c13eeb01f01c4623bb4e70dbaa731a.cloudfront.net (CloudFront)
X-Amz-Cf-Pop: JFK50-P4
X-Amz-Cf-Id: c7IJc2hrppZWzDnFAL5ilsek-IfyA1XcpC8hcJZTTLQh_kA_ihInUQ==

{"similarity": 0.7598556280136108}
```
<br>

#### 3 - En utilisant l’API urllookup, rechercher l’isp et la localisation des sites suivants :  

*Leboncoin.fr*

- Git Bash
```shell
$ curl -X GET https://api.api-ninjas.com/v1/urllookup?url=https://www.leboncoin.fr/ -H "X-Api-Key: AIW2INJ1OR5AP4K3ER8MTgCxDuOB0VHNkRl55eHu" | jq
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed
100   275  100   275    0     0    367      0 --:--:-- --:--:-- --:--:--   370
{
  "is_valid": true,
  "country": "United States",
  "country_code": "US",
  "region_code": "OR",
  "region": "Oregon",
  "city": "Portland",
  "zip": "97207",
  "lat": 45.5051,
  "lon": -122.675,
  "timezone": "America/Los_Angeles",
  "isp": "Amazon Technologies Inc.",
  "url": "www.leboncoin.fr"
}
```
L'isp (*Internet Service Provider*) ou FAI (*Fournisseur d'Accès à Internet*) du site *leboncoin.fr* est "*Amazon Technologies Inc*".  
Il se situe à Portland dans l'état d'Oregon aux Etats-Unis.

- Requête
```shell
GET /v1/urllookup?url=https://www.leboncoin.fr/ HTTP/1.1
Host: api.api-ninjas.com
X-Api-Key: AIW2INJ1OR5AP4K3ER8MTgCxDuOB0VHNkRl55eHu
```   
<br>

- Réponse   
```shell
HTTP/1.1 200 OK
Content-Type: application/json
Content-Length: 275
Connection: keep-alive
Date: Thu, 16 Mar 2023 00:05:47 GMT
x-amzn-RequestId: 09864a2e-be7b-4292-9b9f-b93791070908
Access-Control-Allow-Origin: *
Allow: GET, OPTIONS, POST
Access-Control-Allow-Headers: *
x-amz-apigw-id: B2OGRGbNPHcFkxQ=
Access-Control-Allow-Methods: GET, OPTIONS, POST
X-Amzn-Trace-Id: Root=1-64125d5b-56edb8b206ecaf0135e4dd33;Sampled=0
X-Cache: Miss from cloudfront
Via: 1.1 dd80355363eac92e0372107558e579a8.cloudfront.net (CloudFront)
X-Amz-Cf-Pop: JFK50-P4
X-Amz-Cf-Id: dcls9SJmlSW7YGL6XILYOaAyzGq0h5Q3wwuW0Ryxfyu59g1Rjgw3FA==

{"is_valid": true, "country": "United States", "country_code": "US", "region_code": "OR", "region": "Oregon", "city": "Portland", "zip": "97207", "lat": 45.5051, "lon": -122.675, "timezone": "America/Los_Angeles", "isp": "Amazon Technologies Inc.", "url": "www.leboncoin.fr"}
```
<br>

*www.leparisien.fr*

- Git Bash
```shell
$ curl -X GET https://api.api-ninjas.com/v1/urllookup?url=https://www.leparisien.fr/ -H "X-Api-Key: AIW2INJ1OR5AP4K3ER8MTgCxDuOB0VHNkRl55eHu" | jq
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed
100   280  100   280    0     0    328      0 --:--:-- --:--:-- --:--:--   331
{
  "is_valid": true,
  "country": "United States",
  "country_code": "US",
  "region_code": "WA",
  "region": "Washington",
  "city": "Seattle",
  "zip": "98160",
  "lat": 47.6034,
  "lon": -122.3414,
  "timezone": "America/Los_Angeles",
  "isp": "Akamai International, BV",
  "url": "www.leparisien.fr"
}
```   
L'isp du site *leparisien.fr* est "*Akamai International, BV*".  
Il est situé à Seattle dans l'état de Washington aux Etats-Unis.   

<br>

- Requête   
```shell
GET /v1/urllookup?url=https://www.leparisien.fr/ HTTP/1.1
Host: api.api-ninjas.com
X-Api-Key: AIW2INJ1OR5AP4K3ER8MTgCxDuOB0VHNkRl55eHu
```   
<br>

- Réponse   
```shell
 HTTP/1.1 200 OK
Content-Type: application/json
Content-Length: 281
Connection: keep-alive
Date: Thu, 16 Mar 2023 00:31:42 GMT
x-amzn-RequestId: e7e58372-56c6-44d3-81f4-33293562c514
Access-Control-Allow-Origin: *
Allow: GET, OPTIONS, POST
Access-Control-Allow-Headers: *
x-amz-apigw-id: B2R5MFoHvHcFWXw=
Access-Control-Allow-Methods: GET, OPTIONS, POST
X-Amzn-Trace-Id: Root=1-6412636d-4bf372fb37ad44ac71725b63;Sampled=0
X-Cache: Miss from cloudfront
Via: 1.1 bd83fc15ab125846f839dd3c1ad21462.cloudfront.net (CloudFront)
X-Amz-Cf-Pop: JFK50-P4
X-Amz-Cf-Id: mOKp6ktPgwzhO3DXMYTB30f0umfA-93IiOh8oLhJRcof57JB94wVTg==

{"is_valid": true, "country": "United States", "country_code": "US", "region_code": "WA", "region": "Washington", "city": "Seattle", "zip": "98160", "lat": 47.6034, "lon": -122.3414, "timezone": "America/Los_Angeles", "isp": "Akamai International B.V.", "url": "www.leparisien.fr"}
```
<br>

*www.cdiscount.com*    
  
- Git Bash
```shell
$ curl -X GET https://api.api-ninjas.com/v1/urllookup?url=https://www.cdiscount.com/ -H "X-Api-Key: AIW2INJ1OR5AP4K3ER8MTgCxDuOB0VHNkRl55eHu" | jq
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed
100   263  100   263    0     0    374      0 --:--:-- --:--:-- --:--:--   378
{
  "is_valid": true,
  "country": "France",
  "country_code": "FR",
  "region_code": "IDF",
  "region": "Île-de-France",
  "city": "Paris",
  "zip": "75000",
  "lat": 48.8566,
  "lon": 2.35222,
  "timezone": "Europe/Paris",
  "isp": "F5 Networks SARL",
  "url": "www.cdiscount.com"
}
```   
L'isp du site *cdiscount.com* est "*F5 Networks SARL*".  
Il est situé à Paris.

<br>

- Requête  
```shell
GET /v1/urllookup?url=https://www.cdiscount.com/ HTTP/1.1
Host: api.api-ninjas.com
X-Api-Key: AIW2INJ1OR5AP4K3ER8MTgCxDuOB0VHNkRl55eHu
```
<br>

- Réponse  
```shell
HTTP/1.1 200 OK
Content-Type: application/json
Content-Length: 263
Connection: keep-alive
Date: Wed, 15 Mar 2023 23:42:22 GMT
x-amzn-RequestId: 8d0cf340-d468-4ed9-9dd8-ee4d5a7691c5
Access-Control-Allow-Origin: *
Allow: GET, OPTIONS, POST
Access-Control-Allow-Headers: *
x-amz-apigw-id: B2KqxHUPPHcFYxA=
Access-Control-Allow-Methods: GET, OPTIONS, POST
X-Amzn-Trace-Id: Root=1-641257de-3430ac8f2ebf35156ed07f7f;Sampled=0
X-Cache: Miss from cloudfront
Via: 1.1 d60ae27dae636821c1e43441a8146e02.cloudfront.net (CloudFront)
X-Amz-Cf-Pop: JFK50-P4
X-Amz-Cf-Id: IiU78CDjxZQ323z5iXnF2As9lJ88DgstDhT_CsKTICZUZThyKeKCyA==

{"is_valid": true, "country": "France", "country_code": "FR", "region_code": "IDF", "region": "\u00cele-de-France", "city": "Paris", "zip": "75000", "lat": 48.8566, "lon": 2.35222, "timezone": "Europe/Paris", "isp": "F5 Networks SARL", "url": "www.cdiscount.com"}
```   

## 7 - Interrogation d’API Web - operations multiples   
[[haut de page]](#client-serveur-web--culture-web)

A partir de l’api de test DummyJSON, tester les requêtes à partir de CURL ou reqbin permettant de :
### 1. S’authentifier à l’api pour obtenir un token  

- Git Bash
```shell
$ curl -X POST https://dummyjson.com/auth/login -H "Content-Type: application/json" --data-binary @- <<DATA
{
    "username": "kminchelle",
    "password": "0lelplR"
}
DATA
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed
100   598    0   530  100    68    942    120 --:--:-- --:--:-- --:--:--  1075{"id":15,"username":"kminchelle","email":"kminchelle@qq.com","firstName":"Jeanne","lastName":"Halvorson","gender":"female","image":"https://robohash.org/autquiaut.png","token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTUsInVzZXJuYW1lIjoia21pbmNoZWxsZSIsImVtYWlsIjoia21pbmNoZWxsZUBxcS5jb20iLCJmaXJzdE5hbWUiOiJKZWFubmUiLCJsYXN0TmFtZSI6IkhhbHZvcnNvbiIsImdlbmRlciI6ImZlbWFsZSIsImltYWdlIjoiaHR0cHM6Ly9yb2JvaGFzaC5vcmcvYXV0cXVpYXV0LnBuZyIsImlhdCI6MTY3ODk1MTAzNSwiZXhwIjoxNjc4OTU0NjM1fQ.mE2lEUvXROyQByp3sFwJs34HRw1C2D6sBmb_28pTJKs"}
``` 
<br>

- Requête
```shell
POST /auth/login HTTP/1.1
Host: dummyjson.com
Content-Type: application/json
Content-Length: 67

{    
    "username": "kminchelle",
    "password": "0lelplR"    
}
```

<br>

- Réponse
```shell
HTTP/1.1 200 OK
Access-Control-Allow-Origin: *
Cache-Control: private, max-age=0, must-revalidate, no-cache, no-store
Content-Type: application/json; charset=utf-8
Date: Thu, 16 Mar 2023 07:18:06 GMT
Display: staticcontent_sol
Etag: W/"212-4l/rEpR9LrJ7SY0oyigPqYeZxsE-gzip"
Expires: Wed, 15 Mar 2023 07:18:06 GMT
Response: 200
Server: Cowboy
Strict-Transport-Security: max-age=15552000; includeSubDomains
Vary: Accept-Encoding,Origin
Via: 1.1 vegur
X-Content-Type-Options: nosniff
X-Dns-Prefetch-Control: off
X-Download-Options: noopen
X-Frame-Options: SAMEORIGIN
X-Middleton-Display: staticcontent_sol
X-Middleton-Response: 200
X-Ratelimit-Limit: 120
X-Ratelimit-Remaining: 119
X-Ratelimit-Reset: 1678951127
X-Xss-Protection: 1; mode=block
Content-Length: 530

{"id":15,"username":"kminchelle","email":"kminchelle@qq.com","firstName":"Jeanne","lastName":"Halvorson","gender":"female","image":"https://robohash.org/autquiaut.png","token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTUsInVzZXJuYW1lIjoia21pbmNoZWxsZSIsImVtYWlsIjoia21pbmNoZWxsZUBxcS5jb20iLCJmaXJzdE5hbWUiOiJKZWFubmUiLCJsYXN0TmFtZSI6IkhhbHZvcnNvbiIsImdlbmRlciI6ImZlbWFsZSIsImltYWdlIjoiaHR0cHM6Ly9yb2JvaGFzaC5vcmcvYXV0cXVpYXV0LnBuZyIsImlhdCI6MTY3ODk1MTA4NiwiZXhwIjoxNjc4OTU0Njg2fQ.lRf0-DNr77BpbcPWC95Lobj_uDMzVtPoDofBxYi_dXY"}
```
<br>

### 2. Lister les produits      
[[haut de page]](#client-serveur-web--culture-web)
- Git Bash
```shell
$ curl -X GET https://dummyjson.com/products | jq
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed
100 16728    0 16728    0     0  49831      0 --:--:-- --:--:-- --:--:-- 50844
{
  "products": [
    {
      "id": 1,
      "title": "iPhone 9",
      "description": "An apple mobile which is nothing like apple",
      "price": 549,
      "discountPercentage": 12.96,
      "rating": 4.69,
      "stock": 94,
      "brand": "Apple",
      "category": "smartphones",
      "thumbnail": "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
      "images": [
        "https://i.dummyjson.com/data/products/1/1.jpg",
        "https://i.dummyjson.com/data/products/1/2.jpg",
        "https://i.dummyjson.com/data/products/1/3.jpg",
        "https://i.dummyjson.com/data/products/1/4.jpg",
        "https://i.dummyjson.com/data/products/1/thumbnail.jpg"
      ]
    },
    {
      "id": 2,
      "title": "iPhone X",
      "description": "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",
      "price": 899,
      "discountPercentage": 17.94,
      "rating": 4.44,
      "stock": 34,
      "brand": "Apple",
      "category": "smartphones",
      "thumbnail": "https://i.dummyjson.com/data/products/2/thumbnail.jpg",
      "images": [
        "https://i.dummyjson.com/data/products/2/1.jpg",
        "https://i.dummyjson.com/data/products/2/2.jpg",
        "https://i.dummyjson.com/data/products/2/3.jpg",
        "https://i.dummyjson.com/data/products/2/thumbnail.jpg"
      ]
    },
    {
      "id": 3,
      "title": "Samsung Universe 9",
      "description": "Samsung's new variant which goes beyond Galaxy to the Universe",
      "price": 1249,
      "discountPercentage": 15.46,
      "rating": 4.09,
      "stock": 36,
      "brand": "Samsung",
      "category": "smartphones",
      "thumbnail": "https://i.dummyjson.com/data/products/3/thumbnail.jpg",
      "images": [
        "https://i.dummyjson.com/data/products/3/1.jpg"
      ]
    },
    .......
  ],
  "total": 100,
  "skip": 0,
  "limit": 30
}
```  
<br>

- Requête  
```shell
GET /products HTTP/1.1
Host: dummyjson.com
```
<br>

- Réponse  
```shell

Access-Control-Allow-Origin: *
Cache-Control: private, max-age=0, must-revalidate, no-cache, no-store
Content-Encoding: gzip
Content-Type: application/json; charset=utf-8
Date: Thu, 16 Mar 2023 07:28:37 GMT
Display: staticcontent_sol
Etag: W/"4158-8FQrjkGNH7RC18HQ7Qm+2sUS6Ms-gzip"
Expires: Wed, 15 Mar 2023 07:28:37 GMT
Response: 200
Server: Cowboy
Strict-Transport-Security: max-age=15552000; includeSubDomains
Vary: Accept-Encoding,Origin
Via: 1.1 vegur
X-Content-Type-Options: nosniff
X-Dns-Prefetch-Control: off
X-Download-Options: noopen
X-Frame-Options: SAMEORIGIN
X-Middleton-Display: staticcontent_sol
X-Middleton-Response: 200
X-Ratelimit-Limit: 120
X-Ratelimit-Remaining: 119
X-Ratelimit-Reset: 1678951727
X-Xss-Protection: 1; mode=block
Transfer-Encoding: chunked

{"products":[{"id":1,"title":"iPhone 9","description":"An apple mob...
```  
<br>

### 3 -  Afficher un produit     
[[haut de page]](#client-serveur-web--culture-web) 
- Git Bash
```shell
$ curl -X GET https://dummyjson.com/products/1 | jq

  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed
100   519    0   519    0     0   1542      0 --:--:-- --:--:-- --:--:--  1572
{
  "id": 1,
  "title": "iPhone 9",
  "description": "An apple mobile which is nothing like apple",
  "price": 549,
  "discountPercentage": 12.96,
  "rating": 4.69,
  "stock": 94,
  "brand": "Apple",
  "category": "smartphones",
  "thumbnail": "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
  "images": [
    "https://i.dummyjson.com/data/products/1/1.jpg",
    "https://i.dummyjson.com/data/products/1/2.jpg",
    "https://i.dummyjson.com/data/products/1/3.jpg",
    "https://i.dummyjson.com/data/products/1/4.jpg",
    "https://i.dummyjson.com/data/products/1/thumbnail.jpg"
  ]
}
bash: $'\342\200\213': command not found
```  

<br>

- Requête  
```shell
GET /products/1 HTTP/1.1
Host: dummyjson.com
```
<br>

- Réponse  
```shell
HTTP/1.1 200 OK
Access-Control-Allow-Origin: *
Cache-Control: private, max-age=0, must-revalidate, no-cache, no-store
Content-Type: application/json; charset=utf-8
Date: Thu, 16 Mar 2023 07:37:29 GMT
Display: staticcontent_sol
Etag: W/"207-QowjjkZS3dPvv4L6zPF2KPB7cKk-gzip"
Expires: Wed, 15 Mar 2023 07:37:29 GMT
Response: 200
Server: Cowboy
Strict-Transport-Security: max-age=15552000; includeSubDomains
Vary: Accept-Encoding,Origin
Via: 1.1 vegur
X-Content-Type-Options: nosniff
X-Dns-Prefetch-Control: off
X-Download-Options: noopen
X-Frame-Options: SAMEORIGIN
X-Middleton-Display: staticcontent_sol
X-Middleton-Response: 200
X-Ratelimit-Limit: 120
X-Ratelimit-Remaining: 119
X-Ratelimit-Reset: 1678952267
X-Xss-Protection: 1; mode=block
Content-Length: 519

{"id":1,"title":"iPhone 9","description":"An apple...
```
<br>

### 4 - Ajouter un produit  
[[haut de page]](#client-serveur-web--culture-web)
- Git Bash  
```shell
$ curl -X POST https://dummyjson.com/products/add -H "Content-Type: application/json" --data-binary @- <<DATA
{
    "title": "BMW Pencil"
}
DATA


  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed
100    61    0    31  100    30     90     87 --:--:-- --:--:-- --:--:--   181{"id":101,"title":"BMW Pencil"}
```
<br>

- Requête  
```shell
POST /products/add HTTP/1.1
Host: dummyjson.com
Content-Type: application/json
Content-Length: 29

{
    "title": "BMW Pencil"
}
``` 
<br>

- Réponse  
```shell

Access-Control-Allow-Origin: *
Cache-Control: private, max-age=0, must-revalidate, no-cache, no-store
Content-Type: application/json; charset=utf-8
Date: Thu, 16 Mar 2023 08:31:42 GMT
Display: staticcontent_sol
Etag: W/"1f-WegpuO02IB3N0V1mjB/0vMANoOo-gzip"
Expires: Wed, 15 Mar 2023 08:31:42 GMT
Response: 200
Server: Cowboy
Strict-Transport-Security: max-age=15552000; includeSubDomains
Vary: Accept-Encoding,Origin
Via: 1.1 vegur
X-Content-Type-Options: nosniff
X-Dns-Prefetch-Control: off
X-Download-Options: noopen
X-Frame-Options: SAMEORIGIN
X-Middleton-Display: staticcontent_sol
X-Middleton-Response: 200
X-Ratelimit-Limit: 120
X-Ratelimit-Remaining: 119
X-Ratelimit-Reset: 1678955507
X-Xss-Protection: 1; mode=block
Content-Length: 31

{"id":101,"title":"BMW Pencil"}
```
<br>

### 5. Modifier un produit existant    
[[haut de page]](#client-serveur-web--culture-web)
- Git Bash  
```shell
$ curl -X PUT https://dummyjson.com/carts/1 -H "Content-Type: application/json" --data-binary @- <<DATA
{
    "merge": "true",
    "products": [{"id": "1", "quantity": "1"}]
}
DATA
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed
100   951    0   879  100    72   2468    202 --:--:-- --:--:-- --:--:--  2724{"id":1,"products":[{"id":59,"title":"Spring and summershoes","price":20,"quantity":3,"total":60,"discountPercentage":8.71,"discountedPrice":55},{"id":88,"title":"TC Reusable Silicone Magic Washing Gloves","price":29,"quantity":2,"total":58,"discountPercentage":3.19,"discountedPrice":56},{"id":18,"title":"Oil Free Moisturizer 100ml","price":40,"quantity":2,"total":80,"discountPercentage":13.1,"discountedPrice":70},{"id":95,"title":"Wholesale cargo lashing Belt","price":930,"quantity":1,"total":930,"discountPercentage":17.67,"discountedPrice":766},{"id":39,"title":"Women Sweaters Wool","price":600,"quantity":2,"total":1200,"discountPercentage":17.2,"discountedPrice":994},{"id":1,"title":"iPhone 9","price":549,"quantity":1,"total":549,"discountPercentage":12.96,"discountedPrice":478}],"total":2877,"discountedTotal":2419,"userId":97,"totalProducts":6,"totalQuantity":11}

```  
<br>

- Requête  
```shell
PUT /carts/1 HTTP/1.1
Host: dummyjson.com
Content-Type: application/json
Content-Length: 71

{
    "merge": "true",
    "products": [{"id": "1", "quantity": "1"}]
}
```
<br>

- Réponse  
```shell
Display: staticcontent_sol
Etag: W/"36f-4uulKObhOdbIgZelX+aq1XMrfkc-gzip"
Expires: Wed, 15 Mar 2023 08:41:14 GMT
Response: 200
Server: Cowboy
Strict-Transport-Security: max-age=15552000; includeSubDomains
Vary: Accept-Encoding,Origin
Via: 1.1 vegur
X-Content-Type-Options: nosniff
X-Dns-Prefetch-Control: off
X-Download-Options: noopen
X-Frame-Options: SAMEORIGIN
X-Middleton-Display: staticcontent_sol
X-Middleton-Response: 200
X-Ratelimit-Limit: 120
X-Ratelimit-Remaining: 119
X-Ratelimit-Reset: 1678956107
X-Xss-Protection: 1; mode=block
Content-Length: 879

{"id":1,"products":[{"id":59,"title":"Spring and summershoes","price":20,"quantity":3,"total":60,"discountPercentage":8.71,"discountedPrice":55},{"id":88,"title":"TC Reusable Silicone Magic Washing Gloves","price":29,"quantity":2,"total":58,"discountPercentage":3.19,"discountedPrice":56},{"id":18,"title":"Oil Free Moisturizer 100ml","price":40,"quantity":2,"total":80,"discountPercentage":13.1,"discountedPrice":70},{"id":95,"title":"Wholesale cargo lashing Belt","price":930,"quantity":1,"total":930,"discountPercentage":17.67,"discountedPrice":766},{"id":39,"title":"Women Sweaters Wool","price":600,"quantity":2,"total":1200,"discountPercentage":17.2,"discountedPrice":994},{"id":1,"title":"iPhone 9","price":549,"quantity":1,"total":549,"discountPercentage":12.96,"discountedPrice":478}],"total":2877,"discountedTotal":2419,"userId":97,"totalProducts":6,"totalQuantity":11}
```

<br>

### 6 - supprimer un produit   
[[haut de page]](#client-serveur-web--culture-web) 
- Git Bash  
```shell
$ curl -X DELETE https://dummyjson.com/products/1 | jq
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed
100   575    0   575    0     0   1866      0 --:--:-- --:--:-- --:--:--  1903
{
  "id": 1,
  "title": "iPhone 9",
  "description": "An apple mobile which is nothing like apple",
  "price": 549,
  "discountPercentage": 12.96,
  "rating": 4.69,
  "stock": 94,
  "brand": "Apple",
  "category": "smartphones",
  "thumbnail": "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
  "images": [
    "https://i.dummyjson.com/data/products/1/1.jpg",
    "https://i.dummyjson.com/data/products/1/2.jpg",
    "https://i.dummyjson.com/data/products/1/3.jpg",
    "https://i.dummyjson.com/data/products/1/4.jpg",
    "https://i.dummyjson.com/data/products/1/thumbnail.jpg"
  ],
  "isDeleted": true,
  "deletedOn": "2023-03-16T08:44:53.173Z"
}
```  
- Requête  
```shell
DELETE /products/1 HTTP/1.1
Host: dummyjson.com
```  
- Réponse  
```shell
HTTP/1.1 200 OK
Access-Control-Allow-Origin: *
Cache-Control: private, max-age=0, must-revalidate, no-cache, no-store
Content-Type: application/json; charset=utf-8
Date: Thu, 16 Mar 2023 08:45:46 GMT
Display: staticcontent_sol
Etag: W/"23f-qT4tzTMzXahFE3DYZrnVWYkeFZc-gzip"
Expires: Wed, 15 Mar 2023 08:45:46 GMT
Response: 200
Server: Cowboy
Strict-Transport-Security: max-age=15552000; includeSubDomains
Vary: Accept-Encoding,Origin
Via: 1.1 vegur
X-Content-Type-Options: nosniff
X-Dns-Prefetch-Control: off
X-Download-Options: noopen
X-Frame-Options: SAMEORIGIN
X-Middleton-Display: staticcontent_sol
X-Middleton-Response: 200
X-Ratelimit-Limit: 120
X-Ratelimit-Remaining: 119
X-Ratelimit-Reset: 1678956347
X-Xss-Protection: 1; mode=block
Content-Length: 575

{"id":1,"title":"iPhone 9","description":"An apple mobile which is nothing like apple","price":549,"discountPercentage":12.96,"rating":4.69,"stock":94,"brand":"Apple","category":"smartphones","thumbnail":"https://i.dummyjson.com/data/products/1/thumbnail.jpg","images":["https://i.dummyjson.com/data/products/1/1.jpg","https://i.dummyjson.com/data/products/1/2.jpg","https://i.dummyjson.com/data/products/1/3.jpg","https://i.dummyjson.com/data/products/1/4.jpg","https://i.dummyjson.com/data/products/1/thumbnail.jpg"],"isDeleted":true,"deletedOn":"2023-03-16T08:45:46.754Z
```


## 8 - Pages Web  
[[haut de page]](#client-serveur-web--culture-web)

Github et les github pages vont nous servir d’hébergement pour les travaux web effectués.
• Activer les github pages sur votre repository en allant dans settings/pages.
• Publier sur la branche main, dans le dossier docs

![Alt text](images/github.png)  

Créer le dossier docs en local à la racine de votre repository:    
Ajouter la page index.html    
• Faisant référence à la feuille de style main.css   
`<link rel="stylesheet" type="text/css" href="./assets/css/main.css">`  
• Affichant le nom du module « nfa085 » en titre de niveau 1   
`<h1>nfa085</h1>`  
• « Documents » en titre de niveau 2  
`<h2>Documents</h2>`  
• Lister et mettre en lien les documents md produits dans les séances.  
`<a href="https://github.com/scarabe22/nfa085/blob/main/Documents/seance2/client_serveur_web.md">Client Seveur Web [Séance2]</a>`  
• main.css doit définir une Google font (de votre choix) sur le body  
index.html:  
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap" rel="stylesheet">
```  
main.css:  
```css
body {
    font-family: 'Roboto', sans-serif;
}
```
• Définir une présentation spécifique sur les titres.    
```css
h1 {
    font-size: 300%;
    text-align: center;

}

h2 {
    font-size: 200%;
    text-align: center;
}

```
Les fichiers .gitkeep sont de simples documents textes vides permettant de forcer la création du dossier dans git.  

A chaque commit/push avec modification du contenu du dossier docs, github exécute une action de déploiement (voir github actions)    

## 9 - Configuration de serveur HTTP  
[[haut de page]](#client-serveur-web--culture-web)

1. Modifiez la configuration de votre virtualhost local (avec apache) pour qu’il pointe sur le dossier docs de votre repository.

Modification du fichier `httpd-vhost.conf` 

![docs.png](images/docs.png)    

2. Modifiez la configuration du serveur pour qu’il n’affiche pas les informations relatives à sa version, ni celles relatives au système d’exploitation. 

Modification du fichier `httpd.conf`  

![versions.png](images/versions.png)  


3. Désactivez le listage des répertoires  

Modification du fichier `httpd.conf`  
On  passe de `Options Indexes FollowSymLinks Includes ExecCGI` à

![directory.png](images/directory.png)   

4. Affichez les modifications effectuées

Les modifications se font dans le fichier httpd.conf de façon générale et httpd-vhost.conf pour une vhost en particulier.  

   
5. Comparez les résultats avant/après

- Informations de versions d'Apache et d'OS:

Avant  

![not_found.png](images/not_found.png)  

Après  

![without_version.png](images/without_version.png)
- Directory browsing  

Aucun changements sur le répertoire docs.
Le répertoire htdocs par contre est affecté car lorsque l'on précise dans la barre d'adresse 
du navigateur 127.0.0.1/xampp par exemple:

Avant s'affichait l'arborescence des fichiers et répertoires.  

  ![directory_browsing.png](images/directory_browsing.png)  

Après  

![forbidden.png](images/forbidden.png)  

[[haut de page]](#client-serveur-web--culture-web)



