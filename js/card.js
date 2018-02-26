var cardNumber = prompt("¿Cuál es el número de tu tarjeta?");

// console.log(cardArray);

function isValidCard() {
var cardArray = [];
if (cardNumber == 0 || cardNumber.length !== 16) {
  alert("no válido");
} else {
  for (var i = 0; i < cardNumber.length; i++) {
    var numbers = parseInt(cardNumber[i]);
    // console.log(numbers);
    cardArray.push(numbers);
  }
  cardArray.reverse();
  // console.log(cardArray);
  for (var i = 0; i < cardArray.length; i++) {
    var position = i;
    // console.log(position);
    if (position % 2 === 0) {
      console.log(cardArray[i]);
      // var pair = cardArray[i] * 2
      // console.log(pair);
    }
  }


  // cardArray = Array.from(numbers);
  // console.log(cardArray);
}
}

isValidCard();
