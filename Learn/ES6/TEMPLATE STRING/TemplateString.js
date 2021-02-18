
//use of template string

//1. printing name 
const myname = 'Sagar Kudu';
const printName = `Hello ${myname}`;
console.log(printName); //Hello Sagar Kudu

//2. using function with operator +
const firstName = 'Sagar';
const lastName ='Patil';

function getFullName(firstName, lastName) {
    return `${firstName} ${lastName}`;
}

const printFullName = `Hello ${ getFullName(firstName, lastName) + 500}`;
console.log(printFullName); //Hello Sagar Patil500


//working on some complex template strings

//1. rgba(red, green, blue, alpha)

let red = 200;
let green = 155;
let blue =100;
let alpha = 0.9;

const rgbaExp = `rgba(${red}, ${green}, ${blue}, ${alpha})`;
console.log(rgbaExp); //rgba(200, 155, 100, 0.9)
