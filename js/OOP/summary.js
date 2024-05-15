/*In JavaScript, when you call super() inside a subclass constructor, you need to pass arguments to match the constructor of the superclass.This is necessary because you're invoking the constructor of the superclass, which might require certain arguments to initialize its state properly.

However, when you call super.methodName() to access a method from the superclass, you don't need to explicitly pass any arguments because you're just referencing the method itself, not invoking it with specific arguments.The method will receive its arguments based on how it's called in the subclass or superclass.
*/
class Parent {
    constructor(name) {
        this.name = name;
    }

    greet() {
        console.log(`Hello, ${this.name}!`);
    }
}

class Child extends Parent {
    constructor(name, age) {
        super(name); // Passes 'name' to Parent constructor
        this.age = age;
    }

    introduce() {
        console.log(`My name is ${this.name} and I am ${this.age} years old.`);
    }

    greetAndIntroduce() {
        super.greet(); // Calls the greet method of the Parent class
        this.introduce(); // Calls the introduce method of the Child class
    }
}

// Creating an instance of Child
const child = new Child("Alice", 10);
child.greet();
child.greetAndIntroduce(); // Output will be "Hello, Alice!" and "My name is Alice and I am 10 years old."
