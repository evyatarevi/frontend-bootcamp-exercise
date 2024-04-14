// 1
const num1 = 8;
const num2 = 15;
console.log(num1 + num2);

// 2
const a = 30;
const b = 12;
console.log(a - b);

// 3
const x = 7;
const y = 3;
console.log(x * y);

// 4
const dividend = 20;
const divisor = 4;
console.log(dividend / divisor);
console.log(dividend % divisor);

// 5
const number1 = 15;
const number2 = 25;
const number3 = 10;
console.log((number1 + number2 + number3) / 3);

// 6
// The modulo represent the remainder of the dividing.
console.log('The remainder of x/3 is ' + x % 3);

// 7
const inputNum = 50;
if (inputNum % 2 == 0) {
    console.log(`${inputNum} is even.`);
} else {
    console.log(`${inputNum} is odd.`);
}

// 8
const inputNumber = 50;
if (inputNumber % 5 == 0 && inputNumber % 7 == 0) {
    console.log(`${inputNumber} is divisible by 5 and 7.`);
} else {
    console.log(`${inputNumber} is not divisible by 5 and 7.`);
}

// 9
for (let i = 1; i <= 20; i++) {
    if (i % 4 == 0)
        console.log(i);
}

// 10
const inputNumber1 = 15;
if (inputNumber1 > 10 && inputNumber1 < 20)
    console.log(`${inputNumber1} is greater than 10 and less than 20.`);

// 11
const inputNumber2 = -6;
if (inputNumber2 < -5 || inputNumber2 > 10)
    console.log(`${inputNumber2} is less than -5 or greater than 10`);

// 12
const bool2 = false;
console.log(!bool2);

// 13
const inputNumber3 = 25;
if ((inputNumber3 > 5 && inputNumber3 < 10) || (inputNumber3 > 20 && inputNumber3 < 30))
    console.log(`${inputNumber3} between 5 and 10 or between 20 and 30`);