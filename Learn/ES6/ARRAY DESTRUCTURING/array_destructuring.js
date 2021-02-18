
const myName = "Sagar Rangnath Kudu";
const nameArr = myName.split(' ');
console.log(nameArr); //[ 'Sagar', 'Rangnath', 'Kudu' ]

//method 1
let fname = nameArr[0];
let mname = nameArr[1];
console.log(fname); //Sagar
console.log(mname); //Rangnath

//method 2: print names

let [firstName, middleName] = nameArr;
console.log(firstName); //Sagar
console.log(middleName); //Rangnath

//object destructuring, key-value pairs
const person = {
    firstName2: 'Sakshi',
    lastName2: 'Patil',
    age: 25
}

let {firstName2, lastName2} = person;
console.log(firstName2); //Sakshi
console.log(lastName2); //Patil

//object 2
let firstName3 = 'Monali';
let lastName3 = 'Khairnar';
let age3 = 30;

const personObj = {
    firstName3: firstName3,
    lastName3: lastName3,
    age3: age3
}
console.log(personObj); //{ firstName3: 'Monali', lastName3: 'Khairnar', age3: 30 }

//object 3, it will auto map with variables
//if you want same key as variables name use this method   
let firstName4 = 'Bhakti';
let lastName4 = 'Patil';
let age4 = 25;

const obj = {
    firstName4,
    lastName4,
    age4
}
console.log(obj); //{ firstName4: 'Bhakti', lastName4: 'Patil', age4: 25 }

//object 4, it will auto map with variables
//if you want different key names use this method   
let firstName5 = 'Sonali';
let lastName5 = 'Patil';
let age5 = 27;

const obj4 = {
    first: firstName5,
    last: lastName5,
    age: age5
}
console.log(obj4); //{ first: 'Sonali', last: 'Patil', age: 27 }