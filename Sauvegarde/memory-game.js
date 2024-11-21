document.addEventListener("DOMContentLoaded", function () {
    /*     for (let index =0; index<39; index++){
            let tab =[];
            cardImages[index] = ['assets/cards/eighties/'+(index+1)+'.svg']
        }
     */


    const allCards = [];
    for (let i = 0; i < 39; i++) {
        allCards.push('assets/cards/eighties/' + (i + 1) + '.svg');
    }


    // tirage aléatoire
    function shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]]; // échange les éléments
        }
        return array;
    }

    // mélange les cartes et sélectionne 8 cartes
    const randomCards = shuffle(allCards);
    const selectCards = randomCards.slice(0, 8);


    console.log(allCards);
    console.log(selectCards);

    // faire les paires
    const cards = shuffle([...selectCards, ...selectCards]);

    const gameContainer = document.getElementById("game-container");


    cards.forEach((image, index) => {
        const cardElement = document.createElement("div");
        cardElement.classList.add("card");
        cardElement.dataset.flipped = "false";
        cardElement.dataset.index = index;

        const cardInner = document.createElement("div");
        cardInner.classList.add("card-inner");

        const cardFront = document.createElement("div");
        cardFront.classList.add("card-front");
        cardFront.style.backgroundImage = `url('assets/cards/BackCard.png')`; // Image dos de carte

        const cardBack = document.createElement("div");
        cardBack.classList.add("card-back");
        cardBack.style.backgroundImage = `url(${image})`; // Image carte

        cardInner.appendChild(cardFront);
        cardInner.appendChild(cardBack);
        cardElement.appendChild(cardInner);

        // clic pour retourner la carte
        cardElement.addEventListener("click", () => flipCard(cardElement));
        gameContainer.appendChild(cardElement);
    });

    // cartes retournées et paires trouvées
    let flippedCards = [];
    let matchedCards = 0;

    // retourner la carte
    function flipCard(card) {
        if (card.dataset.flipped === "true" || flippedCards.length === 2) return;

        card.querySelector(".card-inner").style.transform = "rotateY(180deg)";
        card.dataset.flipped = "true";
        flippedCards.push(card);

        if (flippedCards.length === 2) {
            setTimeout(() => checkMatch(), 1000);
        }
    }

    // vérification paire
    function checkMatch() {
        const [card1, card2] = flippedCards;
        const isMatch =
            card1.querySelector(".card-back").style.backgroundImage ===
            card2.querySelector(".card-back").style.backgroundImage;

        if (!isMatch) {
            card1.querySelector(".card-inner").style.transform = "rotateY(0deg)";
            card2.querySelector(".card-inner").style.transform = "rotateY(0deg)";
            card1.dataset.flipped = "false";
            card2.dataset.flipped = "false";
        } else {
            matchedCards++;
            if (matchedCards === selectCards.length) {
                alert("Vous avez gagné !");
            }
        }

        flippedCards = [];
    }
});



/*  const cardImages = [
        'assets/cards/eighties/1.svg',
        'assets/cards/eighties/2.svg',
        'assets/cards/eighties/3.svg',
        'assets/cards/eighties/4.svg',
        'assets/cards/eighties/5.svg',
        'assets/cards/eighties/6.svg',
        'assets/cards/eighties/7.svg',
        'assets/cards/eighties/8.svg',
        'assets/cards/eighties/9.svg',
        'assets/cards/eighties/10.svg',
        'assets/cards/eighties/11.svg',
        'assets/cards/eighties/12.svg',
        'assets/cards/eighties/13.svg',
        'assets/cards/eighties/14.svg',
        'assets/cards/eighties/15.svg',
        'assets/cards/eighties/16.svg',
        'assets/cards/eighties/17.svg',
        'assets/cards/eighties/18.svg',
        'assets/cards/eighties/19.svg',
        'assets/cards/eighties/20.svg',
        'assets/cards/eighties/21.svg',
        'assets/cards/eighties/22.svg',
        'assets/cards/eighties/23.svg',
        'assets/cards/eighties/24.svg',
        'assets/cards/eighties/25.svg',
        'assets/cards/eighties/26.svg',
        'assets/cards/eighties/27.svg',
        'assets/cards/eighties/28.svg',
        'assets/cards/eighties/29.svg',
        'assets/cards/eighties/30.svg',
        'assets/cards/eighties/31.svg',
        'assets/cards/eighties/32.svg',
        'assets/cards/eighties/33.svg',
        'assets/cards/eighties/34.svg',
        'assets/cards/eighties/35.svg',
        'assets/cards/eighties/36.svg',
        'assets/cards/eighties/37.svg',
        'assets/cards/eighties/38.svg',
        'assets/cards/eighties/39.svg',
        'assets/cards/eighties/40.svg',
    ]; */