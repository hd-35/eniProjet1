// Un tableau allCards - collection ordonnée d’éléments - chemin images ()
const allCards = [];
for (let cardID = 0; cardID < 39; cardID++) {
    allCards.push('assets/cards/eighties/' + (cardID + 1) + '.svg');
}


//------Générez les cartes aléatoirement : Utilisez une fonction pour mélanger les cartes et les stocker dans le tableau.


// Permet de définir la fonction shuffle de underscore.
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Mélange des cartes
const shuffleCards = shuffle(allCards);

// selectionne seulement 8 cartes MAIS les 8 premières (le paquet entier a été mélangé).
const selectCards = allCards.slice(0, 16);

//-----Créez une interface utilisateur : Utilisez HTML et CSS pour créer une interface utilisateur

console.log("Nb de cartes sélectionnées : "+selectCards.length); // Resultat normalement de 8

console.log("selection des cartes : "+ selectCards);


// ----------------------CONTAINER--------------------------------------------

const container = document.getElementById("card-container");


// Parcourez chaque carte et créez les éléments HTML correspondants
for (let index = 0; index < selectCards.length; index++) {
    const element = selectCards[index]; // L'élément de carte actuel
    const card = document.createElement('div');
    card.classList.add('card');

    const cardImage = document.createElement('img');
    cardImage.src = element;

    container.appendChild(card);
    card.appendChild(cardImage);

    console.log("container"+container);
    console.log("carte"+card);
}










/*
5--Ajoutez des événements de clic : Utilisez JavaScript pour ajouter des événements de clic aux cartes.
Lorsqu’un joueur clique sur une carte, la fonction associée sera exécutée.


6--Gérez les états des cartes : Utilisez des variables et des fonctions pour gérer les états des cartes
(face cachée ou face visible). Lorsqu’un joueur clique sur une carte, la fonction devra vérifier si la carte est déjà retournée ou non.


7--Créez un système de score : Utilisez des variables et des fonctions pour stocker et afficher le score du joueur.


8--Ajoutez des animations et des effets sonores : Utilisez JavaScript et CSS pour ajouter des animations
et des effets sonores pour améliorer l’expérience utilisateur.


9--Testez et optimisez le jeu : Faites des tests pour vérifier que le jeu fonctionne correctement
et optimisez le code pour améliorer la performance.


10--Ajoutez une option de réinitialisation : Créez une fonction pour réinitialiser le jeu et les cartes à leur état initial.

 */










// recupérer mes cartes


/* // tirage aléatoire
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]; // échange les éléments
    }
    return array;
}

// mélange les cartes et sélectionne 8 cartes
const randomCards = shuffle(allCards);
const selectCards = randomCards.slice(0, 8); */






