var cards = ["queen", "queen", "king", "king"];


var cardsInPlay = []


function checkForMatch() {
if (cardsInPlay[0] === cardsInPlay[1]) {
  console.log("You found a match!");
} else {
  console.log("Sorry, try again.");
}
}


function flipCard(cardID) {
console.log("User flipped " + cards[cardID]);
cardsInPlay.push(cards[cardID]);
checkForMatch();

if (cardsInPlay.length === 2 && cardsInPlay[0] === cardsInPlay[1]) {
alert("You found a match!");
}

else {
alert("Sorry, try again.")
}


}


flipCard(0);
flipCard(2);