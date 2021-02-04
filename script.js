'use strict';

let isNumber = function(n){
   return !isNaN(parseFloat(n)) && isFinite(n);
};

function foo() {
   const a = +prompt('Угадай число от 1 до 100'),
      b = 20;
   console.log(a);
   if( a > 100 && a !== b) {
      alert('Загаданное число меньше');
      foo();
   } else if( a < 1 && a !== b && a !== 0) {
      alert('Загаданное число больше');
      foo();
   }  else if ( 1 <= a <= 100 && a === b) {
      alert('Поздравляю, Вы угадали!!!');
   } else if( a >= 1 && a <= 100 && a !== b) {
      alert('Угадай число от 1 до 100');
      foo();
   }else if( !isNumber(a)) {
      alert('Введи число!');
      
   } else if ( confirm('Введи число!')) {
     
      foo();
      
   } else {
      alert('Игра окончена');
   }
}
foo();

