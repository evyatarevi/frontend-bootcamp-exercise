// 1
const currentDate = new Date();
console.log(currentDate);

// 2
console.log(currentDate.getFullYear());

// 3
console.log(currentDate.getMonth());

// 4
console.log(currentDate.getDate());

// 5
console.log(currentDate.getDay());

// 6
const currentHours = currentDate.getHours();
const currentMinuets = currentDate.getMinutes();
const currentSecond = currentDate.getSeconds();
console.log(`Hours: ${currentHours}, Minuets: ${currentMinuets}, Seconds: ${currentSecond}`);

// 7
const inputMonth = 1;
const currentDaysInMonth = new Date(2024, inputMonth, 0).getDate();
console.log(currentDaysInMonth);

// 8
const currentY = currentDate.getFullYear();
const currentM = currentDate.getMonth();
let tomorrowDay = currentDate.getDate() + 1;
console.log(new Date(currentY, currentM, tomorrowDay));


