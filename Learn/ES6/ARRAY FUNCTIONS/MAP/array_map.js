
//map using object : 1

let arr = [
  {
    name: "Sagar Kudu",
    experience: 1.2,
    type: "IT",
  },
  {
    name: "Sakshi Patil",
    experience: 0,
    type: "commercial",
  },
  {
    name: "Daya",
    experience: 3,
    type: "IT",
  },
];

let newArr = arr.map( (data, pos) => {
    console.log(data);

    //to access the objects, use object.value 
    return {
      name: data.name,
      experience: data.experience,
    };
});

console.log(arr);
console.log(newArr);


//output
// { name: 'Sagar Kudu', experience: 1.2, type: 'IT' }
// { name: 'Sakshi Patil', experience: 0, type: 'commercial' }
// { name: 'Daya', experience: 3, type: 'IT' }
// [
//   { name: 'Sagar Kudu', experience: 1.2, type: 'IT' },
//   { name: 'Sakshi Patil', experience: 0, type: 'commercial' },
//   { name: 'Daya', experience: 3, type: 'IT' }
// ]
// [
//   { name: 'Sagar Kudu', experience: 1.2 },
//   { name: 'Sakshi Patil', experience: 0 },
//   { name: 'Daya', experience: 3 }
// ]
