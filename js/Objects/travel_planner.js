const travelPlanner = {
    locations: [],

    getIndexLocationName(locationName) {
        return this.locations.findIndex((location) => {
            return location.name === locationName;
        });
    },

    addLocation(locationName, locationDetails) {
        if (this.getIndexLocationName(locationName) !== -1) {
            return 'Error: location already exist';
        }
        const newLocation = { name: locationName, ...locationDetails };
        this.locations.push(newLocation);
        return 'Location added successfully';
    },

    deleteLocation(locationName) {
        const locationIndex = this.getIndexLocationName(locationName);
        if (locationIndex === -1) {
            return 'Error: location not exist';
        }
        this.locations.splice(locationIndex, 1);
        return 'The location deleted successfully';
    },
    findLocation(locationName) {
        const indexLocation = this.getIndexLocationName(locationName);
        if (indexLocation === -1) {
            return null;
        }
        return this.locations[indexLocation];
    },
    sortLocations() {
        this.locations.sort((a, b) => {
            const name1 = a.name.toLowerCase();
            const name2 = b.name.toLowerCase();
            if (name1 < name2) {
                return -1;
            }
            if (name1 > name2) {
                return 1;
            }
            return 0;
        });
        return 'The locations sorted successfully';
    },
    editLocation(locationName, updateDetails) {
        const locationIndex = this.getIndexLocationName(locationName);
        if (locationIndex === -1) {
            return 'Error: location not found';
        }
        this.locations[locationIndex] = { ...this.locations[locationIndex], ...updateDetails }; //This allow to user send in object only the properties to update 
        return 'The location updated successfully';
    },
    showAll() {
        this.locations.forEach(location => {
            const { name, ...details } = location;
            console.log(`Location name: ${name}`);
            console.log('Details:');
            for (detail in details) {
                console.log(`${detail}: ${details[detail]}`);
            }
        });
    },
    filterLocation(description) {
        return this.locations.filter(location => location.description.includes(description));
    },
    rateLocation(locationName, rating) {
        if (rating < 1 || rating > 5 || typeof rating !== 'number' || !rating) {
            return 'Invalid rating input';
        }
        const indexLocation = this.getIndexLocationName(locationName);
        if (indexLocation === -1) { return 'Invalid location name'; }
        this.locations[indexLocation].rating.push(rating);
        return 'Added rating successfully';
    },
    getAverageRating(locationName) {
        const location = this.findLocation(locationName);
        if (!location) { return 'Invalid location name'; }
        const sumRating = location.rating.reduce((sum, rat) => {
            return sum += rat;
        }, 0);
        return sumRating / location.rating.length;
    },
    getTopRatedLocation() {
        const allAverages = this.locations.map(location => this.getAverageRating(location.name));
        allAverages
        const highestAverageRating = Math.max(...allAverages);
        highestAverageRating
        return { highestRatingLocation: this.locations.filter(location => this.getAverageRating(location.name) === highestAverageRating)[0], highestAverageRating: highestAverageRating };
    }



}


// OUTPUT
// console.log(travelPlanner.addLocation('Qiryat Gat', { description: 'wow', bestTimeToVisit: 8, localCuisine: true, rating: [1, 4, 1, 2] }));
// console.log(travelPlanner.addLocation('biryat', { description: 'wow', bestTimeToVisit: 3, localCuisine: true, rating: [2, 1, 1, 2, 3, 4] }));
// console.log(travelPlanner.addLocation('airyat', { description: 'dodo', bestTimeToVisit: 5, localCuisine: true, rating: [1, 2, 2, 1, 2, 1, 3, 3, 3, 5] }));
// console.log(travelPlanner.addLocation('Qiryat', { description: 'wow', bestTimeToVisit: 8, localCuisine: true }));
// console.log(travelPlanner);
// console.log(travelPlanner.deleteLocation('Qiryat'));
// console.log(travelPlanner);
// console.log(travelPlanner.findLocation('Qiryat'));
// console.log(travelPlanner.locations);
// travelPlanner.sortLocations();
// console.log(travelPlanner.locations);
// travelPlanner.editLocation('Qiryat', {description: 'This is updated'});
// console.log(travelPlanner.locations);
// travelPlanner.showAll()
// console.log(travelPlanner.filterLocation('d'));
// console.log(travelPlanner.rateLocation('biryat', 50));
// console.log(travelPlanner.rateLocation('biryat', 0));
// console.log(travelPlanner.rateLocation('biryat'));
// console.log(travelPlanner.rateLocation('biryat', 'gh'));
// console.log(travelPlanner.rateLocation('biryat', 5));
// travelPlanner.locations.forEach(location => {
//     console.log(location.rating);
// })
// console.log(travelPlanner.getAverageRating('Qiryat Gat'));
// console.log(travelPlanner.getTopRatedLocation())