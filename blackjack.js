//Loaded 52 cards into the deck so that user/css can know what suit and value the cards are
var deck = ['Ac', 'Ad', 'Ah', 'As', '2c', '2d', '2h', '2s', '3c', '3d', '3h', '3s', '4c', '4d', '4h', '4s', '5c', '5d', '5h', '5s', '6c', '6d', '6h', '6s', '7c', '7d', '7h', '7s', '8c', '8d', '8h', '8s', '9c', '9d', '9h', '9s', 'Tc', 'Td', 'Th', 'Ts', 'Jc', 'Jd', 'Jh', 'Js', 'Qc', 'Qd', 'Qh', 'Qs', 'Kc', 'Kd', 'Kh', 'Ks'];
//Loaded 52 values of the deck into an array so that I can more easily fiddle around with the logic behind blackjack
var pointValueDeck = [11, 11, 11, 11, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 6, 6, 6, 6, 7, 7, 7, 7, 8, 8, 8, 8, 9, 9, 9, 9, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, ];
console.log(deck);
// userHand is an empty array so that I can pop off values of a shuffled deck into the user's "hand"
var userHand = [];
// houseHand is an empty array so that I can pop off values of a shuffled deck into the house's "hand"
var houseHand = [];

// hitMe function | The hitMe function will take the top card from the shuffled deck and place it into the userHand array
var hitMe = function(addCard){
 var topCard =
 var addCard = $("#userHand");

}

//stay function | The stay function will be an alert to the game that the user has stopped the game and should check the values of the userHand against the houseHand to se which hand has won
var stay = function(stopGame){
 var stopGame =

}

//resetGame function | The resetGame function will....
var resetGame = function(clear){
 var clear =

}

//startGame function | The startGame function will....
var startGame = function(init){
 var init =

}



// The Event listeners for my buttons using Jquery
$("#hitMe").on("click", function() {

});

$("#stay").on("click", function() {

});

$("#resetGame").on("click", function() {

});

$("#startGame").on("click", function() {

});
