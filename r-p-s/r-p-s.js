// Initializing DOM State
import checkResults from '../check-result.js';
import getRandomThrow from '../get-random-throw.js';
const resultDisplay = document.getElementById('win-or-lose');
const winDisplay = document.getElementById('wins');
const lossDisplay = document.getElementById('losses');
const drawDisplay = document.getElementById('draws');
const userChoice = document.getElementById('user-choice');
const computerChoice = document.getElementById('computer-choice');
const myButton = document.getElementById('button');

let wins = 0;
let losses = 0;
let draws = 0;

// Utilities
const editDisplay = (result) => {
    if (result === 'win') {
        resultDisplay.textContent = 'YOU WINNNN';
        wins++;
        winDisplay.textContent = wins;
    } else if (result === 'draw'){
        resultDisplay.textContent = 'It is a DRAW, d00d!'
        draws++;
        drawDisplay.textContent = draws;
    } else if (result === 'lose'){
        resultDisplay.textContent = 'YOU LOSE TRY AGAIN PLZZZZ';
        losses++;
        lossDisplay.textContent = losses;
    }
};

const choiceDisplay = (user, comp) => {
    userChoice.textContent = user;
    computerChoice.textContent = comp;
};


// changing state
const makeSelection = () => {
    const userInput = document.querySelector('input:checked');

    const userInputValue = userInput.value;
    const computerValue = getRandomThrow();
    choiceDisplay(userInputValue, computerValue);

    const winOrLose = checkResults(userInputValue, computerValue);
    editDisplay(winOrLose);
};



// event listeners
myButton.addEventListener('click', makeSelection);
