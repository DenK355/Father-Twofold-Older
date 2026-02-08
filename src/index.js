/**
 * 
 * @param {number} ageFather - возраст отца
 * @param {number} ageSon - возраст сына
 * 
 */

 function fatherTwofoldOlder(ageFather, ageSon) {
  if(ageFather >= 15 && ageSon >= 0 && ageFather - ageSon >= 15){

      let result = ageFather - ageSon * 2;


      /**
       * 
       * @param {number} result - положительное значение, через сколько будет старше вдвое
       *                          отрицательное, когда был старше вдвое
       * @returns {string} - правильное слово
       */

      function yearWord(result){

          if (result % 10 === 1 && result % 100 !== 11) {

              return "год";

          } else if (result % 10 >= 2 && 
                     result % 10 <= 4 && 
                     !(result % 100 >= 12 && 
                     result % 100 <= 14)) {

              return "года";

          } else{

              return "лет";

          }
          
          
      }

      if(result >= 0) {
          console.log(`Отец будет старше вдвое через ${result} ${yearWord()}`)
      }else {
          console.log(`Отец был старше вдвое ${result * -1} ${yearWord()} назад`)
      }

  }else {
      console.log('Вы ввели некоректный возраст!');
  }
}

fatherTwofoldOlder(60, 40);
fatherTwofoldOlder(15, 0);
fatherTwofoldOlder(20, 3);
fatherTwofoldOlder(55, 25);
fatherTwofoldOlder(90, 60);