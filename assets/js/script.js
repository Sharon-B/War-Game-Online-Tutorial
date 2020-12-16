// This will contain the game logic

import Deck from "./deck.js"


const computerCardSlot = document.querySelector(".computer-card-slot")
const playerCardSlot = document.querySelector(".player-card-slot")

const deck = new Deck()
deck.shuffle()
console.log(deck.cards)

computerCardSlot.appendChild(deck.cards[0].getHTML())
playerCardSlot.appendChild(deck.cards[1].getHTML())
