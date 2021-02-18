//Benefit of using const and let

/*
1. using const we can create constant variable, so its value cannot be updated later.
2. variable created using let and const are 'block' scoped and it does not support hoisting.
3. hoisting means its value can changed even after its initialiazation.

*/


//const

//value can't be changed in const
const num3 = 30;
// num3 = 30.5; //TypeError: Assignment to constant variable
console.log(num3);

//let, const does not support hoisting.

//earlier using var hoisting was possible.
num4 = 40;
console.log(num4);
var num4;

//hoisting not possible
num5 = 50;
console.log(num5);
let num5; //ReferenceError: Cannot access 'num5' before initialization
