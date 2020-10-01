// import functions and grab DOM elements
import { getRandomThrow, didUserWin } from './get-random-throw.js';

const playButton = document.querySelector('#play');
const winSpan = document.querySelector('#win-span');
const lossSpan = document.querySelector('#loss-span');
const drawSpan = document.querySelector('#draw-span');
const gamesPlayedSpan = document.querySelector('#games-played');
const winPercentSpan = document.querySelector('#win-percent-span');
const resetButton = document.querySelector('#reset');
const resetSpan = document.querySelector('#reset-span');


// initialize state

let win = 0;
let loss = 0;
let draw = 0;
let gamesPlayed = 0;
let winPercent = 0;
let reset = 0;


// set event listeners to update state and DOM

function updateView() {
    winSpan.textContent = win;
    lossSpan.textContent = loss;
    drawSpan.textContent = draw;
    gamesPlayedSpan.textContent = gamesPlayed;
    winPercentSpan.textContent = Math.floor(winPercent);
}

playButton.addEventListener('click', () => {
    const computerWeapon = getRandomThrow();
    const playerWeapon = document.querySelector(':checked').value;
    // const playerChoice = playerWeapon.value;
    if (didUserWin(playerWeapon, computerWeapon) === 'win') {
        win++;
    }
    if (didUserWin(playerWeapon, computerWeapon) === 'lose') {
        loss++;
    }
    if (didUserWin(playerWeapon, computerWeapon) === 'draw') {
        draw++;
    }

    gamesPlayed++;
    winPercent = win / gamesPlayed * 100;
    
    updateView();
});

resetButton.addEventListener('click', () => {
    win = 0;
    loss = 0;
    draw = 0;
    gamesPlayed = 0;
    winPercent = 0;

    reset++;

    resetSpan.textContent = reset;

    updateView();
});

