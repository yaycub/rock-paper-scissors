// Initializing DOM State
import checkResults from '../check-result.js';
import getRandomThrow from '../get-random-throw.js';
const myButton = document.getElementById('button');



// changing state
const makeSelection = () => {
    const userInput = document.querySelector('input:checked');
    const userInputValue = userInput.value;
    const computerValue = getRandomThrow();
    const winOrLose = checkResults(userInputValue, computerValue);
    console.log(winOrLose);

    
}



// event listeners
myButton.addEventListener('click', makeSelection);
