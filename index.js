var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;
const pictures = [
  "dice1.png",
  "dice2.png",
  "dice3.png",
  "dice4.png",
  "dice5.png",
  "dice6.png",
];
document
  .querySelector(".img1")
  .setAttribute("src", "images/" + pictures[randomNumber1 - 1]);
document
  .querySelector(".img2")
  .setAttribute("src", "images/" + pictures[randomNumber2 - 1]);

if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "&#128681 " + "Player 1 Wins!";
} else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML = "Player 2 Wins!" + " &#128681";
} else {
  document.querySelector("h1").innerHTML = "Draw!";
}
document.querySelector("h1").style.fontSize = "6rem";
