## 5 – Architecture
[Menu](menu.md)

### Que qualifie-t-on d’architecture 3-tiers dans le domaine du Web ?

L'architecture 3-tiers est une approche courante pour la conception d'applications web. Cette architecture divise l'application en trois couches distinctes, chacune ayant sa propre fonction et ses propres responsabilités.

Voici une explication des trois couches :

**1. La couche de présentation (front-end)** : Cette couche est chargée de présenter l'interface utilisateur de l'application. Elle est généralement construite à l'aide de technologies telles que HTML, CSS et JavaScript. Elle communique avec la couche de logique métier via des requêtes HTTP.

**2. La couche de logique métier (back-end)** : Cette couche est responsable de la gestion de la logique métier de l'application. Elle est chargée de traiter les requêtes HTTP de la couche de présentation et de fournir les résultats appropriés. Elle peut également communiquer avec une base de données pour stocker ou récupérer des informations.

**3. La couche de stockage de données** : Cette couche est responsable du stockage et de la gestion des données de l'application. Elle peut être une base de données, un système de fichiers ou tout autre système de stockage approprié.


Voici un exemple de schéma illustrant l'architecture 3-tiers pour une application web :

![](images/deux_tiers.excalidraw.png)  
*Réalisé avec Excalidraw (Obsidian)*


Dans ce schéma, la couche de présentation (front-end) est chargée de présenter l'interface utilisateur de l'application. Elle envoie une requête HTTP à la couche de logique métier (back-end), qui traite la requête et fournit les résultats appropriés. La couche de logique métier peut également communiquer avec la couche de stockage de données pour stocker ou récupérer des informations nécessaires. Enfin, la couche de logique métier renvoie une réponse HTTP à la couche de présentation, qui peut alors afficher les résultats à l'utilisateur.

[[haut de page]](#5--architecture)