'use strict';

/**
 * @param {number} fatherAge - возраст отца
 * @param {number} sonAge - возраст сына
 * @returns {number} сколько лет до/после момента, когда отец вдвое старше
 */
function twofoldOlder(fatherAge, sonAge) {

  if (fatherAge < 0 || sonAge < 0) return 0;

  if (fatherAge - sonAge < 15) return 0;

  return fatherAge - 2 * sonAge;
}

/**
* 
* @param {number} result - положительное значение, через сколько будет старше вдвое
*                          отрицательное, когда был старше вдвое
* @returns {string} - правильное слово
*/

function yearWord(result) {

  const n = Math.abs(result);

  if (n % 10 === 1 && n % 100 !== 11) return "год";

  if (n % 10 >= 2 && n % 10 <= 4 && !(n % 100 >= 12 && n % 100 <= 14)) return "года";

  return "лет";

}

const result = twofoldOlder(30, 15);

switch (true) {
  case result < 0:
    console.log(`Отец был старше вдвое ${-result} ${yearWord(result)} назад`);
    break;

  case result > 0:
    console.log(`Отец будет старше вдвое через ${result} ${yearWord(result)}`);
    break;

  case result === 0:
    console.log(`Отец старше вдвое сейчас`);
    break;

  default:
    console.log('Некорректные данные');
}