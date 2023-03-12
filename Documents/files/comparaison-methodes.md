[Menu](../menu.md)

2 - Comparaison méthodes  

Ce que  l'on peut déduire des exemples:

| Méthode | Body     |                  Action                    |   
|:-------:|:--------:|:------------------------------------------:|
|  GET    | réponse  | demande au serveur l'accès à une ressource |   
|  POST   | requête  |       envoie des données au serveur        |   


On trouve dans la littérature d'autres différences entre ces 2 méthodes:

|          Critère          |                          HTTP GET	                          |HTTP POST                                                                                |
|:-------------------------:|:-----------------------------------------------------------:|:---------------------------------------------------------------------------------------:|
|         Sécurité          | Moins sécurisé car les paramètres sont visibles dans l'URL  |Plus sécurisé car les paramètres ne sont pas visibles dans l'URL et peuvent être cryptés |
| Longueur des paramètres 	 | Limite la longueur des paramètres (environ 2000 caractères) |Permet de transmettre une grande quantité de données                                     |
|           Cache           |      Peut être mis en cache par le navigateur	           | Ne peut pas être mis en cache                                                           |
|        Utilisation        |             Utilisé pour récupérer des données	           | Utilisé pour envoyer des données                                                        |
|     Changement d'état     |      Ne modifie pas l'état du serveur ou des données	       | Peut modifier l'état du serveur ou des données                                          |

