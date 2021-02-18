/**
 * 1. Spread operator creates copies of arrays.
 * 2. It also concatenates multipple arrays.
 * 3. spread also works with objects.
 */

//1. 
let arr1 = [1,2,3,4,5];
console.log([...arr1]); //[ 1, 2, 3, 4, 5 ]

//spread operator expanded arrary of arr1 and because we are using square brackets [], so it creates new array with the same elements.

//2. [...arr2] piece of code creates a copy of arr2.
let arr2 = [1,2,3,4,5];
let arr3 = [...arr2];
console.log(arr3); //[ 1, 2, 3, 4, 5 ]

//3. creating reference sheet, both array got affected ah!!
let arr4 = [1,2,3,4,5];
let arr5 = arr4;
arr4.push(6);

console.log(arr4); //[ 1, 2, 3, 4, 5, 6 ]
console.log(arr5); //[ 1, 2, 3, 4, 5, 6 ]

//4. using spread operator to solve reference problem.
let arr6 = [1,2,3,4,5];
let arr7 = [...arr6];
arr6.push(7);

console.log(arr6); //[ 1, 2, 3, 4, 5, 7 ]
console.log(arr7); //[ 1, 2, 3, 4, 5 ]
//so spread operator creates new, it does not affect the reference.

//5. concat 2 arrays.
let arr8 = [1, 2, 3, 4, 5];
let arr9 = [6,7,8];

// let arr10 = arr8.concat(arr9); //but this is old method, we can use spread operator
// console.log(arr10); //[1, 2, 3, 4,5, 6, 7, 8]

// let arr10 = [...arr8, ...arr9];
// console.log(arr10); //[1, 2, 3, 4,5, 6, 7, 8]

let arr10 = [0, ...arr8, ...arr9, 9];
console.log(arr10); //[0, 1, 2, 3, 4,5, 6, 7, 8, 9]

//6. spread operator on objects.
let obj1 = {
    name: 'Sagar',
    lname: 'Kudu'
}

let obj2 = {
    age: 30
}

let obj = {...obj1, ...obj2};
console.log(obj); //{ name: 'Sagar', lname: 'Kudu', age: 30 }

