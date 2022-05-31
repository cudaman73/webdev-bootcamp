const buttonColors = ['red', 'blue', 'green', 'yellow'];
let gamePattern = [];
let userClickedPattern = [];
let round = 0

function nextSequence() {
  userClickedPattern = []
  //select next color semi-randomly and store it
  randomChosenColor = buttonColors[Math.floor(Math.random() * 4)];
  console.log("adding " + randomChosenColor + " to the game pattern")
  gamePattern.push(randomChosenColor);
  //animation to let user know which color was selected
  $("#" + randomChosenColor).fadeOut(75).fadeIn(75);
  playSound(randomChosenColor);
  $("h1").text("Round " + round);
  round++;
}

function playSound(name) {
  let audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}

function buttonAnimation(key) {
  $("#" + key).addClass("pressed");
  setTimeout(function() {
    $("#" + key).removeClass("pressed");
  }, 100)
}

function checkAnswer(round) {
  if (gamePattern[round] === userClickedPattern[round]) {
    console.log(round + " success")
    if (userClickedPattern.length == gamePattern.length) {
      setTimeout(function() {
        nextSequence()
      }, 1000)
    }
  } else {
      $("h1").text("Game Over, press any key to restart");
      $("body").addClass("game-over");
      setTimeout(function() {
        $("body").removeClass("game-over")
      }, 200);
      gameOver();
  }
}

function gameOver() {
  gamePattern = [];
  round = 0
}

$(".btn").click(function(event) {
  //grab the id of the button clicked and store it
  buttonAnimation(event.target.id)
  let userChosenColor = event.target.id;
  userClickedPattern.push(userChosenColor)
  playSound(userChosenColor)
  //check to see if the clicked answer is correct
  if (checkAnswer(userClickedPattern.length - 1)) {

  }
})

$(document).keypress(function() {
  if (round === 0) {
    nextSequence()
    round++
  }
})
