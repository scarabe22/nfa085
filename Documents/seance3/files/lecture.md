## 6 – Interrogation d’API Web - lecture
[Menu](menu.md)
### Créer un compte sur API Ninjas

![](images/api_ninja.png)

Interrogations à partir de CURL ou Reqbin, préciser à chaque fois la requête effectuée et la réponse obtenue (y compris les headers).  

#### 1.En utilisant l’API dadjokes, retourner 3 blagues.

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

#### 2. En utilisant l’API textsimilarity, préciser le score de similarité entre les 2 textes suivants :  

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

#### 3. En utilisant l’API urllookup, rechercher l’isp et la localisation des sites suivants :  


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
L'isp (*Internet Service Provider*) ou FAI (*Fournisseur d'Accès à Internet*) du site leboncoin.fr est "*Amazon Technologies Inc*".  
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
L'isp du site leparisien.fr est "*Akamai International, BV*".  
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
L'isp du site cdiscount.com est " F5 Networks SARL".  
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
[[haut de page]](#6--interrogation-dapi-web---lecture)