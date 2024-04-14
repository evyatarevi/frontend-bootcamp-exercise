// 1
const num = 10;
str = 'hello';
const bool = true;

console.log(typeof(bool));
console.log(typeof(num));
console.log(typeof(str));

// 2
const firstVar = 42;
const secondVar = '42';
console.log(typeof(firstVar) == typeof(secondVar));
console.log(firstVar === secondVar); //another option

// 3
let noValue; //I set to let because in const I receive error.
const emptyValue = null;
console.log(typeof(noValue));
console.log(typeof(emptyValue));

// 4
const num2 = 2;
const str2 = "world";
const bool2 = false;

console.log(`The value of num2 is ${num2} and its type is ${typeof(num2)}`);
console.log(`The value of str2 is ${str2} and its type is ${typeof(str2)}`);
console.log(`The value of bool2 is ${bool2} and its type is ${typeof(bool2)}`);