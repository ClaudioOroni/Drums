

// OPTION 1 (LONGER)
//
// document.querySelector(".w").addEventListener("click", function onClick (){
// alert("W just got clicked"); //this is known as a annomouse function.
// } );


function playW(){
  var audio = new Audio("sounds/crash.mp3");
audio.play();
}

document.addEventListener('keydown', function(e) {
  if(e.keyCode == 87){
  document.getElementById('audio').play();
  }
});

function playA(){
  var audio = new Audio("sounds/kick-bass.mp3");
audio.play();
}
document.addEventListener('keydown', function(e) {
  if(e.keyCode == 65){
  document.getElementById('audio1').play();
  }
});

function playS(){
  var audio = new Audio("sounds/snare.mp3");
audio.play();
}
document.addEventListener('keydown', function(e) {
  if(e.keyCode == 83){
  document.getElementById('audio2').play();
  }
});

function playD(){
  var audio = new Audio("sounds/tom-1.mp3");
audio.play();
}
document.addEventListener('keydown', function(e) {
  if(e.keyCode == 68){
  document.getElementById('audio3').play();
  }
});

function playJ(){
  var audio = new Audio("sounds/tom-2.mp3");
audio.play();
}
document.addEventListener('keydown', function(e) {
  if(e.keyCode == 74){
  document.getElementById('audio4').play();
  }
});

function playK(){
  var audio = new Audio("sounds/tom-3.mp3");
audio.play();
}
document.addEventListener('keydown', function(e) {
  if(e.keyCode == 75){
  document.getElementById('audio5').play();
  }
});

function playL(){
  var audio = new Audio("sounds/tom-4.mp3");
audio.play();
}
document.addEventListener('keydown', function(e) {
  if(e.keyCode == 76){
  document.getElementById('audio6').play();
  }
});
