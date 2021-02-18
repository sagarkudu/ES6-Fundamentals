
//find sum of array using reduce()

let emp = [
  {
    name: "Sagar Kudu",
    experience: 3.5,
    type: "IT",
  },
  {
    name: "Sakshi Patil",
    experience: 5,
    type: "commercial",
  },
  {
    name: "Daya",
    experience: 10,
    type: "IT",
  },
];

const numArr = [1,2,3,4,5];

//lets store the result in some variable.
const result = emp.reduce( (acc, item)=> {
    //console.log(item.experience);
    return acc + item.experience;
}, 0);

console.log(result); //18.5 is total experience of all employess