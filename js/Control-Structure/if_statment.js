// 1
const travelBudget = 2000;
console.log(travelBudget > 1000 ? 'Luxury travel options available' : 'Looking for budget travel');

// 2
const destinationTemp = 27;
console.log(destinationTemp > 15 && destinationTemp < 27 ? 'Ideal weather for the trip' : 'Consider another destination or time');

// 3
const flightBooked = true;
const hotelBooked = false;
console.log(flightBooked ? hotelBooked ? 'Your travel plan is set' : 'You need to book a hotel' : 'You need to book a flight');

// 4
const chosenPackagePrice = 5;
const alternativePackagePrice = 6;
console.log(chosenPackagePrice > alternativePackagePrice ? 'Consider switching for a better price' : "You've chosen the best priced package");

// 5
const travelAge = 30;
const logMessage = travelAge >= 65 ? 'Eligible for senior citizen discounts' : travelAge <= 18 ? 'Eligible for student discount' : 'Regular pricing applies';
console.log(logMessage);

// 6
const satisfactionScore = 80;
console.log(satisfactionScore >= 80 ? 'Highly satisfied' : 'Needs improvement');

// 7
const groupSize = 6;
console.log(groupSize % 2 === 0 ? 'Even number of travelers' : 'Odd number of travelers');

// 8
const travelerAge = 20;
const classifyAge = travelAge < 12 ? 'Child' : travelAge >= 13 && travelAge <= 19 ? 'Teen' : 'Adult';

// 9
const experienceLevel = 5;
console.log(experienceLevel > 5 ? 'Experienced traveler' : 'New traveler');

// 10
const tripDuration = 5;
const tripCategory = tripDuration < 3 ? 'Weekend getaway' : tripDuration >= 3 && tripDuration <= 14 ? 'Standard vacation' : 'Extended';

// 11
const travelerAge2 = 5;
const activityAgeRequirement = 18;
console.log(travelerAge2 >= activityAgeRequirement ? 'Can participate' : "Can't participate");

// 12
const dayOfTravel = 'Sunday';
console.log(dayOfTravel === 'Sunday' || dayOfTravel === 'Saturday' ? 'Special weekend offer available' : 'Regular pricing');

// 13
const destinationOpeningYear = 2024;
console.log(destinationOpeningYear >= 2001 && destinationOpeningYear <= 2100 ? '21st century destination' : '20th century destination');

// 14
const destinationType = 'Adventure';
const destinationRating = 5;
console.log(destinationType === 'Adventure' && destinationRating >= 8 ? 'Must visit' : 'Check reviews');

// 15
const packagePrice = 50;
console.log(packagePrice <= 1000 ? 'Discounted' : 'Regular package price');

// 16
const travelerAge3 = 28;
const isAdultActivity = true;
console.log(!isAdultActivity || travelAge >= 18 ? 'allowed to participate' : 'Age-restricted activity');

// 17
const destinationName = 'Famous Israel';
console.log(destinationName.search('famous') > -1 || destinationName.search('top destination') > -1 ? 'This is destination is a hot spot' : 'This is destination is not a hot spot');