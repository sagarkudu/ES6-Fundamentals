
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


const numArr = [1,2,3,4,5,6,7];

//filter passes the current element say item to callback function
const resultArr = emp.filter( (item)=> {
    //console.log(item.experience);
    return item.experience >= 5;
});

console.log('Result Array => ', resultArr);