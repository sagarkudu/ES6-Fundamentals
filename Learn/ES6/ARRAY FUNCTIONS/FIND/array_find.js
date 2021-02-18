
const numArr = [-1, -2, -3, -4, 1, 2, 3, 4];


const findEven = numArr.findIndex( (item)=> {
    return (item % 2 !== 0 && item >= 0);
});
console.log('Result of even => ', findEven);