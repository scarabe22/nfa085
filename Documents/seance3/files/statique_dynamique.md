## 1 - Web statique et web dynamique
[Menu](menu.md)

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
- aller sur le site et voir si la page qui s'affiche change ou pas. S'il s'agit d'une page web statique, il n'y a pas de changement.
  S'il y a des changements dans la page lorsque l'on y retourne plusieurs fois, il s'agit alors d'une page web dynamique.
- utiliser l'inspecteur du navigateur et voir si des scripts particuliers sont présents.  
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

[[haut de page]](#1---web-statique-et-web-dynamique)