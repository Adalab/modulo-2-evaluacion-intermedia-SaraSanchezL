'use strict';

const valueOptions = document.querySelector(".js-selectOption");
const btnPlay = document.querySelector(".js-btnPlay");
const littleTitle = document.querySelector(".js-littleTitle");
const player = document.querySelector(".js-player");
const cpu = document.querySelector(".js-cpu");
const resetBtn = document.querySelector(".js-resetBtn");


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

  } else {
    move = 'tijera';
  }
  return move;
}


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
   littleTitle.innerHTML = '¡Has ganado!';
   player.innerHTML = 'Jugador:' + contador++;
}  else if (valueOptions.value === 'papel'  && moveCpu === 'piedra') {
  littleTitle.innerHTML = '¡Has ganado!';
  player.innerHTML = 'Jugador:' + contador++;
}  else if (valueOptions.value === 'piedra'  && moveCpu === 'tijera') {
  littleTitle.innerHTML = '¡Has ganado!';
  player.innerHTML = 'Jugador:' + contador++;
}  else if (valueOptions.value === 'papel'  && moveCpu === 'tijera') {
  littleTitle.innerHTML = '¡Has perdido!';
  cpu.innerHTML = 'Computadora:' + contador++;
} else if (valueOptions.value === 'tijera'  && moveCpu === 'piedra') {
  littleTitle.innerHTML = 'Has perdido!';
  cpu.innerHTML = 'Computadora:' + contador++;
} else if (valueOptions.value === 'piedra'  && moveCpu === 'papel') {
  littleTitle.innerHTML = 'Has perdido!';
  cpu.innerHTML = 'Computadora:' + contador++;
} 
}

function reset () {
  if (contador >= 10) {
    player.innerHTML = 'Jugador :' + 0; 
    cpu.innerHTML = 'Computadora : ' + 0; 
    btnPlay.classList.add('hidden');
    resetBtn.classList.remove('hidden');
  }
}

function handleClickReset () {
  btnPlay.classList.remove('hidden');
  resetBtn.classList.add('hidden');
  contador = 0; 
  littleTitle.innerHTML = 'Vamos a jugar!';
}

function handleClickBtn (event) {
  event.preventDefault();
  randomMove();
  compareMove();
  reset();
}

btnPlay.addEventListener('click', handleClickBtn);
resetBtn.addEventListener('click', handleClickReset);
