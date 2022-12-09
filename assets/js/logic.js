// Query selector variables from index HTML
var startBtn = document.querySelector("#start");
var submitBtn = document.querySelector("#submit");
var timer = document.querySelector("#time");
var choices = document.querySelector("#choices");
var initials = document.querySelector("#initials");
var finalscore = document.querySelector("#final-score");
var initialsEl = document.querySelector("initials");

// new variables
var userScore = 0;

// Import sound effects
var sfxRight = new Audio("assets/sfx/correct.wav");
var sfxWrong = new Audio("assets/sfx/incorrect.wav");

// play "wrong" sound effect
sfxWrong.play();

// play "right" sound effect
sfxRight.play();
