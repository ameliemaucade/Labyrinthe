Auteurs : Hyacinthe MALASPINA et Am�lie MAUCADE

Le projet
Cette application web est un jeux de labyrinthe en JavaScript, HTML, CSS. 
L'objectif est de d�placer le personnage dans le labyrinthe avec la souris et sans toucher les bords, pour atteindre le hamburger � la sortie. 

Les fonctionalit�s
L'utilisateur � 3 vies, qui sont affich�es � cot� du labyrinthe. 
Une vie est perdue, si le personnage touche les bords ou s'il y a tricherie (si le personnage est directement ramen� au hamburger sans passer par le labyrinthe)
Au bout de 3 vies perdues, l'utilisateur peut soit recommencer, soit voir la solution.

Les labyrinthes sont des images (PNG). Au lancement du jeux, une des images est charg�e al�atoirement. 
Il y a 10 labyrinthes diff�rents ainsi que leurs solutions.


Les outils et les sources
La biblioth�que JavaScript JQuery a �t� utilis� pour ce jeux. 

Pour la gestion des collisions entre le personnage le labyrinthe,
nous avons utilis� un plug-in JQuery "HitTesting jQuery plugin"
https://github.com/e-smartdev/smartJQueryHitTest/

Les pop-up proviennent d'un plugin JQuery "Magnific Pop up"
https://github.com/dimsemenov/Magnific-Popup
 
Nous avons utilis� le framework CSS Foundation 
http://foundation.zurb.com

Les icones (coeur, croix, personnage et hamburger) proviennent de la base d'icones Flaticon
http://www.flaticon.com

Les labyrinthes ont �t� g�n�r�s � partir de l'application web Maze Generator
http://www.mazegenerator.net

Les icones et les labyrinthes se trouvent dans le dossier "resources"
Les sources JavaScript et CSS se trouvent dans le dossier "src"


