// This will contain the game logic

import Deck from "./deck.js"

const deck = new Deck()
deck.shuffle()
console.log(deck.cards)