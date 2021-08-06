function disparition(){
    document.getElementById("popup").innerHTML = "";
    document.getElementById("motivation").innerHTML = "<a href='javascript:motivation()' class='nav__link-motiv'>Revoir la motivation</a>";
}

function motivation(){
    document.getElementById("popup").innerHTML ="<div class='popup__content'><p class='popup__content-p'>J'ai cherché ma voie, je l’ai trouvée. J'adorais les mathématiques et la physique à l'école et j'ai commencé par essayer dans ces domaines-là. Mais ce que je voyais à l'université s'éloignait fort des mathématiques que j'aimais bien. Après réflexion, j'ai constaté que c'était la logique qu'il y avait dans les mathématiques d'humanité qui m'attrayait. J'ai donc été dirigé vers l'informatique et plus particulièrement le codage que j'ai directement apprécié. J'aime les 'énigmes' que chaque site propose. Pour la première fois, j'ai pu travailler des heures durant sans lassitude et certaines de ces énigmes m'ont tenu éveillé jusque tard jusqu'à ce que je les ai résolues. De plus, le monde des développeurs web ne manque pas de diversité. Il y aura toujours une nouvelle fonction ou même un nouveau langage à découvrir. Tous ces points me motivent à me lancer pour un long voyage dans ce métier.<br><br>Pourquoi maintenant ? J'arrive à la fin de ma formation, et je souhaite me lancer dans le monde du travail afin d'utiliser ce que j'ai appris mais aussi d'acquérir l'expérience qu'aucune formation ne peut m'apporter.<br><br>Ce que je peux apporter : des connaissances en matière de création de site web, frontend essentiellement mais aussi backend, un regard neuf et une motivation à élargir mes connaissances pour pouvoir remplir mes fonctions.</p><button onclick='disparition()' class='popup__content-button'>Masquer <i class='fas fa-arrow-alt-circle-right'></i></button></div>"
    document.getElementById("motivation").innerHTML = "";
}