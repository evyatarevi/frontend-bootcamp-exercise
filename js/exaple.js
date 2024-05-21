// Write a function calculateAverage that takes an array of numbers as an argument and returns the average(mean) of those numbers.
const calculateAverage = arr => {
    let sum = 0;
    for (const num of arr) {
        sum += num;
    }
    return sum / arr.length;
}

const calculateAverage2 = arr => {
    const sum = arr.reduce((acc, curr) => acc += curr, 0);
    return sum / arr.length;
}

console.log(calculateAverage2([1, 2, 3]));
