// IMPORT MODULES under test here:
// import example from '../src/example.js';
import checkResults from '../check-result.js';
const test = QUnit.test;

test('should return win if player is rock and computer is scissors', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    let playerInput = 'rock';
    let computerInput = 'scissors';
    //Act 
    // Call the function you're testing and set the result to a const
    const result = checkResults(playerInput, computerInput);
    //Assert
    // Make assertions about what is expected valid result
    assert.equal(result, 'win');
});

test('should return win if player is scissors and computer is paper', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    let playerInput = 'scissors';
    let computerInput = 'paper';
    //Act 
    // Call the function you're testing and set the result to a const
    const result = checkResults(playerInput, computerInput);
    //Assert
    // Make assertions about what is expected valid result
    assert.equal(result, 'win');
});

test('should return win if player is paper and computer is rock', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    let playerInput = 'paper';
    let computerInput = 'rock';
    //Act 
    // Call the function you're testing and set the result to a const
    const result = checkResults(playerInput, computerInput);
    //Assert
    // Make assertions about what is expected valid result
    assert.equal(result, 'win');
});

test('should return lose if player is paper and computer is scissors', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    let playerInput = 'paper';
    let computerInput = 'scissors';
    //Act 
    // Call the function you're testing and set the result to a const
    const result = checkResults(playerInput, computerInput);
    //Assert
    // Make assertions about what is expected valid result
    assert.equal(result, 'lose');
});

test('should return lose if player is rock and computer is paper', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    let playerInput = 'rock';
    let computerInput = 'paper';
    //Act 
    // Call the function you're testing and set the result to a const
    const result = checkResults(playerInput, computerInput);
    //Assert
    // Make assertions about what is expected valid result
    assert.equal(result, 'lose');
});

test('should return lose if player is scissors and computer is rock', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    let playerInput = 'scissors';
    let computerInput = 'rock';
    //Act 
    // Call the function you're testing and set the result to a const
    const result = checkResults(playerInput, computerInput);
    //Assert
    // Make assertions about what is expected valid result
    assert.equal(result, 'lose');
});

test('should return draw if player is scissors and computer is scissors', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    let playerInput = 'scissors';
    let computerInput = 'scissors';
    //Act 
    // Call the function you're testing and set the result to a const
    const result = checkResults(playerInput, computerInput);
    //Assert
    // Make assertions about what is expected valid result
    assert.equal(result, 'draw');
});

test('should return draw if player is paper and computer is paper', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    let playerInput = 'paper';
    let computerInput = 'paper';
    //Act 
    // Call the function you're testing and set the result to a const
    const result = checkResults(playerInput, computerInput);
    //Assert
    // Make assertions about what is expected valid result
    assert.equal(result, 'draw');
});

test('should return draw if player is rock and computer is rock', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    let playerInput = 'rock';
    let computerInput = 'rock';
    //Act 
    // Call the function you're testing and set the result to a const
    const result = checkResults(playerInput, computerInput);
    //Assert
    // Make assertions about what is expected valid result
    assert.equal(result, 'draw');
});

