// 1
const travelItinerary = ['paris', 'tokyo', 'new-york'];
const destinationToCheck = 'tokyo';
const message = travelItinerary.indexOf(destinationToCheck) !== -1 ? 'Distention founded' : "Distention didn't fined";
console.log(message);

// 2
const travelDates = ['2023-07-01', '2023-07-15', '2023-08-01'];
const newTravelDates = travelDates.reverse();
console.log(newTravelDates);

// 3
const travelActivities = ['sightseeing', 'hiking', 'dining'];
console.log(travelActivities.join(', '));

// 4
const plannedActivities = ['sightseeing', 'hiking', 'dining'];
const activityToCheck = 'hiking';
const message2 = plannedActivities.indexOf(activityToCheck) !== -1 ? 'activity founded' : "activity didn't fined";
console.log(message2);

// 5
const distentionsList = ['paris', 'tokyo', 'new-york'];
const specificDestination = 'new-york';
const indexDestination = distentionsList.indexOf(specificDestination)
const message3 = indexDestination !== -1 ? `${specificDestination} found at index ${indexDestination}` : `Destination not found`;
console.log(message3);

// 6
const upcomingTrip = ['Greece', 'Iceland', 'Japan'];
upcomingTrip.pop();
console.log(upcomingTrip);

// 7
const bucketListDestination = ['machu picchu', 'great wall of china'];
const newDestination = 'aurora australis in antarctica';
bucketListDestination.unshift(newDestination);
console.log(bucketListDestination);

// 8
const europeanCapitals = ['Paris', 'Berlin', 'Madrid'];
const destinationRemoved = europeanCapitals.shift();
console.log(destinationRemoved);

// 9
const beachDestinations = ['Maldives', 'Bora Bora'];
const cityDestination = ['New York', 'Tokyo'];
const allArrays = beachDestinations.concat(cityDestination);
console.log(allArrays);

// 10
const destinationsList = ['paris', 'tokyo', 'new-york'];
console.log(destinationsList.sort());

// 11
const packingLustString = 'Passport, Sunscreen, Camera';
const splitArray = packingLustString.split(', ');
console.log(splitArray);

// 12
const tripItinerary = ['Visit Louvre', 'Eiffel Tower', 'Seine River Cruise'];
const number = 2;
const tripItineraryActivity = tripItinerary.slice(0, 2);

// 13. Empty the Wishlist
const travelWishlist13 = [
    'Northern Lights in Norway',
    'Safari in Kenya',
    'Great Barrier Reef',
];
travelWishlist13.splice(0);

// 14. Add a New Destination
const destinations14 = ['Paris', 'Tokyo'];
const newDestination14 = 'New York City';
destinations14.push(newDestination14);

// 15. Remove the Last Destination
const destinations15 = [
    'Paris',
    'Tokyo',
    'New York City',
];
destinations15.pop();
console.log(destinations15);

// 16. Create a String of Destinations
const destinations16 = [
    'Paris',
    'Tokyo',
    'New York City',
];
console.log(destinations16.join());

// 17. Find Index of a Specific Destination
const destinations17 = [
    'Paris',
    'Tokyo',
    'New York City',
];
const destinationToFind17 = 'Tokyo';
console.log(destinations17.indexOf(destinationToFind17));

// 18. Sort Destinations Alphabetically
const destinations18 = [
    'Paris',
    'Tokyo',
    'New York City',
];
console.log(destinations18.sort());

// 19. Sort Distances Numerically
const distances19 = [500, 150, 300, 200];
console.log(distances19.sort((a, b) => b - a));

