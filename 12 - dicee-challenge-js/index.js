function randNum() {
  return Math.round(Math.random() * 5) + 1
}

function playGame() {
  var dice1 = randNum()
  var dice2 = randNum()
  document.querySelector(".img1").src = "images/dice" + dice1 + ".png"
  document.querySelector(".img2").src = "images/dice" + dice2 + ".png"

  if (dice1 > dice2) {
    document.querySelector("h1").innerHTML = "🏲 Player 1 Wins!"
  }
  else if (dice2 > dice1) {
    document.querySelector("h1").innerHTML = "Player 2 Wins! 🏲"
  }
  else {
    document.querySelector("h1").innerHTML = "Draw!"
  }
}
