// 1
const destination = {
    name: 'Jerusalem',
    country: 'Israel',
    yearVisited: 2024,
    activities: ['pray', 'surf'],
    rating: [10, 9, 8, 10],
    getAverageRating() {
        let sum = 0;
        for (const rat of this.rating) {
            sum += rat;
        }
        return sum / this.rating.length;
    }
}
console.log(destination.getAverageRating());


// 2
const landmarks = [{ name: 'l1', description: 'bla bla' }, { name: 'l2', description: 'bla bla' }, { name: 'l3', description: 'bla bla' }]
const destination2 = { ...destination, landmarks };
console.log(destination2.activities[1]);
console.log(destination2['activities'][1]);
console.log(destination2.landmarks[1].name);
console.log(destination2['landmarks'][1]['name']);


// 3
destination2.yearVisited = 2023;
destination2.rating.push(10);
delete destination2.country;
destination2.landmarks[0].description = 'bloooooo';
destination2['landmarks'][0]['description'] = 'bloooooo';
destination2.checkIfPropertyExist = function (prop) {
    return prop in this;
}
const propertyToCheck = 'rating';
console.log(destination2.checkIfPropertyExist(propertyToCheck) ? `The property ${propertyToCheck} exist` : `The property ${propertyToCheck} not exist`);


// 4
const destinations4 = [
    { name: 'Eiffel Tower', details: { visitorsPerYear: 7000000, entryFee: '25 USD' } },
    { name: 'Great Wall of China', details: { visitorsPerYear: 10000000, entryFee: '60 CNY' } },
];
destinations4.getVisitersByIndex = function (index) {
    return this[index].details.visitorsPerYear;
}
destinations4.getAllVisitorsAverage = function () {
    let sum = 0;
    for (let i = 0; i < destinations4.length; i++) {
        sum += this.getVisitersByIndex(i);
    }
    return sum / destinations4.length;
}

console.log(destinations4.getVisitersByIndex(0));
console.log(destinations4.getAllVisitorsAverage());

// 5
const newObj = { ...destination, ...destination2 };
const newObj2 = { ...newObj };
Object.freeze(newObj);
Object.seal(newObj2);

const isFrozen = obj => Object.isFrozen(obj);
const isSealed = obj => Object.isSealed(obj);

console.log(isFrozen(newObj));
console.log(isSealed(newObj2));



// 6
const destinationDetails = {
    name: 'Machu Picchu',
    country: 'Peru',
    yearVisited: 2019,
    ratings: [9, 8.5, 9, 9.5],
};
const keys = Object.keys(destinationDetails);
for (key of keys) {
    console.log(`${key} = ${destinationDetails[key]}`);
}


// 7
const destinationRatings = {
    'Machu Picchu': 9,
    'Great Wall of China': 8.5,
    'Eiffel Tower': 7.5,
    Colosseum: 6.5,
};
const destinationRatingsArr = Object.entries(destinationRatings);
for (item of destinationRatingsArr) {
    item[1] < 7 && destinationRatings[item[0]]++;
}


// 8
const destinations8 = {
    1: { name: 'Machu Picchu', yearVisited: 2019, rating: 9 },
    2: { name: 'Stonehenge', yearVisited: 2010, rating: 8.5 },
    3: { name: 'Great Wall of China', yearVisited: 2018, rating: 8.6 },
};
const newerDestination = (destination) => {
    return destination[1].yearVisited > 2015;
}

const destinations8Arr = Object.entries(destinations8);
console.log(destinations8Arr);
const filterArray8 = [];

for (let i = 0; i < destinations8Arr.length; i++) {
    if (newerDestination(destinations8Arr[i])) {
        destinations8Arr[i][1].isNewer = true;
        filterArray8.push(destinations8Arr[i]);
    }
}
console.log(filterArray8);


// 9
const activityRatings = {
    hiking: [9, 8, 10, 7, 8.5],
    sightseeing: [8.5, 8, 9, 9.5, 7.5],
    snorkeling: [7, 7.5, 8, 8.5, 9],
};
const activityRatingsKeys = Object.keys(activityRatings);

activityRatings.getAverageRatingByProperty = function (property) {
    let sum = 0;
    for (rat of this[property]) {
        sum += rat;
    }
    return sum / this[property].length;
}
console.log("Summary averagel rating: ");
for (key of activityRatingsKeys) {
    console.log(`${key} : ${activityRatings.getAverageRatingByProperty(key)}`);

}


// 10
const destinationAwards = {
    'Machu Picchu': 'Most Visited',
    'Great Wall of China': 'Most Visited',
    'Eiffel Tower': 'Most Photographed',
    Colosseum: 'Most Iconic',
};

const orderByAwards = (destinationAwards) => {
    const destinationAwardsEntries = Object.entries(destinationAwards);
    const newDestinationAwards = {};
    console.log(destinationAwardsEntries);
    for (destinationAward of destinationAwardsEntries) {
        if (newDestinationAwards[destinationAward[1]]) {
            newDestinationAwards[destinationAward[1]].push(destinationAward[0]);
        } else {
            newDestinationAwards[destinationAward[1]] = [destinationAward[0]]
        }
    }
    return newDestinationAwards;
}
console.log(orderByAwards(destinationAwards));

// const [one] = [1];
// const {model} = {model: tesla}
// const cloneCar = ...car;  //car is object.
// const cloneCar = {...car, age: 2024};

// const myName = {name};  // insert name = 'Evyatar';

//const name = 'John';
// const person {name}; => person = { name: John}

// const obj = { myFunc() {} } => { myFunc: function(){}}

// const {name, age = 30} = { name: 'Evyatar, age = 20} => age = 20. if age not exist, age = 30;

// const {name: newName} = {name:'Evyatar'} => newName = 'Evyatar'

// const {name : {firstName}} => name = {name : { firstName: 'Evyatar}}. name = 'Evyatar';