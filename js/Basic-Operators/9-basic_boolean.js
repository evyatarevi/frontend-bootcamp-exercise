// 1
const isSunny = true;
const isWeekend = false;
console.log(isSunny && isWeekend);

// 2
const age = 20;
const license = true;
console.log(age && license);

// 3
const knowsJS = false;
const knowsPY = true;
console.log(`The person know JS or PY? ${knowsJS || knowsPY}`);

// 4
const isRaining = true;
console.log(!isRaining);

// 5
const likesMusic = true;
const playGuitar = false;
const hasTime = false;
console.log((likesMusic && playGuitar) || (likesMusic && hasTime));

// 6
const personAge = 30;
console.log(personAge > 18);

// 7
const currentTemp = 25;
console.log(currentTemp < 20 || currentTemp > 30);

// 8
const firstNumber = 10;
const secondNumber = '10';
console.log(firstNumber == secondNumber);
console.log(firstNumber === secondNumber);

// 9
const budget = 500;
const expense = 200;
console.log(expense <= budget);

// 10
const person1Height = 160;
const person2Height = 170;
if (person1Height > person2Height) {
    console.log(`person1 is greater than person2`)
} else {
    if (person1Height < person2Height) {
        console.log(`person2 is greater than person1`)
    } else {
        console.log(`person2 is equal than person1`)
    }
}
