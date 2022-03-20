# p5js => Wavy Ukrainian DotFlag

+ A small p5.js Sketch
+ Dealing with a wavy Dotted Ukrainian 'DotFlag' of Freedom.
+ 2214 Dots, 25fps.
+ Resize Fit on 4/3 to optimize available space + responsive
 
+ [.oO°Oo.Online Demo.oO°Oo.](https://captainfurax.github.io/p5js-Wavy-DotFlag/)

![DotFlag](https://github.com/CaptainFurax/p5js-Wavy-DotFlag/blob/main/WavyFlag.jpg)
Specs: 
+ Rendu Canvas 2D [ p5xjs ]
+ Les points sont des primitives 'Circle()' vidées [ diametre de 1px ] - On affiche que leurs contours[ 'StrokeWeight 2px' ] simulant ainsi un 'pseudo-point'.
+ En 3D c'etait plus facile...Mais ca ramait sa race avec la fonction Point() sous Windows10/Chrome [ !? ]
+ ...Alors que sous la meme machine, avec Linux/Chrome : c'était impec...
Alors, un Rendu 2D :
+ Ou Circle() est plus lumineux qu'avec la primitive Point() pour la meme taille.
+ Mais ou Point() est plus rapide que Circle() [ alors, qu'  en rendu 3D c'est l'inverse ! ]
+ Pour la modélisation on calcule un 'pseudo axe-z' qu'on applique à Y puisque rendu 2D.
+ Plus quelques ondulations sur X & Y.

