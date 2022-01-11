'use strict';

// App Variables
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

// Document Elements
const docBody = document.querySelector('body');
const numberToGuess = document.querySelector('.number');
const checkBtn = document.querySelector('.check');
const againBtn = document.querySelector('.again');
const guessNumber = document.querySelector('.guess');
const scoreElement = document.querySelector('.score');
const highscoreElement = document.querySelector('.highscore');
const messageDisplayer = document.querySelector('.message');

// Check event
checkBtn.addEventListener('click', function () {

    const guess = Number(guessNumber.value);
    if (!guess) {
        displayMessage('No number!');
    } else if (guess === secretNumber) {
        displayMessage('Correct number!');
        numberToGuess.textContent = secretNumber;
        docBody.style.backgroundColor = '#698B69';
        if (score > highscore) {
            highscore = score;
            highscoreElement.textContent = highscore;
        }
    } else {
        if (score > 1) {
            displayMessage(guess > secretNumber ? 'Too high!' : 'Too low!');
            score--;
            scoreElement.textContent = score;
        } else {
            displayMessage("You've lost the game...");
            scoreElement.textContent = 0;
            docBody.style.backgroundColor = '#C05458';
        }
    }
});

// Again event
againBtn.addEventListener('click', function () {
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    score = 20;
    numberToGuess.textContent = '?';
    scoreElement.textContent = score;
    docBody.style.backgroundColor = '#222';
    guessNumber.value = '';
    displayMessage('Start guessing...');
});

// Functions
function displayMessage (message) {
    messageDisplayer.textContent = message;
}