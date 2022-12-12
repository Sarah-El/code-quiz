// Query selector variables from index HTML
var startQuiz = document.querySelector("#start");
var startScreen = document.querySelector("#start-screen");
var submitBtn = document.querySelector("#submit");
var timeLeft = document.querySelector("#time");
var initials = document.querySelector("#initials");
var finalScore = document.querySelector("#final-score");
var endScreen = document.querySelector("#end-screen");
var feedback = document.querySelector("#feedback");
var questions = document.querySelector("#questions");
var questionTitle = document.querySelector("#question-title");
var choices = document.querySelector("#choices");



// Time variables
var timer = 75;

// function to set timer
function timerCountdown () {
    var countdown = setInterval (() => {
        timeLeft.textContent = timer;
        timer--;

        if (timeLeft > 0) {
            timeLeft.textContent = "Your score is " + timer;
        } else (timeLeft<= 0) {
            clearInterval(countdown);
            timeLeft.textContent = "Sorry, you ran out of time! Please try again.";
            endQuiz ();
        } 
    })
}

// Import sound effects
var sfxRight = new Audio("assets/sfx/correct.wav");
var sfxWrong = new Audio("assets/sfx/incorrect.wav");
// sfxWrong.play();
// sfxRight.play();

// Add questions to HTML

// Start quiz function
startQuiz.addEventListener("click", function(event) {
    startQuiz.setAttribute("style", "display:none;");
    startTimer();
    addAnswers(currentQuestion);
    
});

// // Single questions
// var questionOne = questions [0];
// var questionTwo = questions [1];
// var questionThree = questions [2];
// var questionFour = questions [3];
// var questionFive = questions [4];

// Start quiz
