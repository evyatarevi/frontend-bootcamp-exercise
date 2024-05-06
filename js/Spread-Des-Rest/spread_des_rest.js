// rest
// const [x1, ...rest] = [1, 2, 3, 4, 5, 6]
// rest
// const examFun = (...arr) => { }
// examFun(1, 2, 3);
// spread
// const arr3 = [1, 2, 3];
// const x3 = [...arr3];
// const newPerson = {
//     ...person,
//     job: 'Software Developer'
// };``
// dest
// const [y1, y2, y3] = [1, 2, 3];
// y1
// [y1, y2] = [y2, y1]



// 1
const destinationDetails = {
    name: 'Paris',
    country: 'France',
    rating: 5,
    continent: 'Europe',
};
const { name, country, rating } = destinationDetails;
console.log(name, country, rating);


// 2
let topDestinationsList = ['Paris', 'Tokyo', 'New York', 'London'];
[topDestinationsList[1], topDestinationsList[0]] = [topDestinationsList[0], topDestinationsList[1]];


// 3
const destinationRatings = {
    Paris: 5,
    Tokyo: 4,
};

const ratingUpdates = {
    Paris: 4,
    Tokyo: 5,
};

const updateFunc = (obj, update) => ({ ...obj, ...update });

// 4
const itinerary1 = ['Visit Louvre', 'Eiffel Tower', 'Seine River Cruise'];
const itinerary2 = ['Eiffel Tower', 'Visit Louvre', 'Montmartre'];
const itiCombine = [...itinerary1, itinerary2].filter((item, index, arr) => arr.indexOf(item) === index);


// 5
const travelerInfo = {
    name: 'John',
    accommodations: {
        first: 'Hilton Paris Opera',
        second: 'Mercure Paris Centre Tour Eiffel',
        third: 'Ibis Paris Montmartre',
    }
};
const { first, second } = travelerInfo.accommodations;


// 6
const baseProfile = {
    name: 'Jane',
    nationality: 'American',
};

const preferences = {
    food: 'Vegetarian',
    interests: ['Museums', 'Art'],
};
const mergerTraveler = { ...baseProfile, ...preferences };


// 7
const travelerDetails = {
    name: 'Dave',
    nationality: 'Canadian',
    interests: ['Hiking', 'Photography', 'Food'],
};
const addInterests = (...interests) => travelerDetails.interests = [...travelerDetails.interests, ...interests];


// 8
const travelItinerary = [
    ['Paris', 'Lyon'],
    ['Lyon', 'Nice'],
    ['Nice', 'Paris'],
];
const flatten = arr => arr.reduce((acc, arr) => acc = [...acc, ...arr], []).filter((item, index, arr) => arr.indexOf(item) === index);
// console.log(flatten(travelItinerary));

// 9
const travelers = [
    { name: 'Alice', destinations: ['Berlin', 'Amsterdam'] },
    { name: 'Bob', destinations: ['Tokyo', 'Kyoto'] },
    { name: 'Cara', destinations: ['New York', 'Boston'] },
];
const extractor = travelers => travelers.map(traveler => { const [dest] = traveler.destinations; return dest; });
// console.log(extractor(travelers));


// 10
const itineraries = [
    { name: 'Explore the Alps', difficulty: 7 },
    { name: 'Paris in a Day', difficulty: 4 },
];

const updateDiff = (name, amount) => itineraries.map(itr => (itr.name === name ? { ...itr, difficulty: amount } : itr));
// console.log(updateDiff('Explore the Alps', 50));

// ----- Deep Copy Object (by changing) -----
//     oneC: {
// const obj = {
//     oneA: true,
//     oneB: true,
//         twoA: true,
//         twoB: {
//             threeA: true
//         }
//     }
// }
// const newObj = {...obj, oneC: {...obj.oneC, twoB: {...obj.oneC.twoB}}};
// const assignFalse = obj => {
//     for (const key in obj) {
//         if ((typeof obj[key]) === 'object'){
//             assignFalse(obj[key]);
//         } else {
//             obj[key] = false;
//         }
//     }
// }