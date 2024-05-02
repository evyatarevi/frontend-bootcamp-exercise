// let travelData = {
//     destinations: ["Paris", "London", "New York", "Tokyo", "Sydney"],
//     flights: [
//         { flightNumber: "AA123", destination: "New York", duration: "8h 15m" },
//         { flightNumber: "BA456", destination: "London", duration: "7h 30m" },
//         { flightNumber: "AF789", destination: "Paris", duration: "9h 20m" },
//         { flightNumber: "JL012", destination: "Tokyo", duration: "13h 45m" },
//         { flightNumber: "QF345", destination: "Sydney", duration: "22h 35m" },
//     ],
// };

// 1
const travelDest = ["New York", "London", "Paris"];
const retrieveDest = (travelDest) => {
    return travelDest.map(dest => dest);
}


// 2
const flights = [{ destination: "New York" }, { destination: "London" }, { destination: "Paris" }];
const filterFlights = (flightsArr, targetFlight) => {
    return flightsArr.filter(flight => flight.destination === targetFlight);
}


// 3
const durationFlights = [{ duration: "3h 30m" }, { duration: "2h 45m" }, { duration: "1h 15m" }];
const getFlightDurationInSeconds = duration => {
    const [hours, minutes] = duration.split("h ");
    return parseInt(hours) * 3600 + parseInt(minutes) * 60;
};
const totalDuration = (durationFlights) => {
    return durationFlights.reduce((acc, flight) => acc + getFlightDurationInSeconds(flight.duration), 0)
}


// 4
const flights4 = [{ flightNumber: "FL001", destination: "New York" }, { flightNumber: "FL002", destination: "London" }];
const flightsCombination = flights => {
    return flights.map(flight => {
        const { flightNumber, destination } = flight;
        return `${flightNumber} - ${destination}`;
    });
}
// console.log(flightsCombination(flights4));


// 5
const flights5 = [{ flightNumber: "FL001", duration: "3h 30m" }, { flightNumber: "FL002", duration: "2h 45m" }];
const updateDurationFlight = (flights, newDuration, flightNumber) => {
    flights.forEach(flight => {
        flight.flightNumber === flightNumber && (flight.duration = newDuration);
    });
    return flights;
}
// console.log(updateDurationFlight(flights5, "1h", "FL001"));


// 6
const flights6 = [{ duration: "3h 30m" }, { duration: "2h 45m" }, { duration: "1h 15m" }];
const getFlightDurationInMin = duration => {
    const [hours, minutes] = duration.split("h ");
    return parseInt(hours) * 60 + parseInt(minutes);
};
const minDuration = (flights, minDuration) => {
    return flights.filter(flight => getFlightDurationInMin(flight.duration) >= minDuration);
}
console.log(minDuration(flights6, 160));


// 7
const flights7 = [{ flightNumber: "FL001" }, { flightNumber: "FL002" }, { flightNumber: "FL003" }];
const getFlightNumbers = (flights) => {
    return flights.map(flight => {
        const { flightNumber } = flight;
        return flightNumber;
    });
}
console.log(getFlightNumbers(flights7));


// 8
const flights8 = [{ duration: "3h 30m" }, { duration: "2h 45m" }, { duration: "1h 15m" }];
const sortFlights = flights => {
    return flights.map(flight => ({ ...flight }))  //deep copy
        .sort((a, b) => {
            const { duration: durationA } = a;
            const { duration: durationB } = b;
            return getFlightDurationInMin(durationA) - getFlightDurationInMin(durationB);
        });
}
console.log(sortFlights(flights8));
console.log(flights8);


// 9
const flights9 = [{ destination: "New York" }, { destination: "London" }, { destination: "Paris" }];
const getAllDestination = flights => flights.map(flight => {
    const { destination } = flight;
    return destination;
})
console.log(getAllDestination(flights9));