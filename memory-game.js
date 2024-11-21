// Un tableau allCards - collection ordonnée d’éléments - chemin images ()
const allCards = [];

allCards.length = 0;

const themaInput = document.getElementById("themaSelect");
console.log(themaInput);

// Rafraîchissement de l'affichage lors du changement de thématique
themaInput.addEventListener("change", function () {
    generateCards(themaInput.value);  // Génère les cartes avec la nouvelle thématique
});

// Initialisation de la thématique et génération des cartes
function generateCards(selectedThema) {
    allCards.length = 0; // Vide le tableau des cartes existantes

    for (let cardID = 0; cardID < 39; cardID++) {
        allCards.push("assets/cards/" + selectedThema + "/" + (cardID + 1) + ".svg");
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

    // Mélange le jeu de cartes complet
    const shuffleCards = shuffle(allCards);

    // Selectionne 8 cartes (les 8 premières)
    const selectCards = shuffleCards.slice(0, 8);

    const doubledCards = [...selectCards, ...selectCards];

    // Mélange les cartes sélectionnées
    const gameCards = shuffle(doubledCards);

    //-----Crée une interface utilisateur 

    console.log("Nb de cartes sélectionnées : " + gameCards.length); // Résultat normalement de 8*2
    console.log("selection des cartes : " + gameCards);

    // -------------------------------CONTAINER--------------------------------------

    const container = document.getElementById("card-container");
    container.innerHTML = "";  // Vide le conteneur avant d'ajouter de nouvelles cartes

    // Parcoure chaque carte et créez les éléments HTML correspondants
    for (let index = 0; index < gameCards.length; index++) {
        const element = gameCards[index]; // L'élément de carte actuel
        const card = document.createElement("div");
        card.classList.add("card");

        const cardImage = document.createElement("img");
        cardImage.src = element;

        container.appendChild(card);
        card.appendChild(cardImage);

        console.log("container" + container);
        console.log("carte" + card);
    }


    /* const cards = document.querySelectorAll('.card');
 */

    let combinaisonTrouvee = 0;


    let firstFlippedCard = null;
    let secondFlippedCard = null;
    let flippedCards = 0;

    // Sélectionne toutes les cartes
    document.querySelectorAll('.card').forEach(card => {
        card.addEventListener('click', () => {  // Ajoute un événement => clic
            card.classList.toggle('flipped');  // Action flipped card
            flippedCards++;

            if (flippedCards === 1) {
                firstFlippedCard = card;
            } else secondFlippedCard = card;

            console.log(firstFlippedCard.querySelector('img').src);
            console.log(secondFlippedCard.querySelector('img').src);

          
            if (flippedCards === 2) {
                setTimeout(() => {
                    if (firstFlippedCard.querySelector('img').src !== secondFlippedCard.querySelector('img').src) {
                        firstFlippedCard.classList.remove('flipped');
                        secondFlippedCard.classList.remove('flipped');

                    } else {
                        combinaisonTrouvee++
                        //alert("Bravo!!! une combinaison trouvée");
                        firstFlippedCard.querySelector('img').src = 'assets/cards/BackCard_NB.png';
                        secondFlippedCard.querySelector('img').src = 'assets/cards/BackCard_NB.png';

                        
                        /*             if (!firstFlippedCard.classList.contains('locked') && !secondFlippedCard.classList.contains('locked')) {
                flippedCards = 0;
            } */
                    }
                    console.log("nombre de combinaisons trouvées" + combinaisonTrouvee)

                    flippedCards = 0;

                    const infoElement = document.getElementById('info');

                    if (combinaisonTrouvee === 1) {
                        infoElement.textContent = 'Vous avez trouvé une combinaison';
                    } else if (combinaisonTrouvee >= 2 && combinaisonTrouvee < gameCards.length / 2) {  // Calcul des paires
                        infoElement.textContent = 'Vous avez trouvé : ' + combinaisonTrouvee + " combinaisons";
                    } else if (combinaisonTrouvee === gameCards.length / 2) {
                        infoElement.textContent = 'Bravo! Vous avez trouvé toutes les combinaisons';
                    }
                    

                }, 1000);

            }
        });
    })
};


// Appel initial pour générer les cartes dès le départ
generateCards(themaInput.value);


//5--Ajoutez des événements de clic : Utilisez JavaScript pour ajouter des événements de clic aux cartes.
//Lorsqu’un joueur clique sur une carte, la fonction associée sera exécutée.





/*
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
const gameCards = randomCards.slice(0, 8); */

