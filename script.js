'use strict';

let numberTwoRun = function () {
      return (Math.round(Math.random() * (100 - 1 + 1)) + 1);
   },
   numberTwo = numberTwoRun(),
   count = 10;

const isNumber = function(n){
      return !isNaN(parseFloat(n)) && isFinite(n);
   },
   gameOver = function() {
      alert('Игра окончена');
   },
   replay = function(msg) {
      let replayGame = confirm(msg);

      if(replayGame) {
         count = 10;
         numberRun();
      } else {
         gameOver();
         return;
      }
   },
   numberRun = function() {

   const numberOne = prompt('Угадай число от 1 до 100', '3');

   if ( count >= 0  ) { 

      if ( numberOne === null) {
         gameOver();
      } else if( !isNumber(numberOne)) {
         alert('Введи число');
         numberRun();
      } else if ( +numberOne < numberTwo ) {
         --count;
         alert(`Загаданное число больше, осталось попыток ${count}`);

         if (count === 0) {
            replay('Попытки закончились, хотите сыграть еще?');
         } else {
            numberRun();
         }

      } else if ( +numberOne > numberTwo ) {
         --count;
         alert(`Загаданное число меньше, осталось попыток ${count}`);
         
         if (count === 0) {
            replay('Попытки закончились, хотите сыграть еще?');
         } else {
            numberRun();
         }

      } else if ( +numberOne === numberTwo) {
         numberTwo = numberTwoRun();
         replay('Поздравляю, Вы угадали!!! Хотели бы сыграть еще?');
         
      } else {
         numberTwo = numberTwoRun();
         replay('Попытки закончились, хотите сыграть еще?');
      }
   }

   
};
numberRun();

