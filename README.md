Labyrinthe
==========
Auteurs : Hyacinthe MALASPINA et Amélie MAUCADE

Le projet : 
Cette application web est un jeu de labyrinthe en JavaScript, HTML, CSS. L'objectif est de déplacer le personnage dans le labyrinthe avec la souris et sans toucher les bords, pour atteindre le hamburger à la sortie.

Les fonctionnalités :
L'utilisateur à 3 vies, qui sont affichées à coté du labyrinthe. Une vie est perdue, si le personnage touche les bords ou s'il y a tricherie (si le personnage est directement ramené au hamburger sans passer par le labyrinthe).
Au bout de 3 vies perdues, l'utilisateur peut soit recommencer, soit voir la solution.

Les labyrinthes sont des images (PNG). Au lancement du jeu, une des images est chargée aléatoirement. 
Il y a 10 labyrinthes différents ainsi que leurs solutions.

Les outils et les sources La bibliothèque JavaScript JQuery a été utilisée pour ce jeu.

Pour la gestion des collisions entre le personnage le labyrinthe, nous avons utilisé un plug-in JQuery "HitTesting jQuery plugin" https://github.com/e-smartdev/smartJQueryHitTest/

Les pop-up proviennent d'un plugin JQuery "Magnific Pop up" https://github.com/dimsemenov/Magnific-Popup

Nous avons utilisé le Framework CSS Foundation http://foundation.zurb.com

Les icones (cœur, croix, personnage et hamburger) proviennent de la base d'icones Flaticon http://www.flaticon.com

Les labyrinthes ont été générés ˆ partir de l'application web Maze Generator http://www.mazegenerator.net

Les icones et les labyrinthes se trouvent dans le dossier "resources" Les sources JavaScript et CSS se trouvent dans le dossier "src"
