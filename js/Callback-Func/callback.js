// 1
const processTravelPlans = (arr, func) => {
    if (!Array.isArray(arr)) {
        throw new Error('Expected an array of travel plans');
    }
    for (const obj of arr) {
        if (!('id' in obj) || !('city' in obj) || !('activities' in obj)) {
            throw new Error(`Travel plan with ID ${obj.id} is not in the right structure`);
        }
    }
    const newTravelPlans = JSON.parse(JSON.stringify(arr));
    return newTravelPlans.forEach(element => { func(element) });
}


// 2
const processActivities = (arr, callback) => {
    if (!Array.isArray(arr)) { throw new Error('Expected an array of activities'); }
    arr.forEach(element => {
        if (!('id' in element) || !('name' in element) || !('type' in element) || !('duration' in element)) {
            throw new Error(`Activity with ID ${element.id} is not in the right structure`);
        }
    });
    const newProcessActivities = JSON.parse(JSON.stringify(arr));
    newProcessActivities.forEach(element => callback(element))
}


// 3
const processPlan = (obj, callback) => {
    if (!('id' in obj) || !('city' in obj) || !('activities' in obj)) {
        throw new Error(`Object with ID ${obj.id} is not in the right structure`)
    }
    newTravelPlan = JSON.parse(JSON.stringify(obj));
    return callback(newTravelPlan);
}