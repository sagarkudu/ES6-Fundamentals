
//class and classname
class Person {
    //constructor function, where we initialize values
    constructor(name, birthYear) {
        this.name = name;
        this.yearOfBirth = birthYear;
    }

    //define getDetails() method
    getDetails = () => {
        return `Name: ${this.name} and Age: ${2021 - this.yearOfBirth}`
    }
}

class Pilot extends Person {
    constructor(exp, type, license){

        //super() get access to parent class
        //passing data to Person's constructor
        super('Sagar kudu', 1989);

        this.experience = exp;
        this.type = type;
        this.license = license;
    }

    getData = () => {
      //console.log(`${this.getDetails} and Experience: ${this.experience} years and Type: ${this.type}`);
      console.log(
        ` ${this.getDetails} and Experience: ${this.experience} years and Type: ${this.type}`
      );
    }
}

//to create object, we simply do
const person1 = new Pilot(5, 'private', 'LIC12345');

//print object
console.log(person1);

person1.getData(); //calling function

