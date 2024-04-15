// 1
const dayOfWeek = 5;
switch (dayOfWeek) {
    case 1:
        console.log('Restaurant');
        break;
    case 2:
        console.log('Ice Skating');
        break;
    case 3:
        console.log('Jeep Tour');
        break;
    case 4:
        console.log('swimming');
        break;
    case 5:
        console.log('Skydiving');
        break;
    case 6:
        console.log('walk');
        break;
    default:
        console.log('rest');
        break;
}


// 2
const themeColor = 'dark';
let currentTheme = 'light';
switch (themeColor) {
    case 'light':
        currentTheme = 'light';
        break;
    case 'dark':
        currentTheme = 'dark';
        break;
    case 'sea':
        currentTheme = 'sea';
        break;
    default:
        console.log('unsupported');
}

// 3
const notificationStatus = 'new';
switch (notificationStatus) {
    case 'new':
        console.log('You have new travel notification');
        break;
    case 'unread':
        console.log('You have new travel notification');
        break;
    case 'unopened':
        console.log('You have new travel notification');
        break;
    default:
        console.log('read');
}

// 4
const packageRating = 'Basic';
switch (packageRating) {
    case 'Basic':
        console.log('Basic travel');
        break;
    case 'Standard':
        console.log('Standard travel');
        break;
    case 'Premium':
        console.log('Premium travel');
        break;
    case 'Luxury':
        console.log('Luxury travel');
        break;
    default:
        console.log('No match found');
}

// 5
const mealPlan = 'Lunch';
switch (mealPlan) {
    case 'Breakfast':
        console.log('Breakfast');
    case 'Lunch':
        console.log('Lunch');
    case 'Dinner':
        console.log('Dinner');
}

// 6
const satisfactionScore = 90;
switch (true) {
    case satisfactionScore >= 90:
        console.log('Highly Satisfied');
        break;
    case satisfactionScore >= 70 && satisfactionScore < 90:
        console.log('Satisfied');
        break;
    case satisfactionScore < 70:
        console.log('Neutral');
        break;
    default:
        console.log('Dissatisfied');
}

// 7
const travelMonth = 1;
switch (travelMonth) {
    case 1:
        console.log('Jerusalem');
        break;
    case 2:
        console.log('Ashkelon');
        break;
    case 3:
        console.log('Ashdod');
        break;
    case 4:
        console.log('Tel-Aviv');
        break;
    case 5:
        console.log('Heifa');
        break;
    case 6:
        console.log('Shomron');
        break;
    case 7:
        console.log('Alon-more');
        break;
    case 8:
        console.log('Beer-Seva');
        break;
    case 9:
        console.log('Nesher');
        break;
    case 10:
        console.log('Shilo');
        break;
    case 11:
        console.log('Qiryat-Gat');
        break;
    case 12:
        console.log('Shlomi');
        break;
    default:
        console.log('No match found');
}

// 8
const travelSeason = 1;
switch (travelSeason) {
    case 1:
        console.log('winter advisory');
        break;
    case 2:
        console.log('winter advisory');
        break;
    case 3:
        console.log('spring advisory');
        break;
    case 4:
        console.log('spring advisory');
        break;
    case 5:
        console.log('spring advisory');
        break;
    case 6:
        console.log('summer advisory');
        break;
    case 7:
        console.log('summer advisory');
        break;
    case 8:
        console.log('summer advisory');
        break;
    case 9:
        console.log('fall advisory');
        break;
    case 10:
        console.log('fall advisory');
        break;
    case 11:
        console.log('winter advisory');
        break;
    case 12:
        console.log('winter advisory');
        break;
    default:
        console.log('No match found');
}
