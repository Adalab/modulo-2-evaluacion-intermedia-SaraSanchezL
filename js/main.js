'use strict';

const valueOptions = document.querySelector(".js-selectOption");
const btnPlay = document.querySelector(".js-btnPlay");
const littleTitle = document.querySelector(".js-littleTitle");
const player = document.querySelector(".js-player");
const cpu = document.querySelector(".js-cpu");
const resetBtn = document.querySelector(".js-resetBtn");
const totalRounds = document.querySelector(".js-totalRounds");



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


let contadorTotal = 0;
let playerWin = 0;
let cpuWin = 0;


function compareMove () {
  const moveCpu = randomMove();
  contadorTotal++;
  if (valueOptions.value === 'tijera' && moveCpu === 'tijera'){
    littleTitle.innerHTML = 'Empate';
  } else if (valueOptions.value === 'piedra'  && moveCpu === 'piedra') {
    littleTitle.innerHTML = 'Empate';
  } else if (valueOptions.value === 'papel'  && moveCpu === 'papel') {
    littleTitle.innerHTML = 'Empate';
}  else if (valueOptions.value === 'tijera'  && moveCpu === 'papel') {
   renderTitleWin();
   playerWin++;
}  else if (valueOptions.value === 'papel'  && moveCpu === 'piedra') {
  renderTitleWin(); 
  playerWin++;
}  else if (valueOptions.value === 'piedra'  && moveCpu === 'tijera') {
  renderTitleWin(); 
  playerWin++;
}  else if (valueOptions.value === 'papel'  && moveCpu === 'tijera') {
  renderTitleLose();
  cpuWin++;
} else if (valueOptions.value === 'tijera'  && moveCpu === 'piedra') {
  renderTitleLose();
  cpuWin++;
} else if (valueOptions.value === 'piedra'  && moveCpu === 'papel') {
  renderTitleLose();
  cpuWin++;
} 
renderCounter (); 
};

function renderCounter () {
  player.innerHTML = 'Jugador: ' + playerWin;
  cpu.innerHTML = 'Computadora: ' + cpuWin;
  totalRounds.innerHTML = 'Ronda: ' + contadorTotal;
}
function renderTitleWin() {
  littleTitle.innerHTML = '¡Has ganado!';
};
function renderTitleLose() {
  littleTitle.innerHTML = '¡Has perdido!';
};

function reset () {
  if (contadorTotal > 10) {
    player.innerHTML = 'Jugador : ' + 0; 
    cpu.innerHTML = 'Computadora : ' + 0; 
    totalRounds.innerHTML = 'Ronda : ' + 0;
    valueOptions.value = "";
    btnPlay.classList.add('hidden');
    resetBtn.classList.remove('hidden');
    if (playerWin > cpuWin){
      littleTitle.innerHTML = '¡Has ganado la partida!';
    } else if (playerWin < cpuWin) {
      littleTitle.innerHTML = '¡Has perdido la partida!';
    } else if (playerWin === cpuWin) {
      littleTitle.innerHTML = '¡Has empatado la partida!';
    }
  }
};

function handleClickReset () {
  btnPlay.classList.remove('hidden');
  resetBtn.classList.add('hidden');
  contadorTotal = 0;
  playerWin = 0;
  cpuWin = 0; 
  littleTitle.innerHTML = 'Vamos a jugar!';
};

function handleClickBtn (event) {
  event.preventDefault();
  randomMove();
  compareMove();
  reset();
};

btnPlay.addEventListener('click', handleClickBtn);
resetBtn.addEventListener('click', handleClickReset);
