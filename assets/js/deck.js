// This will contain the general deck and cards functionality

// Create Global Variables
const suits = ["♠", "♣", "♥", "♦"]
const values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"]

export default class Deck {                 //export deck as a default so it can be used in script.js
    constructor(cards = createDeck()) {
        this.cards = cards
    }
}

class Card {
    constructor(suit, value) {
        this.suit = suit
        this.value = value 
    }
}

function createDeck() {
    return suits.flatmap(suit => {
        return values.map(value => {
            return new Card(suit, value)
        })
    })
}