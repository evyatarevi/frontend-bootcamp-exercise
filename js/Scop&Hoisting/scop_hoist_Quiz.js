// 1. Question: Which of the following correctly describes the difference between var , let,
//and const ?
//=> d) var declarations are hoisted and initialized as undefined .let and const
//declarations are not hoisted.


//2.Question: What will be the output of the following code snippet ?
// console.log(x);
// let x = 5;
// => d) ReferenceError


// 3. Question: If a variable declared with let or const is hoisted, why can't we use it before
// the declaration ?
//=> a) Because it’s still in the “temporal dead zone”.


// 4. Question: What will be the output of the following code snippet ?
// let x = 1;
// {
//     let x = 2;
//     console.log(x);
// }
// console.log(x);
// => b) 2 1


//5. Question: What will be the output of the following code snippet ?
// const x = 1;
// function example() {
//     console.log(x);
//     const x = 2;
// }
// example();
// => d) ReferenceError


// 6. Question: What will be the output of the following code snippet ?
// let a = 'global';
// function checkScope() {
//     let a = 'local';
//     function nested() {
//         let a = 'nested';
//         function superNested() {
//             a = 'superNested';
//             return a;
//         }
//         return superNested();
//     }
//     return nested();
// }
// console.log(checkScope());
// console.log(a);

// => a) superNested global


// 7. Question: Which of the following statements about let and const are true ?
//=> d) All of the above.




// "temporal dead zone"
// Variables declared with let and const are hoisted to the top of their containing block, but they are not initialized until the actual declaration statement is encountered during runtime.This period between the start of the block and the actual declaration is referred to as the "temporal dead zone".Trying to access these variables before their declaration results in a ReferenceError.
