const travelTrips = [
    {
        id: 1, traveler: 'John Doe', destination: 'Paris', days: 5,
        cost: 1200
    },
    {
        id: 2, traveler: 'Jane Doe', destination: 'Paris', days: 7,
        cost: 1400
    },
    {
        id: 3, traveler: 'John Doe', destination: 'London', days: 3,
        cost: 900
    }
]
// 1
const groupDestinations = trips => {
    return trips.reduce((groupDestinationObj, trip) => {
        const destExist = groupDestinationObj[trip.destination];
        if (!destExist) {
            groupDestinationObj[trip.destination] = [trip];
        } else {
            destExist.push(trip);
        }
        return groupDestinationObj;
    }, {});
}
console.log(groupDestinations(travelTrips));