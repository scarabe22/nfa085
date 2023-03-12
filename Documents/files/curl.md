9 - CURL

Pour chaque requête effectuée, afficher la commande, le résultat et vos commentaires. Requêtes à effectuer en invite de commande, avec curl : 

1. Effectuer une requête GET vers l’url http://dev.local
```
curl http://dev.local
```

2. Afficher l’entête de la réponse pour cette URL
```
StatusCode        : 200
StatusDescription : OK
```

3. Effectuer une requête GET vers l’url http://dev.local/notExisting
```
curl http://dev.local/notExisting
```

4. Afficher l’entête de la réponse pour cette URL
```
curl : Not Found
The requested URL was not found on this server.
```
5. Déposer un fichier localement dans le dossier download depuis la racine de votre virtualhost dev.local
   ![](images/depot_fichier.png)

6. Téléchargez le depuis curl
```
curl -O c:\Users\Didier\Documents\Git\nfa085\web\download\test.txt
```
Le fichier test .txt a été téléchargé dans le répertoire de travail. 