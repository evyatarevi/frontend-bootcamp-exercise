class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        if (age) {
            this.age = age;
        }
    }
}

const person1 = new Person('evyatar');
console.log(person1.age);
for (const key in person1) {
    console.log(key);
}

