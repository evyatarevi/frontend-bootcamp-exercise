// 1
const createTravelPlanner = () => {

    const destinations = [];

    const addDestination = (dest) => {
        destinations.push(dest);
        console.log('The destination add successfully!');
    };

    const removeDestination = (dest) => {
        const destIndex = destinations.indexOf(dest);
        let resultMessage = 'The destination removed successfully!';
        destIndex !== -1 ? destinations.splice(destIndex, 1) : resultMessage = 'The destination not exist';
        console.log(resultMessage);
    };

    const getDestinations = () => [...destinations];

    return {
        addDestination,
        removeDestination,
        getDestinations
    }
}


// 2
const createTravelPlannerWithDetails = (() => {
    const destinations = [];

    return {
        addDestinationWithDetails: (name, details) => {
            destinations.push({ name, details });
            console.log('The destination added successfully!');
        },

        removeDestination: name => {
            const destIndex = destinations.findIndex(item => item.name === name);
            if (destIndex !== -1) {
                destinations.splice(destIndex, 1);
                console.log('The destination removed successfully!');
            } else {
                console.log('The destination not exist.');
            }

        },

        getDestinationsWithDetails: () => [...destinations]
    }
})(); // (()=>{})() -> invoke function immediately.


// 3
const createSortableTravelPlanner = (() => {
    const destinations = [];
    return {
        addDestinationWithDetails: (name, details) => {
            destinations.push({ name, details });
            console.log('The destination added successfully!');
        },
        removeDestination: name => {
            const destIndex = destinations.findIndex(item => item.name === name);
            if (destIndex === -1) {
                console.log('The destination not exist');
                return;
            }
            destinations.splice(destIndex, 1);
            console.log('The destination removed');
        },
        sortDestinations: () => {
            destinations.sort((a, b) => {
                let sort = 0;
                a.name < b.name && (sort = -1);
                a.name > b.name && (sort = 1);
                return sort;
            });
            console.log('The destinations sorted');
        },
        getDestinationsWithDetails: () => [...destinations]
    }
})();


// 4
const createSearchableTravelPlanner = (() => {
    const destinations = [];
    return {
        addDestinationWithDetails: (name, details) => {
            destinations.push({ name, details });
            console.log('The destination added');
        },
        removeDestination: name => {
            const destIndex = destinations.findIndex(item => item.name === name);
            if (destIndex === -1) {
                console.log('The destination not exist');
                return;
            }
            destinations.splice(destIndex, 1);
            console.log('The destination removed');
        },
        sortDestinations: () => {
            destinations.sort((a, b) => {
                let valueToSort = 0;
                a.name < b.name && -1;
                a.name > b.name && 1;
                return valueToSort;
            });
        },
        searchDestination: name => {
            for (const item of destinations) {
                if (item.name === name) {
                    console.log('The destination founded');
                    return { ...item };
                }
                console.log('The destination not founded');
                return null;
            }
        },
        getDestinationsWithDetails: () => [...destinations]
    }
})();






// indexOf vs findIndex
// input: primitive value (usually) vs test function
// return: index (first occurrence) or -1
// findIndex suitable for complex search. With the help of the test function, 
// you can search within the array for complex objects. 
// indexOf using strict equality (===), so it won't work as expected for complex objects.