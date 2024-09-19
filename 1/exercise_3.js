
let num1 = 23;
let num2 = 5;
let num3 = 189;

let max;

if (num1 > num2 && num1 > num3) {
    max = num1;
} else if (num2 > num1 && num2 > num3) {
    max = num2;
} else {
    max = num3;
}

console.log(`Наибольшее число: ${max}`);