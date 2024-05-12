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

    get destination() {
        return this.#destination;
    }

    get duration() {
        return this.#duration;
    }

    get distance() {
        return this.#distance;
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

class adventureTrip extends Trip {
    #difficultlyLevel;
    #gearList;

    constructor(destination, duration, distance, activities, difficultlyLevel, gearList) {
        super(destination, duration, distance, activities);
        this.#difficultlyLevel = difficultlyLevel;
        this.#gearList = gearList;
    }
}