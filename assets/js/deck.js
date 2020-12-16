// This will contain the general deck and cards functionality

// Create Global Variables
const suits = ["♠", "♣", "♥", "♦"]
const values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"]


// Create object class Deck
export default class Deck {                 //export deck as a default so it can be used in script.js
    constructor(cards = createDeck()) {
        this.cards = cards
    }

    // Create a getter for this.cards.length to get the number of cards, as we will use this often
    get numberOfCards() {
        return this.cards.length
    }
    // Add a shuffle function to our deck class, create a loop, loop through our cards and swap them with other cards in our array
    shuffle() {
        for (let i = this.numberOfCards - 1; i > 0; i--) {
            const newIndex = Math.floor(Math.random() * (i + 1))
            const oldValue = this.cards[newIndex]
            this.cards[newIndex] = this.cards[i]
            this.cards[i] = oldValue
        }
    }
}

// Create a Card class
class Card {
    constructor(suit, value) {
        this.suit = suit
        this.value = value 
    }
}

//Create a new deck of cards with all 52 cards, one for each suit and value combination
//so we will loop through all the suits, loop through all the values and combine them into one array
function createDeck() {
    return suits.flatMap(suit => {              //flatMap condenses 4 arrays of 13 into one array
        return values.map(value => {
            return new Card(suit, value)            // Create new card
        })
    })
}