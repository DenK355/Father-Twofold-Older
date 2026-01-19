'use strict'

/**
 * Вычисляет, через сколько лет (или сколько лет назад)
 * отец будет (или был) вдвое старше сына.
 *
 * @param {number} fatherAge - текущий возраст отца
 * @param {number} sonAge - текущий возраст сына
 * @returns {number} Количество лет:
 * положительное — в будущем,
 * отрицательное — в прошлом,
 * 0 — сейчас,
 * -1 — при некорректных данных
 */
 function fatherTwofoldOlder(fatherAge, sonAge) {
    // Проверка на отрицательные возраста
    if (fatherAge < 0 || sonAge < 0) return -1;
  
    // Проверка разницы возрастов
    if (fatherAge - sonAge < 15) return -1;
  
    const years = fatherAge - 2 * sonAge;
  
    // Проверка, что в момент события возраст сына не отрицательный
    if (sonAge + years < 0) return -1;
  
    //Повышенная сложность
    const absYears = Math.abs(years);
    const yearWord = getYearWord(absYears);
  
    if (years > 0) {
      console.log(`Отец будет вдвое старше сына через ${absYears} ${yearWord}`);
    } else if (years < 0) {
      console.log(`Отец был вдвое старше сына ${absYears} ${yearWord} назад`);
    } else {
      console.log(`Отец сейчас вдвое старше сына`);
    }
  
    return years;
  }
  
  /**
   * Возвращает правильное склонение слова "год"
   *
   * @param {number} n
   * @returns {string}
   */
  function getYearWord(n) {
    if (n % 10 === 1 && n % 100 !== 11) return 'год';
    if ([2, 3, 4].includes(n % 10) && ![12, 13, 14].includes(n % 100)) {
      return 'года';
    }
    return 'лет';
  }

  fatherTwofoldOlder(20, 5);