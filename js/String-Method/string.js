// 1. City Name Capitalization
let input = "new york";
for (let i = 0; i < input.length; i++) {
    if (i === 0 || input[i - 1] === ' ') {
        input = input.slice(0, i) + input[i].toUpperCase() + input.slice(i + 1);
    }
}
console.log(input);


// 2. Flight Search
const input2 = ["New York", "Tokyo", "Paris", "London"];
const query = "yo";
for (let i = 0; i < input2.length; i++) {
    if (input2[i].toLowerCase().includes(query.toLowerCase()))
        console.log(input2[i]);
}


// 3. Flight Code Format
let input3 = "JFK-123";
for (let i = 0; i < input3.length; i++) {
    if (input3[i] === '-') {
        input3 = input3.slice(i + 1) + '-' + input3.slice(0, i);
    }
}
console.log(input3);


// 4. Flight Duration
const input4 = "3h 45min";
const hours = input4.slice(0, input4.indexOf('h'));
const min = input4.slice(input4.indexOf(' ') + 1, input4.indexOf('m'));
console.log(`${hours} hours and ${min} min `);



// 5. Travel Agency Acronym
const input5 = "Global Travel Agency";
let acronym = '';
for (let i = 0; i < input5.length; i++) {
    console.log(acronym);
    (i === 0 || input5[i - 1] === ' ') && (acronym += input5[i]);
}
console.log(acronym);


// 6. Location Slug
const input6 = "San Francisco";
const slug6 = input6.replace(' ', '-').toLocaleLowerCase();
console.log(slug6);

// 7. Itinerary Trimming
const input7 = "Visit the Golden Gate Bridge, take a walk in Golden Gate Park, see Alcatraz Island";
const length = 50;
const endString = input7.indexOf(' ', 50);
let str = input7.slice(0, endString + 1);
console.log(str + '...');


// 8. Travel Wishlist
const input8 = "Paris, Tokyo, New York";
const arr8 = input8.split(', ');
console.log(arr8);