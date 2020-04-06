var level = 0;
var upcomingItem = 0;
var order = [];
var tempo;

//start new game
$(document).keypress(startGame);

//start game
function startGame() {
  if (level === 0) {
    addNew();
  }
}
//add button listener
$(".button").click(function(event) {
  if ($(event.target).hasClass("button-" + order[upcomingItem])) {
    upcomingItem++;
    if (upcomingItem === order.length) {
      addNew();
    }
  } else if ($(event.target).hasClass("button")) {
    $("h1").html("Game over. Press a key to Start");
    restart();
  } else { //not a button pushed
  };
});


//add new  Element to the order
function addNew() {
  var newElement = randomNextRectangle();
  level++;
  $("h1").html("Level " + level);
  order.push(newElement);
  playOrder();
}

//play the whole sequence
function playOrder() {
  for (let i = 0; i < order.length; i++) {
    animate_delayed(i);
  }
  upcomingItem = 0;
}

//Anmimation
function animate_delayed(buttonID) { //it has delay
  tempo = 400 - Math.floor((level - 1) / 3) * 80;
  if (tempo < 100) {
    tempo = 90;
  };
  setTimeout(function() {
    $(".button-" + order[buttonID]).fadeTo(tempo, 0.2).fadeTo(tempo, 1);
  }, (tempo * 2) * buttonID)

}
//random number generation
function randomNextRectangle() {
  return Math.floor(Math.random() * 4) + 1;
}


function restart() {
  level = 0;
  upcomingItem = 0;
  order = [];
  tempo;
}
