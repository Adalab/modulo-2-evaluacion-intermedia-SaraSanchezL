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
 console.log(randomNum);
  let move = '';

  if (randomNum <= 3) {           
    move = 'piedra';

  } else if  (randomNum <= 6) {
    move = 'papel'; 

  } else {
    move = 'tijera';
  }
  return move;
}
console.log(randomMove());


let contador = 0;

function compareMove () {
  const moveCpu = randomMove();
  if (valueOptions.value === 'tijera' && moveCpu === 'tijera'){
    littleTitle.innerHTML = 'Empate';
  } else if (valueOptions.value === 'piedra'  && moveCpu === 'piedra') {
    littleTitle.innerHTML = 'Empate';
  } else if (valueOptions.value === 'papel'  && moveCpu === 'papel') {
    littleTitle.innerHTML = 'Empate';
}  else if (valueOptions.value === 'tijera'  && moveCpu === 'papel') {
   littleTitle.innerHTML = 'Jugador gana';
   player.innerHTML = 'Jugador:' + contador++;
}  else if (valueOptions.value === 'papel'  && moveCpu === 'piedra') {
  littleTitle.innerHTML = 'Jugador gana';
  player.innerHTML = 'Jugador:' + contador++;
}  else if (valueOptions.value === 'piedra'  && moveCpu === 'tijera') {
  littleTitle.innerHTML = 'Jugador gana';
  player.innerHTML = 'Jugador:' + contador++;
}  else if (valueOptions.value === 'papel'  && moveCpu === 'tijera') {
  littleTitle.innerHTML = 'Cpu gana';
  cpu.innerHTML = 'Computadora:' + contador++;
} else if (valueOptions.value === 'tijera'  && moveCpu === 'piedra') {
  littleTitle.innerHTML = 'Cpu gana';
  cpu.innerHTML = 'Computadora:' + contador++;
} else if (valueOptions.value === 'piedra'  && moveCpu === 'papel') {
  littleTitle.innerHTML = 'Cpu gana';
  cpu.innerHTML = 'Computadora:' + contador++;
} 
}


function reset () {
  if (contador >= 10) {
    player.innerHTML = 'Jugador :' + 0; 
    cpu.innerHTML = 'Computadora : ' + 0; 
  }
}

function handleClickBtn (event) {
  event.preventDefault();
  randomMove();
  compareMove();
  reset();
}

btnPlay.addEventListener('click', handleClickBtn);