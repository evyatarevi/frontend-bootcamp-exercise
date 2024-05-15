class Trip {
    #destination;
    #duration;
    #distance;
    #activities;

    constructor(destination, duration, distance) {
        this.#destination = destination;
        this.#duration = duration;
        this.#distance = distance;
        this.#activities = [];
    }

    isNull(variable) {
        if (!variable) {
            throw new Error('Invalid input: null');
        }
        return false;
    }
    get destination() {
        return this.#destination;
    }

    get duration() {
        return this.#duration;
    }

    get distance() {
        return this.#distance;
    }

    get activity() {
        return this.#activities;
    }

    set destination(dest) {
        if (!dest) {
            throw new Error('Invalid destination name');
        }
        this.#destination = dest;
    }

    set duration(dur) {
        if (dur < 0) {
            throw new Error('Invalid duration');
        }
        this.#duration = dur;
    }

    set distance(dist) {
        if (dist < 0) {
            throw new Error('Invalid distance');
        }
        this.#distance = dist;
    }

    addActivity(act) {
        if (!act) {
            throw new Error('Invalid activity');
        }
        this.#activities.push(act);
    }

    #calculateCostTrip() {
        return this.#duration * 10 + this.#distance * 5;
    }

    get costTrip() {
        return this.#calculateCostTrip();
    }

    displayDetails() {
        return `destination: ${this.destination}, duration: ${this.duration}, distance: ${this.distance}, total cost: ${this.costTrip}, activities: ${this.#activities.join()}`;
    }
}

class AdventureTrip extends Trip {
    #difficultlyLevel;
    #gearList;

    constructor( // extends 'activity' properties although I not explicit in the constructor.
        destination,
        duration,
        distance,
        difficultlyLevel,
        gearList) {

        super(destination, duration, distance);

        this.validLevel(difficultlyLevel);
        this.validGearList(gearList);
        this.#difficultlyLevel = difficultlyLevel;
        this.#gearList = gearList;
    }

    validLevel(level) {
        if (level === 'easy' || level === 'moderate' || level === 'hard') {
            return true;
        }
        throw new Error('Invalid level');
    }

    validGearList(gearList) {
        if (!Array.isArray(gearList)) {
            throw new Error('Invalid array');
        }
        for (const item of gearList) {
            if (typeof item !== 'string') {
                throw new Error('Invalid array: the items not a string');
            }
        }
        return true;
    }
    // get difficultlyLevel() {
    //     return this.#difficultlyLevel;
    // }

    get gearList() {
        return this.#gearList;
    }

    set setDifficultlyLevel(level) {
        super.isNull(level);
        this.validLevel(level);
        this.#difficultlyLevel = level;
        return true;
    }

    set setGearList(gearList) {
        super.isNull(gearList);
        this.validGearList(gearList);
        this.#gearList = gearList;
        return this.#gearList;
    }

    displayDetails() {
        return super.displayDetails();
    }
}

const advTrip = new AdventureTrip('Israel', 15, 10, 'hard', ['gear', 'list']);
console.log(advTrip);
console.log(advTrip.difficultlyLevel);
// console.log(advTrip.activity);
// advTrip.addActivity('act');
// console.log(advTrip.activity);
console.log(advTrip.displayDetails());

// console.log(advTrip.destination);
// console.log(advTrip.destination = 'set dest');
// console.log(advTrip.destination);
// console.log(advTrip.getDifficultlyLevel);
// console.log(advTrip.setDifficultlyLevel = '');
// console.log(advTrip.getDifficultlyLevel);
// console.log(advTrip);
// console.log(advTrip);
// console.log(advTrip.displayDetails());
