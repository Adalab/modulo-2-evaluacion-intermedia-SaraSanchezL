'use strict';

const valueOptions = document.querySelector(".js-selectOption");
const btnPlay = document.querySelector(".js-btnPlay");
const littleTitle = document.querySelector(".js-littleTitle");
const player = document.querySelector(".js-player");
const cpu = document.querySelector(".js-cpu");


function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
 }
 
 
 function randomMove() {           
  const randomNum = getRandomNumber(10);
  let move = '';

  if (randomNum <= 3) {           
    move = 'piedra';

  } else if  (randomNum <= 6) {
    move = 'papel'; 

  } else if (randomNum > 7) {
    move = 'tijera';
  }
  return move;
}
// console.log(randomMove());
// console.log(getRandomNumber(10));



function compareMove () {
  let playerMove = valueOptions.value; 
  if (playerMove === move){
    littleTitle.innerHTML = 'Empate'
  } else if (playerMove !== move) {
    littleTitle.innerHTML = 'Tu ganas'
  }
}

function countPoints () {
  if ()
}

function handleClickBtn () {
  randomMove();
}

btnPlay.addEventListener('click', handleClickBtn);