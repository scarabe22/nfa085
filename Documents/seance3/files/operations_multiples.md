## 7 - Interrogation d’API Web - operations multiples
[Menu](menu.md)

### A partir de l’api de test DummyJSON, tester les requêtes à partir de CURL ou reqbin permettant de :
#### 1. S’authentifier à l’api pour obtenir un token
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

#### 2. Lister les produits
[[haut de page]](#7---interrogation-dapi-web---operations-multiples)
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

#### 3. Afficher un produit
[[haut de page]](#7---interrogation-dapi-web---operations-multiples)

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

#### 4. Ajouter un produit
[[haut de page]](#7---interrogation-dapi-web---operations-multiples)

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

#### 5. Modifier un produit existant
[[haut de page]](#7---interrogation-dapi-web---operations-multiples)

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

#### 6. Supprimer un produit
[[haut de page]](#7---interrogation-dapi-web---operations-multiples)

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

{"id":1,"title":"iPhone 9","description":"An apple mobile which is nothing like apple","price":549,"discountPercentage":12.96,"rating":4.69,"stock":94,"brand":"Apple","category":"smartphones","thumbnail":"https://i.dummyjson.com/data/products/1/thumbnail.jpg","images":["https://i.dummyjson.com/data/products/1/1.jpg","https://i.dummyjson.com/data/products/1/2.jpg","https://i.dummyjson.com/data/products/1/3.jpg","https://i.dummyjson.com/data/products/1/4.jpg","https://i.dummyjson.com/data/products/1/thumbnail.jpg"],"isDeleted":true,"deletedOn":"2023-03-16T08:45:46.754Z"}
```
[[haut de page]](#7---interrogation-dapi-web---operations-multiples)
