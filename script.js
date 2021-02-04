'use strict';

const isNumber = function(n){
   return !isNaN(parseFloat(n)) && isFinite(n);
},
min = 1,
max = 100,
numberTwoRun = function () {
   return (Math.round(Math.random() * (max - min + 1)) + min);
},
numberTwo = numberTwoRun();

function numberRun() {
   const numberOne = prompt('Угадай число от 1 до 100');

   if ( numberOne === null) {
      alert('Игра окончена');
   } else if( !isNumber(numberOne)) {
      alert('Введи число!');
      numberRun();
   } else if ( +numberOne < numberTwo) {
      alert('Загаданное число больше');
      numberRun();
   } else if ( +numberOne > numberTwo) {
      alert('Загаданное число меньше');
      numberRun();
   } else if ( +numberOne === numberTwo) {
      alert('Поздравляю, Вы угадали!!!');
      
   }
}
numberRun();