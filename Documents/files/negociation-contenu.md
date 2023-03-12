7 - Négociation de contenu  
[Menu](../menu.md)

Une ressource est un terme générique qui peut exprimer une identité, une imprimante...
Ce qui va circuler dans le flux d'échange c'est la représentation de la ressource.
En effet une ressource donnée peut avoir plusieurs représentions.
Une représentation en html va permettre un affichage dans le navigateur.
Une représentation en json va pouvoir être exploitée par un programme afin d'effectuer un traitement.
On peut avoir des  représentations sous  forme d'image en png ou jpeg par exemple.
Le client et le serveur s'échangent des représentations de ressources et la négociation consiste dans le fait que le client et le serveur se mettent d'accord quant au type de représentation échangé.
Le client va indiquer au serveur le type de représentation qu'il est capable de traiter et il va préciser ses préférences.
Le serveur va recevoir la requête et vérifier ce qu'il est capable de réaliser. Il fera au mieux pour satisfaire les préférences du client.
Cela est implémenté dans le protocole grâce à des en-têtes spécialisées
- en-tête client:
    - accept: application /json ---> pour indiquer qu'il souhaite une représentation json de la ressource cible.
    - Accept-Language: fr,fr-FR;q=0.8,en-US;q=0.5,en;q=0.3 (préférence selon une valeur *'q'* de pondération)
    - Accept-Encoding: gzip, deflate, br
- en-tête serveur:
    - Content-Type: text/html; charset=utf-8
    - Content-Type: application/json; charset=utf-8
      Nous avons donc une paire d'en-tête client-serveur.

