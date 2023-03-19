## 1 - Web statique et web dynamique
[Menu](menu.md)

### Expliquez la différence entre les deux

|                                | Pages Web statiques	                                           | Pages Web dynamiques                                                                              |
|--------------------------------|----------------------------------------------------------------|---------------------------------------------------------------------------------------------------|
| Contenu                        | fixe et ne change pas en fonction des actions de l'utilisateur | généré en temps réel en fonction de l'action de l'utilisateur ou d'autres facteurs                |
| Base de données	              | pas de base de données                                         | appel à une base de données                                                                       |
| Temps de chargement de la page | rapide                                                         | plus long en théorie (outils d'accélération tels que le CDN, le caching et l'optimisation du code |
| Changement d’information	      | manuelle en modifiant le code                                  | automatique                                                                                       |
| Complexité	                  | facile à concevoir                                             | moins aisé à mettre en oeuvre                                                                     |
| Code utilisé                   | HTML, CSS, JavaScript                                          | HTML, CSS, JavaScript, NodeJs, Python, Ruby, Perl, PHP, AJAX, ASP ...                             |
| qualité                        | consultatif                                                    | interactif                                                                                        | 
| fréquentation                  | plus rare                                                      | accrue car plus attractif                                                                         |
<br>

### Comment identifier qu’une ressource Web est statique ou dynamique ?

- Analyse de l'URL : L'URL du site peut donner des indices sur la nature dynamique ou statique du site. Si l'URL contient des noms de fichiers tels que ".php", ".aspx", ".jsp", cela indique souvent que le site est dynamique.

- Analyse du code source : Si on a accès au code source du site (ce qui n'est pas toujours le cas) grâce aux outils de développement du nagivateur , on peux regarder les balises HTML pour voir si elles contiennent des appels à des scripts ou à des bases de données. Si le site utilise des scripts pour générer du contenu, cela indique qu'il est dynamique.

- Analyse du contenu : Si le contenu du site change fréquemment, cela peut également être un indicateur qu'il est dynamique. Les sites web dynamiques sont généralement conçus pour afficher des informations actualisées régulièrement.

- Utilisation de logiciels spécialisés : Il existe des outils et des logiciels spécialisés pour analyser les sites web et déterminer s'ils sont dynamiques ou statiques. Ces outils peuvent analyser le code source, le contenu et l'architecture du site pour déterminer s'il est dynamique ou statique. Ce sont par exemple WebPageTest, WebInspect, SiteAnalyzer, Screaming Frog SEO Spider, Wappalyzer, Google PageSpeed Insights, Pingdom Website Speed Test, GTmetrix.

En combinant ces différentes méthodes, il est possible de déterminer avec précision si un site web est dynamique ou statique.
<br>

### Les sites suivants sont-ils statiques ou dynamiques ? Justifiez.

- http://www.rleonardi.com/interactive-resume/  
Ce site est statique dans la mesure où il se passe toujours la même chose, le déroulement de la scène d'animation est identique quelque soit l'utilisateur.  

- https://www.je-change-de-metier.com/  
Il s'agit d'un site dynamique, car il offre au travers de ses différents tests, des réponses personnalisées donc différentes pour chaque utilisateur.  


[[haut de page]](#1---web-statique-et-web-dynamique)