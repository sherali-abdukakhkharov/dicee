// Random Dice Images
var randomNumber1 = Math.floor(Math.random() * 6) + 1;

var randomDiceImage1 = "images/dice" + randomNumber1 + ".png";

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomDiceImage1);

var image2 = document.querySelectorAll("img")[1];

var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomDiceImage2 = "images/dice" + randomNumber2 + ".png";

image2.setAttribute("src", randomDiceImage2);

// IF player 1 wins
if (randomNumber1 > randomNumber2){
	document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";
}

// IF player 2 wins
else if(randomNumber1 < randomNumber2){
	document.querySelector("h1").innerHTML = "Player 2 Wins!🚩";
}

// IF it is Draw
else {
	document.querySelector("h1").innerHTML = "DR🤝W"
}
