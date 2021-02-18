
//without arrow function

function greetings(name) {
    return `Welcome ${name}`;
}
console.log(greetings('Sagar')); //Welcome Sagar

//using arrow function
// we don't require to write function keyword, we simply ' =()=> ' i.e equal to =, paranthesis () & fat arrow =>

const mGreetings = (name, age) => {
    return `Welcome ${name} ${age}`;
} 
console.log(mGreetings('Sakshi', 25)); //Welcome Sakshi 25

//if there is single line of return statement, simply remove return
const printName = (name) => `Welcome ${name}`;
console.log( printName('Monali') ); //Welcome Monali