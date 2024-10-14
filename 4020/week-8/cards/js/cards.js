let deck = ["10C.jpg","10D.jpg","10H.jpg","10S.jpg","2C.jpg","2D.jpg","2H.jpg","2S.jpg","3C.jpg","3D.jpg","3H.jpg","3S.jpg","4C.jpg","4D.jpg","4H.jpg","4S.jpg","5C.jpg","5D.jpg","5H.jpg","5S.jpg","6C.jpg","6D.jpg","6H.jpg","6S.jpg","7C.jpg","7D.jpg","7H.jpg","7S.jpg","8C.jpg","8D.jpg","8H.jpg","8S.jpg","9C.jpg","9D.jpg","9H.jpg","9S.jpg","AC.jpg","AD.jpg","AH.jpg","AS.jpg","JC.jpg","JD.jpg","JH.jpg","JS.jpg","KC.jpg","KD.jpg","KH.jpg","KS.jpg","QC.jpg","QD.jpg","QH.jpg","QS.jpg"];
let hand1 = [];
let hand2 = [];
let discardDeck = [];

const hand1Element = document.querySelector('#hand1');
const hand2Element = document.querySelector('#hand2')

// selects 5 cards from the deck and displays them on the page.
function shuffle() {
    // reset hand element
    handElement.innerHTML = '';

    // add any remaining cards in hand to discard
    discardDeck = discardDeck.concat(hand);
    // and reset hand array
    hand = [];

    for (let i = 0; i < 5; i++) {
        const randomIndex = Math.floor(Math.random() * deck.length);
        const selectedCard = deck[randomIndex];
        
        // if card is undefined (likely b/c deck is too small), do nothing
        if (selectedCard == undefined) {
            return;
        }

        // remove card from "deck"
        deck.splice(randomIndex, 1);
        // keep track of cards in hand
        hand.push(selectedCard);

        // construct card element
        const img = document.createElement('img');
        img.src = `cards/${selectedCard}`;
        // need event to set style on element
        img.ondblclick = (event) => {discard(selectedCard, event.target)};

        handElement.appendChild(img);

        // cbb writing this in vanilla, so it stays
        $(function () {
            $('img').draggable();
        })
    }
}

// runs when the user double clicks on a card
function discard(card, element) {
    // hide img element
    element.style.display = "none";

    // add card to discard
    discardDeck.push(card);

    // remove card from current hand
    const cardIndex = hand.indexOf(card);
    hand.splice(cardIndex, 1);
}

// returns cards in hand to deck
function replace() {
    deck = deck.concat(hand);

    handElement.innerHTML = '';
    hand = [];
}

// returns all cards to deck
function reset() {
    // ensures that 'hand' is empty
    replace();

    deck = deck.concat(discardDeck);

    discardDeck = [];
}