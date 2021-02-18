
//before REST operator, extra passed arguments are ignored.

const mSum = (num1, num2) => {
    console.log(num1 + num2); //6, rest three are ignored.
}
mSum(2,4,6,5,2);

//Using REST operator we can pass any number of arguments using triple dots (...)

//1. using rest operator, passing sum1 as an Array
const sum1 = (...args) => {
  console.log(args); //[ 1, 2, 3, 4, 5 ]
}
sum1(1,2,3,4,5);

//2. using rest operator, any number length, it will be array
const sum2 = (...args) => {
    console.log(args); //[1, 2, 3, 4, 5, 6, 7, 8];
}
sum2(1,2,3,4,5,6,7,8);

//3. addition of all in given array
const sum3 = (...args) =>  {

    let sum = 0;
    for(let i=0; i<args.length; i++){
        sum += args[i];
    }
    console.log(sum);
}
sum3(10,20,30,40,50,60,70,80,90); //450

//4. passing num1, num2 arguments
const sum4 = (num1, num2, ...args) => {
  console.log(num1); //10
  console.log(num2); //20
  console.log(args); //[1, 1, 2, 2,2, 5, 5]

  let sum = num1 + num2;

  for (let i = 0; i < args.length; i++) {
    sum += args[i];
  }

  console.log(sum); //28
}
sum4(1,2,3,4,5,6,7); 

/*
1. num1, num2 are passed normally as numbers
2. but remaining 3,4,5,6,7 are passed as an array.

3. The REST operator should be always at the end i.e
    const sum4 = (num1, num2, ...args)

4. The REST operator should not be at first i.e
    const sum4 = (...args, num1, num2 ) 
    //syntax error: REST parameter must be last formal parameter.


*/

