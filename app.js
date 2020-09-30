// import functions and grab DOM elements
import { getRandomThrow, didUserWin } from './get-random-throw.js';

const playButton = document.querySelector('#play');
const winSpan = document.querySelector('#win-span');
const lossSpan = document.querySelector('#loss-span');
const drawSpan = document.querySelector('#draw-span');
const gamesPlayedSpan = document.querySelector('#games-played');
const winPercentSpan = document.querySelector('#win-percent-span');


// initialize state

let win = 0;
let loss = 0;
let draw = 0;
let gamesPlayed = 0;
let winPercent = 0;

// set event listeners to update state and DOM

playButton.addEventListener('click', () => {
    const computerWeapon = getRandomThrow();
    const playerWeapon = document.querySelector(':checked');
    const playerChoice = playerWeapon.value;
    if (didUserWin(playerChoice, computerWeapon) === 'win') {
        win++;
    }
    if (didUserWin(playerChoice, computerWeapon) === 'loss') {
        loss++;
    }
    if (didUserWin(playerChoice, computerWeapon) === 'draw') {
        draw++;
    }

        gamesPlayed++;
        winPercent = win / gamesPlayed * 100;
    
        winSpan.textContent = win;
        lossSpan.textContent = loss;
        drawSpan.textContent = draw;
        gamesPlayedSpan.textContent = gamesPlayed;
        winPercentSpan.textContent = Math.floor(winPercent);

})