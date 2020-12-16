// This will contain the game logic

import Deck from "./deck.js"

const cardValueMap = {
    "2": 2,
    "3": 3,
    "4": 4,
    "5": 5,
    "6": 6,
    "7": 7,
    "8": 8,
    "9": 9,
    "10": 10,
    J: 11,
    Q: 12,
    K: 13,
    A: 14
}

const computerCardSlot = document.querySelector(".computer-card-slot")
const playerCardSlot = document.querySelector(".player-card-slot")
const computerDeckElement = document.querySelector(".computer-deck")
const playerDeckElement = document.querySelector(".player-deck")
const text = document.querySelector(".text")

let playerDeck;
let computerDeck;

let inRound;
let stop;

document.addEventListener("click", () => {
    if (stop) {
        startGame()
    return              //return here so the next code does not run if someone wins instead we restart the game
    }

    if (inRound) {
        resetRound()
    } else {
        flipCards()
    }
})

startGame()
function startGame() {
    const deck = new Deck()
    deck.shuffle()

    const deckMidpoint = Math.ceil(deck.numberOfCards / 2)
    playerDeck = new Deck(deck.cards.slice(0, deckMidpoint))
    computerDeck = new Deck(deck.cards.slice(deckMidpoint, deck.numberOfCards))

    //console.log(playerDeck);
    //console.log(computerDeck);

    inRound = false                 //the card is currently flipped
    stop = false

    resetRound()
}

function resetRound() {
    inRound = false 
    computerCardSlot.innerHTML = ""
    playerCardSlot.innerHTML = ""
    text.innerText = ""

  updateDeckCount()
}

function flipCards() {
    inRound = true

    const playerCard = playerDeck.pop()
    const computerCard = computerDeck.pop()

    // Render the cards in the html file:
    playerCardSlot.appendChild(playerCard.getHTML())
    computerCardSlot.appendChild(computerCard.getHTML())

    updateDeckCount()

    if (isRoundWinner(playerCard, computerCard)) {      //if playerCard wins Vs cpu card
        text.innerText = "Win"
        playerDeck.push(playerCard)     //push the card to the bottom of the winning deck
        playerDeck.push(computerCard)   // push the card to the bottom of the winning deck
    } else if (isRoundWinner(computerCard, playerCard)) { // if cpu card wins
        text.innerText = "Lose"
        computerDeck.push(playerCard)
        computerDeck.push(computerCard)
    } else {
        text.innerText = "Draw"
        playerDeck.push(playerCard)
        computerDeck.push(computerCard)
    }

    if (isGameOver(playerDeck)) {           // All cards gone
        text.innerText = "You Lose!!"
        stop = true                         
    } else if (isGameOver(computerDeck)) {
        text.innerText = "You Win!!"
        stop = true
    }
}

function updateDeckCount() {
    computerDeckElement.innerText = computerDeck.numberOfCards
    playerDeckElement.innerText = playerDeck.numberOfCards
}


function isRoundWinner(cardOne, cardTwo) {
  return cardValueMap[cardOne.value] > cardValueMap[cardTwo.value]
}

function isGameOver(deck) {
  return deck.numberOfCards === 0
}