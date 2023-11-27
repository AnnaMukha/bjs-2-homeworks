"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  let d = b**2 - 4 * a * c;

  if (d > 0) {
    arr = [(-b + Math.sqrt(d)) / (2 * a), (-b - Math.sqrt(d)) / (2 * a)];
  } else if (d === 0) {
    arr = [-b / (2 * a)];
  } else if (d < 0) {
    arr = [];
  }
  
  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {

  if (isNaN(percent) || percent < 0 || percent > 100) {
    return "Неверное значение процентной ставки";
  }
  if (isNaN(contribution) || contribution < 0) {
    return "Неверное значение первоначального взноса";
  }
  if (isNaN(amount) || amount < 0) {
    return "Неверное значение суммы кредита";
  }
  if (isNaN(countMonths) || countMonths < 0) {
    return "Неверное значение количества месяцев";
  }

  let p = percent / 100 / 12;

  let s = amount - contribution;

  let payment = s * (p + p / (Math.pow(1 + p, countMonths) - 1));

  let totalAmount = payment * countMonths;

  totalAmount = Number(totalAmount.toFixed(2));

  return totalAmount;
  
}
