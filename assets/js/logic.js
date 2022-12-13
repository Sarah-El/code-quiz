// Add sound effects
var sfxRight = new Audio("assets/sfx/correct.wav");
var sfxWrong = new Audio("assets/sfx/incorrect.wav");

// Page variables
var startButton = document.querySelector("#start");
var finishQuiz = document.querySelector("#end-screen");
var questionTitle = document.querySelector("#question-title");
var startScreen = document.querySelector('#start-screen');
var feedback = document.querySelector("#feedback");
var timer = document.querySelector("#time");
var finalScore = document.querySelector("#final-score");
var questionsScreen = document.querySelector("#questions");
var answers = document.querySelector("#choices");

// Event listener
startButton.addEventListener("click", startButtonClicked);
var answerButton = choices.addEventListener('click', Answers);

// Timer countdown
var time = 50;
var timeDisplay = document.getElementById("time");
timeDisplay.textContent = (time);

function timerCountdown()
{
    var interval = setInterval(function () {
        if (time > 0) {
            time--;
            timeDisplay.textContent = time;
        }
        else if (time >= 0) {
            clearInterval(interval);
            endGame();
        }
    }, 1000)
}

// Show questions on page
var currentQuestion = 0;

function renderQuestion(index) {
    if (currentQuestion >= questions.length) {
        endGame();
    }
    else {questionsScreen.classList.remove("hide");
    answers.innerHTML = "";
    questionTitle.textContent = questions[index].title;

    for (j = 0; j < questions[index].choices.length; j++) 
    {var choice = document.createElement("button");
    choice.textContent = questions[index].choices[j];
    answers.appendChild(choice);
    answers.classList.add("answers");}
    }
}

function isCorrect (answer) {
    if (answer === questions[currentQuestion].answer)
    {
        return true;
    }
    else 
    {
        return false;
    }
}
function Answers (event) 
{
    var result = document.createElement("p");
    feedback.innerHTML = "";
    if (isCorrect(event.target.innerText)) 
    {   currentQuestion++;
        feedback.classList.remove("hide");
        var result = document.createElement("p");
        feedback.appendChild(result);
        result.textContent = "Correct";
        sfxRight.play();
       
        renderQuestion(currentQuestion);
    }
    else 
    {   time = time - 10;
        currentQuestion++;
        feedback.classList.remove("hide");
        var result = document.createElement("p");
        feedback.appendChild(result);
        result.textContent = "Wrong";
        sfxWrong.play();
        
        renderQuestion(currentQuestion);
    }
}

// Start quiz

function startButtonClicked() {
    timerCountdown();
    clearScreen();
    renderQuestion(currentQuestion);
}

function clearScreen() 
{
    startScreen.textContent = "";
    var currentQuestion = 0;
    return;
}

// End quiz
function endGame () 
{
    questionsScreen.classList.add("hide");
    finishQuiz.classList.remove("hide");
    timer.classList.add("hide");
    startScreen.textContent = "";
    localStorage.setItem("highscore", time);
    
    if (time > 0) 
    {
        finalScore.textContent = time;
    }
    else if (time <= 0)
    {
        finalScore.textContent = "Sorry, your score is " + time+ "."+ "Please try again."
    }
}

function storeScore (initals) {
        localStorage.setItem("highscore", time);
}

// Store user score 
