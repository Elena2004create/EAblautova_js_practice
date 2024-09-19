
function add(a, b) {
    return a + b;
}
console.log(`Декларативное объявление: ${add(5, 10)}`); 


const multiply = function(a, b) {
    return a * b;
}
console.log(`Функциональное выражение: ${multiply(45, 789)}`)


const subtract = (a, b) => a - b;
console.log(`Стрелочная функция: ${subtract(67.78, 511)}`)