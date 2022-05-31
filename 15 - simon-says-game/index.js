const buttonColors = ['red', 'blue', 'green', 'yellow'];
let gamePattern = [];
let userClickedPattern = [];
let round = 0

function nextSequence() {
  //select next color semi-randomly and store it
  randomChosenColor = buttonColors[Math.floor(Math.random() * 4)];
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

$(".btn").click(function(event) {
  //grab the id of the button clicked and store it
  buttonAnimation(event.target.id)
  let userChosenColor = event.target.id;
  userClickedPattern.push(userChosenColor)
  playSound(userChosenColor)
  if (userClickedPattern[round] != gamePattern[round]) {
    $("body").css("background-color", "red")
  }
  nextSequence();
})

$(document).keypress(function() {
  if (round == 0) {
    nextSequence()
  }
})
