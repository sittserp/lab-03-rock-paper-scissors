// IMPORT MODULES under test here:
import { getRandomThrow, didUserWin } from '../get-random-throw.js';
// import { example } from '../example.js';

const test = QUnit.test;

test('I expect a one word string of either rock, paper, or scissors,', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const possibleValues = ['rock', 'paper', 'scissors'];
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = getRandomThrow();

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(possibleValues.includes(actual), true);
});

test('I expect to get win, lose, or draw returned.', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const possibleCombos1 = 'draw';
    const possibleCombos2 = 'lose';
    const possibleCombos3 = 'win';
    const possibleCombos4 = 'win';
    const possibleCombos5 = 'draw';
    const possibleCombos6 = 'lose';
    const possibleCombos7 = 'lose';
    const possibleCombos8 = 'win';
    const possibleCombos9 = 'draw';
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual1 = didUserWin('rock', 'rock');
    const actual2 = didUserWin('rock', 'paper');
    const actual3 = didUserWin('rock', 'scissors');
    const actual4 = didUserWin('paper', 'rock');
    const actual5 = didUserWin('paper', 'paper');
    const actual6 = didUserWin('paper', 'scissors');
    const actual7 = didUserWin('scissors', 'rock');
    const actual8 = didUserWin('scissors', 'paper');
    const actual9 = didUserWin('scissors', 'scissors');

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(possibleCombos1.includes(actual1), true);
    expect.equal(possibleCombos2.includes(actual2), true);
    expect.equal(possibleCombos3.includes(actual3), true);
    expect.equal(possibleCombos4.includes(actual4), true);
    expect.equal(possibleCombos5.includes(actual5), true);
    expect.equal(possibleCombos6.includes(actual6), true);
    expect.equal(possibleCombos7.includes(actual7), true);
    expect.equal(possibleCombos8.includes(actual8), true);
    expect.equal(possibleCombos9.includes(actual9), true);

    console.log(actual8);
});
