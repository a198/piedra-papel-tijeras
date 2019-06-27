/*const playerInput =document.querySelector("#player-input");
const winner=document.querySelector(".winner");

function guardarNombre(){
  const options = ["piedra","papel","tijeras"];
  let computerSelection =Math.floor(Math.random()*2.99);
  computerSelection=options[computerSelection];

const playerSelection=playerInput.value;

console.log("jugador1: " ,nombre1,playerSelection);


  if(player1Selection===playerSelection2){
    winner.innerText="Empate";
  }else if(playerSelection==="papel"&&computerSelection==="piedra"){
    winner.innerText="Ganó el jugador"
  }
}*/

//guardar nombres
const playerInput=document.querySelector("#player-input");
const player2Input=document.querySelector("#player2-input");
const player1Name=document.querySelector(".g1");
const player2Name=document.querySelector(".g2");
//Formulario (botones de juego)
const botones1=document.querySelector(".botones1");
const botones2=document.querySelector(".botones2");
const ganador=document.querySelector(".Ganador");


let tiros = [];
let jugador1;
let jugador2;
//Botones de jugar
function tiroJugador1() {
  const tiro1 = botones1.player1Input.value;
  tiros[0] = tiro1;
  if(tiros.length == 2) {
    comparar();
  }
}
function tiroJugador2() {
  const tiro2 = botones2.player2Input.value;
  tiros[1] = tiro2;
  if(tiros.length == 2) {
    comparar();
  }
}

function comparar() {
  console.log(tiros[0], tiros[1])
  if(tiros[0] == 'papel' && tiros[1] == 'tijera') {

    escribirGanador('Ganó ' + jugador2);
  }else if(tiros[0]=="papel"&& tiros[1]=='piedra'){
    escribirGanador('Ganó ' + jugador1);
  }else if(tiros[0]=="piedra"&& tiros[1]=='tijera'){
    escribirGanador('Ganó ' + jugador1);
  }else if(tiros[0]=="piedra"&& tiros[1]=='papel'){
    escribirGanador('Ganó ' + jugador2);
  }else if(tiros[0]=="tijera"&& tiros[1]=='piedra'){
    escribirGanador('Ganó ' + jugador2);
  }else if(tiros[0]=="tijera"&& tiros[1]=='papel'){
    escribirGanador('Ganó ' + jugador1, 'Lick, lick, lick my balls!');

  }else if(tiros[0]==tiros[1]){
    console.log('Empate');
  }
}

function escribirGanador(triunfador, mensaje) {
  ganador.innerHTML = triunfador + '</br>' + mensaje; //</br> salto de linea con innerHTML para poner la etiqueta

}


function guardarNombre(){
  jugador1=playerInput.value;
  player1Name.innerText =  jugador1;
}

function guardarNombre2(){
  jugador2=player2Input.value;
  player2Name.innerText = jugador2;
}
