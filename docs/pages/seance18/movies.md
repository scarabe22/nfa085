## Compréhension de code  
### Expliquez en détail comment fonctionne le chargement des données (données en entrée, fonctions utilisées, rôle).

- Données en entrée  <br><br>

   - service:   <br><br>
     
        Cette variable est obtenue en récupérant la valeur de l'élément HTML avec l'ID 'services'. Il est utilisé pour filtrer les résultats des films en fonction du service de streaming sélectionné.<br><br>
    

    - genre:  <br><br>

         Cette variable est obtenue en récupérant la valeur de l'élément HTML avec l'ID 'genres'. Il est utilisé pour filtrer les résultats des films en fonction du genre sélectionné. <br><br> 
       
    
    - show_type:<br><br>
         Cette variable est obtenue en récupérant la valeur de l'élément HTML  de type radio avec le nom "show_type" qui est coché. Il est utilisé pour filtrer les résultats des films en fonction du type de spectacle sélectionné.<br><br>

    - url: <br><br>
    
         Cette variable est une URL de base à laquelle sont ajoutés des paramètres de requête pour effectuer une recherche de films. Les paramètres incluent le pays, le service, la langue de sortie, le type de spectacle et le genre. Les données d'entrée utilisées pour construire cette URL sont service, genre et show_type.       <br><br><br>

- Chargement des données  

Le chargement des données se fait via une API appelée "Streaming Availability" disponible sur RapidAPI. L'URL de base de l'API est définie dans la constante url du fichier movies.js. Les options de la requête HTTP sont définies dans l'objet options, qui contient les en-têtes nécessaires pour accéder à l'API.

La fonction fetchDataWithCache permet le chargement des données. Cette fonction utilise la méthode fetch pour effectuer une requête HTTP GET à l'URL spécifiée. Cependant, elle ajoute une fonctionnalité de mise en cache des données pour optimiser les performances et réduire les requêtes réseau.

Elle vérifie d'abord s'il existe des données mises en cache pour l'URL spécifiée en utilisant localStorage.getItem(url). Si des données sont trouvées dans le cache, elles sont renvoyées directement après avoir été parsées à l'aide de JSON.parse(cachedData).

Si aucune donnée n'est trouvée dans le cache, la fonction effectue une requête fetch à l'URL spécifiée avec les options fournies.

Une fois la réponse obtenue, elle est convertie en format JSON en utilisant response.json().

Les données sont ensuite stockées dans le cache en utilisant localStorage.setItem(url, JSON.stringify(data)) pour une utilisation ultérieure.

Enfin, les données sont renvoyées pour être utilisées par l'application.



### Justifiez les choix effectué (celui en particulier de l’utilisation du localStorage).  

Le localStorage est utilisé pour stocker les données localement sur le poste client, ce qui permet de conserver les informations de visionnage même après la fermeture de l'application ou du navigateur. Cela permet à l'utilisateur de retrouver ses films et séries vus lorsqu'il revient sur l'application ultérieurement.

Le localStorage est une fonctionnalité simple et largement supportée par les navigateurs modernes. Il permet de stocker des données sous forme de paires clé-valeur. Dans ce cas, le localStorage est utilisé pour stocker les films et séries vus en utilisant des clés spécifiques. Les données sont stockées sous forme de chaînes de caractères JSON.

En utilisant le localStorage, il n'est pas nécessaire de mettre en place une base de données ou un serveur pour stocker les informations de visionnage.