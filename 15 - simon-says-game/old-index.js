const colors = ["green", "red", "yellow", "blue"];
let computerChoices = [];
let playerChoices = [];
let round = 0

function pickColor() {
  choice = Math.floor(Math.random() * colors.length)
  makeChoice(colors[choice])
  computerChoices.push(colors[choice])
}

function buttonAnimation(key) {
  $("." + key).addClass("pressed");
  setTimeout(function() {
    $("." + key).removeClass("pressed");
  }, 100)
}

function makeChoice(key) {
  buttonAnimation(key);
  switch (key) {
    case "a":
      var audio = new Audio("sounds/green.mp3")
      audio.play()
      break;
    case "s":
      var audio = new Audio("sounds/red.mp3")
      audio.play()
      break;
    case "d":
      var audio = new Audio("sounds/yellow.mp3")
      audio.play()
      break;
    case "f":
      var audio = new Audio("sounds/blue.mp3")
      audio.play()
      break;
  }
}

function resetGame() {
  round = 0
  computerChoices = [];
  playerChoices = [];
}

function playChoices() {

}

$(document).keypress(function() {

  $("h1").text("Round " + round);
  pickColor();
  let counter = 1;
  $.each(computerChoices, function(index, value) {
    setTimeout(function() {
      setInterval(() => {
        $('#' + value).fadeIn();
        $('#' + value).fadeOut();
      }, 100);
      makeChoice(value)
    }, counter * 750);
    counter++;
  });
  for (i = 0, i <= round, i++) {
    makeChoice(event.key);
    playerChoices.push(event.key);
    if (computerChoices[i] != playerChoices[i]) {
      var audio = new audio("sounds/wrong.mp3");
      audio.play();
      resetGame();
    }
  }
  pickColor();
  round++;
}

});
