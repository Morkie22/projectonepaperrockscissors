let playerScore = 0;
let computerScore = 0;   
let value = null;

const displayPlayer = document.querySelector('#pleft');
const displayComputer = document.querySelector('#pright');
const msg = document.querySelector('#message');
const ppoints = document.querySelector('#ppoints');
const cpoints = document.querySelector('#cpoints');
const GAME_OPTIONS = {
    ROCK: 'Rock',
    PAPER: 'Paper',
    SCISSORS: 'Scissors'
}
function computerPlay() {
    const numbOpt = Object.keys(GAME_OPTIONS).length;
    let random = Math.floor(Math.random()* numbOpt);
    if(random == 1) return GAME_OPTIONS.ROCK;
    if(random == 2) return GAME_OPTIONS.PAPER;
    else return GAME_OPTIONS.SCISSORS;
}

function playRound(playerSelection, computerSelection){

    if(!playerSelection.localeCompare(computerSelection)) value = null;
    else if(!playerSelection.localeCompare(GAME_OPTIONS.ROCK))
        value = (!computerSelection.localeCompare(GAME_OPTIONS.SCISSORS));
    else if(!playerSelection.localeCompare(GAME_OPTIONS.SCISSORS))
        value = (!computerSelection.localeCompare(GAME_OPTIONS.PAPER));
    else if(!playerSelection.localeCompare(GAME_OPTIONS.PAPER))
        value = (!computerSelection.localeCompare(GAME_OPTIONS.ROCK));
        
    if(value) playerScore+=1;
    else if(!value) computerScore+=1;
    msg.textContent = message(value, playerSelection, computerSelection);
}

