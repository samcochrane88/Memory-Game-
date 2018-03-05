
//alert ('Hello friends');

const cards = ["queen", "queen", "king", "king"];

const cardsInPlay =[];

const cardOne = cards[0]
const cardTwo = cards[2]


cardsInPlay.push (cardOne)
cardsInPlay.push (cardTwo)


console.log(`user flipped ${cardOne}`);
console.log(`user flipped ${cardTwo}`);

if (cardsInPlay.length === 2){
	if (cardOne === cardTwo) {
alert('You found a match!');
} else {
alert('Sorry, try again')
	}

};
