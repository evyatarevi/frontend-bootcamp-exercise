// 1
//  var -> undefined
// let, const -> error: not declared

// 2
// console.log(myFuncExpr()); -> work
// console.log(myFuncDecl()); -> error

// 3
// const x = "global";
// function outerFunc() {
//     let y = "outer";
//     function innerFunc() {
//         var z = "inner";
//         console.log(x);  --> "global"
//         console.log(y); --> "outer"
//     }
//     innerFunc();
//     console.log(z); --> error
// }
// outerFunc();

// 4
// const a = 1;
// function b() {
//     const a = 10;
//     c();
//     return;
//     function c() {
//         console.log(a); --> 10
//     }
// }
// b();
// console.log(a); --> 1
// foo();
// function foo() {
//     console.log(x); --> undefined
//     var x = "Hello, world!";
//     bar();
//     function bar() {
//         console.log(x); --> "Hello, world!" (I mistake. it's return: Cannot access 'x' before initialization
//         let x = "Hello, scope!";
//  }
// }
