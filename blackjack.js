//Loaded 52 cards into the deck so that user/css can know what suit and value the cards are
// var deck = ['Ac', 'Ad', 'Ah', 'As', '2c', '2d', '2h', '2s', '3c', '3d', '3h', '3s', '4c', '4d', '4h', '4s', '5c', '5d', '5h', '5s', '6c', '6d', '6h', '6s', '7c', '7d', '7h', '7s', '8c', '8d', '8h', '8s', '9c', '9d', '9h', '9s', 'Tc', 'Td', 'Th', 'Ts', 'Jc', 'Jd', 'Jh', 'Js', 'Qc', 'Qd', 'Qh', 'Qs', 'Kc', 'Kd', 'Kh', 'Ks'];
// console.log(deck);
//Loaded 52 values of the deck into an array so that I can more easily fiddle around with the logic behind blackjack
var pointValueDeck = [11, 11, 11, 11, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 6, 6, 6, 6, 7, 7, 7, 7, 8, 8, 8, 8, 9, 9, 9, 9, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, ];
console.log(pointValueDeck);
// userHand is an empty array so that I can pop off values of a shuffled deck into the user's "hand"
var userHand = [];
// houseHand is an empty array so that I can pop off values of a shuffled deck into the house's "hand"
var houseHand = [];
var randomDeck = [];

//shuffle function for use during startGame function
function shuffle(pointValueDeck){
    for(var j, x, i = pointValueDeck.length; i; j = Math.floor(Math.random() * i), x = pointValueDeck[--i], pointValueDeck[i] = pointValueDeck[j], pointValueDeck[j] = x);
    return pointValueDeck;
}
var randomDeck = shuffle(pointValueDeck);

//startGame function | The startGame function will....
var startGame = function(init){
 var card_1 = randomDeck.shift();
 userHand.push(card_1);
 var card_2 = randomDeck.shift();
 houseHand.push(card_2);
 var card_3 = randomDeck.shift();
 userHand.push(card_3);
 var card_4 = randomDeck.shift();
 houseHand.push(card_4);
 console.log(houseHand.length)
 for(i=0; i < houseHand.length; i++){
          $(".house_card").append("<div class='house_card" + i + "'>" + houseHand[i] + "</div>");
        }
 for(i=0; i < userHand.length; i++){
          $(".user_card").append("<div class='user_card" + i + "'>" + userHand[i] + "</div>");
        }


 var userValue = eval(userHand.join('+'));
 var houseValue = eval(houseHand.join('+'));
 console.log(userHand);
 console.log(userValue);
 console.log(houseHand);
 console.log(houseValue);
 if (userValue === 21)
    {
      alert("Blackjack!")
    }

}

// hitMe function | The hitMe function will take the top card from the shuffled deck and place it into the userHand array
var hitMe = function(addCard){
 var addCard = randomDeck.shift();
 userHand.push(addCard);
 var userValue = eval(userHand.join('+'));
 var houseValue = eval(houseHand.join('+'));
 if (userValue > 21){
   alert("You busted you lose :(")
 }
 if (userValue === 21)
    {
      alert("I wouldnt hit if I were you")
    }
if ( houseValue < 16 && userValue < 21 )
   {
     var addCard = randomDeck.shift();
     houseHand.push(addCard);
     var houseValue = eval(houseHand.join('+'));
     if ( houseValue > 21 )
     {
       alert("The dealer has busted! You win!")
     }
   }

   for(i=2; i < houseHand.length; i++){
            $(".house_card").append("<div class='house_card" + i + "'>" + houseHand[i] + "</div>");
          }
   for(i=2; i < userHand.length; i++){
            $(".user_card").append("<div class='user_card" + i + "'>" + userHand[i] + "</div>");
          }


 console.log(userHand);
 console.log(userValue);
 console.log(houseHand)
 console.log(houseValue)
}

//stay function | The stay function will be an alert to the game that the user has stopped the game and should check the values of the userHand against the houseHand to se which hand has won
var stay = function(stopGame){
  var userValue = eval(userHand.join('+'));
  var houseValue = eval(houseHand.join('+'));

  if ( houseValue < 16 && userValue > houseValue ) {
    var addCard = randomDeck.shift();
    houseHand.push(addCard);
    var houseValue = eval(houseHand.join('+'));
    console.log(houseValue);
    if ( houseValue < userValue ) {
      var addCard = randomDeck.shift();
      houseHand.push(addCard);
      var houseValue = eval(houseHand.join('+'));
      console.log(houseValue);
    }
    if ( houseValue < userValue ) {
      var addCard = randomDeck.shift();
      houseHand.push(addCard);
      var houseValue = eval(houseHand.join('+'));
      console.log(houseValue);
    }
    if (houseValue > userValue && houseValue <= 21) {
      alert("Sorry the Dealer won");
    }
  }
  if ( userValue > houseValue && userValue < 21 ) {
    alert("You Won!!!");
  } else if (userValue == houseValue) {
    alert("Sorry the House always wins");
  }
  if (houseValue > userValue && houseValue < 22) {
    alert("Sorry the dealer won")
  }
    else if (houseValue > 21) {
      alert("The Dealer Busted")
    }

}

//resetGame function | The resetGame function will set both the userHand and houseHand to an empty Array
var resetGame = function(clear){
  window.location.reload(false);
}



// The event listeners for my buttons using Jquery
$("#hitMe").on("click", function() {
  hitMe();
});

$("#stay").on("click", function() {
  stay();
});

$("#resetGame").on("click", function() {
  resetGame();
});

$("#startGame").on("click", function() {
  startGame();
});
