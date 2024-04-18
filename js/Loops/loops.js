// 1. Sum of All Activities' Durations
const activityDurations1 = [2, 3, 1];
let sum = 0;
for (let i = 0; i < activityDurations1.length; i++) {
    sum = sum + activityDurations1[i];
}
console.log(sum);

// 2. Activity with the Longest Duration
const activityDurations2 = [2, 3, 1];
let longestActivity = 0;
for (let i = 0; i < activityDurations2.length; i++) {
    longestActivity < activityDurations2[i] && (longestActivity = activityDurations2[i]);
}
console.log(longestActivity);


// 3. Most Frequent Activity
const activityNames3 = [
    'Sightseeing',
    'Hiking',
    'Sightseeing'
];
let arr;
let counter = 0;
for (let i = 0; i < activityNames3.length; i++) {
    counter++;
    for (let j = i + 1; j < activityNames3.length; j++) {
        activityNames3[i] === activityNames3[j] && counter++;
    }
    !arr ? arr = [activityNames3[i], counter] : arr[1] < counter ? arr = [activityNames3[i], counter] : "";
    counter = 0;
}
console.log(arr[0]);


// 4. Shortest Activity Duration
const activityDurations4 = [2, 3, 1];
let shortedActivity;
for (let activity of activityDurations4) {
    !shortedActivity ? shortedActivity = activity : activity < shortedActivity ? shortedActivity = activity : "";
}
console.log(!shortedActivity ? 'No activity was found' : `The shortest activity is ${shortedActivity}`);


// 5. Count Travel Segments by Transportation Type
const transportationTypes5 = [
    'Car',
    'Train',
    'Car',
    'Flight',
];
transportationTypes5.sort();
transportationTypes5
let counter5 = 1;
for (let i = 0; i < transportationTypes5.length; i++) {
    transportationTypes5[i] === transportationTypes5[i + 1] ? counter5++ : (console.log(`${transportationTypes5[i]} traveled ${counter5} segments.`), counter5 = 1);
}


// 6. Average Travel Expense
const travelExpenses6 = [50, 100, 75, 125, 200];
let sum6 = 0;
for (const Expense of travelExpenses6) {
    sum6 += Expense;
}
console.log(sum6);


// 7. Highest Single Travel Expense
const travelExpenses7 = [50, 100, 75, 125, 200];
travelExpenses7.sort((a, b) => b - a);
console.log(travelExpenses7[0]);


// 8. Expenses Under Budget
const travelExpenses8 = [50, 100, 75, 125, 200];
let counter8 = 0;
for (const expense of travelExpenses8) {
    expense >= 150 && (counter8++);
}
console.log(counter8);


// 9. Calculate Total Expenses for Each Category
const categoryExpenses9 = [
    [100, 200],
    [150, 175],
    [120, 250],
];
let sum9 = 0;
for (const expense of categoryExpenses9) {
    for (const innerExpense of expense) {
        sum9 += innerExpense;
    }
    console.log(sum9);
    sum9 = 0;
}

// 10. Shortest Route in Each Travel Plan
const routeDistances10 = [
    [120, 300],
    [150, 175],
    [100, 250],
];
let shorterRoute;

if (routeDistances10[0]) { //if exist items in routeDistances10
    for (const plan of routeDistances10) {
        for (const route of plan) {
            !shorterRoute && (shorterRoute = route);
            shorterRoute && (route < shorterRoute && (shorterRoute = route));
        }
        console.log(shorterRoute);
        shorterRoute = '';
    }
};

// 11. Average Duration per Activity Type
const activityDurationsMatrix11 = [
    [2, 3],
    [1, 4],
    [3, 2],
];
// const arr9 = [1,2,3,4,5,6]
// for (const x of arr9){
//     if(x === 4) continue;
//     console.log(x);
// }

// 12. Find the Destination with the Highest Rating in Each Category
const destinationRatingMatrix12 = [
    [4.5, 4.7],
    [4.8, 4.6],
    [4.9, 5.0],
];

// 13. Count Highly Recommended Destinations in Each Region
const regionRecommendationMatrix13 = [
    [5, 7],
    [8, 6],
    [9, 7],
];

// 14. Sum of Ratings for Must-Visit Destinations by Region
const mustVisitRatingMatrix14 = [
    [4.5, 4.7],
    [4.9, 5.0],
    [4.8, 4.9],
];

