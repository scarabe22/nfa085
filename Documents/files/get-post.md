 1 - Méthodes GET et POST 

Le format d'une requête:
```
<Méthode> <URL> HTTP/<version du protocole>
[<champ d'en-tête>: <valeur>]
...
				***saut de ligne***
[corps de la requête]
```

Le format d'une réponse:
```
HTTP/<version><status><commantaire status>
[<champ d'en-tête>: <valeur>]
...
			***saut de ligne***
[corps de la requête]
Document(contenu HTML, XML, image, ...)
```

    

## GET 
### Requête (Request)
```
GET https://www.breiz-brasserie.fr/ HTTP/1.1
Host: www.breiz-brasserie.fr
User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:109.0) Gecko/20100101 Firefox/110.0
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8
Accept-Language: fr,fr-FR;q=0.8,en-US;q=0.5,en;q=0.3
Accept-Encoding: gzip, deflate, br
Referer: https://www.google.com/
Connection: keep-alive
Upgrade-Insecure-Requests: 1
Sec-Fetch-Dest: document
Sec-Fetch-Mode: navigate
Sec-Fetch-Site: cross-site
Sec-Fetch-User: ?1
...
```
[obtenu avec le logiciel Fiddler]
* Méthode: GET
* Chemin pour accéder à la ressource: https://www.breiz-brasserie.fr/
* Nom de domaine du site: www.breiz-brasserie.fr
* Version du protocole HTTP: 1.1
* Navigateur: Firefox 110.0 
* Système d'exploitation: Windows 10.0
* Types de contenu acceptés par le navigateur: (MIME)
    * text/html 
    * application/xhtml+xml
    * application/xml
    * image/avif
    * image/webp
* Langues que le client est capable de comprendre: (priorité selon la valeur de pondération *(q)*:français, français-français, anglais-américain, anglais
* Formats de compression acceptés par le client: gzip, deflate, br
* Adresse de la page Web dont est issue la page actuelle: https://www.google.com/
* Type de connexion: keep-alive ---> créé une connexion persistante
* Le client informe le serveur qu'il peut le rediriger vers une version sécurisée du site.
* Document est le type de données demandé par le client
* La demande concerne la navigation
* Le client et le serveur se trouvent sur des domaines différents 
* C'est l'utilisateur qui est à l'origine de la requête
* Le corps de la requête est vide

### Réponse (Response)
```
HTTP/1.1 200 OK
Date: Sat, 04 Mar 2023 16:37:48 GMT
Server: Apache
Expires: Thu, 19 Nov 1981 08:52:00 GMT
Cache-Control: no-store, no-cache, must-revalidate 
Pragma: no-cache 
Upgrade: h2,h2c
Connection: Keep-Alive
Vary: Accept-Encoding,User-Agent 
Cache-Control: max-age=600, private, must-revalidate 
Content-Length: 15022 
Keep-Alive: timeout=15, max=100
Content-Type: text/html; charset=utf-8

<!doctype html>
<html lang="fr">
...
<head>
    <title>Restaurant Poisson / Fruits de mer Saint-Brieuc - Brasserie Brei'Z</title>
...    
</body>
</html>
```
* Protocole utilisé: HTTP version 1.1
* Requête réussie: code 200
* Message du status: OK
* Type de serveur: Apache
* Possibilité d'utiliser le mécanisme de mise à niveau vers les protocoles **h2** (correspond à HTTP/2 sur TLS) et **h2c** correspond à HTTP/2 sur TCP.
* Connexion persistante
* Le corps de la réponse contient un fichier html

## POST
### Requête
```
POST https://forum.artofmemory.com/ HTTP/1.1
Host: forum.artofmemory.com
User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:109.0) Gecko/20100101 Firefox/110.0
Accept: */*
Accept-Language: fr,fr-FR;q=0.8,en-US;q=0.5,en;q=0.3
Accept-Encoding: gzip, deflate, br
Content-Type: application/csp-report
Content-Length: 1646
Origin: https://forum.artofmemory.com 
Sec-Fetch-Dest: report 
Sec-Fetch-Mode: no-cors 
Sec-Fetch-Site: same-origin
Connection: keep-alive

{"csp-report":{"blocked-uri":"inline","column-number":1,"disposition":"enforce","document-uri":"https://forum.artofmemory.com/","effective-directive":"script-src-
...
```
Le corps de la requête POST contient des données   
<br>

### Réponse
```
HTTP/1.1 200 OK
Date: Sat, 04 Mar 2023 16:44:40 GMT
Content-Type: application/json; charset=utf-8
Transfer-Encoding: chunked
Connection: keep-alive
vary: Accept-Encoding
Cache-Control: must-revalidate, private, max-age=0
expires: 0
access-control-allow-origin: https://forum.artofmemory.com
access-control-allow-methods: GET, POST
...

[]
```
