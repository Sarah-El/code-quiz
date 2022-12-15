// Page variables
var highScores = document.querySelector('#highscores');
var clearScores = document.querySelector('#clear');

// Show highscores
var showScore = document.createElement("<li>");
showScore.textContent = (userInitials + ": " + time);
highScores.appendChild(showScore);