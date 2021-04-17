/*
topic : Spread Operator Es6
structure :  (...array)
*/


// #example 1 (copy arrays element for another array)

var arr = [1, 2, 3]


var arr2 = [...arr, 4, 5, 6]

console.log(arr2)


// #example 2 (joint two array using spread operator)
var number1 = [1, 2, 3]
var number2 = [4, 5, 6]

var jointArray = [...number1,...number2]

console.log(jointArray)


// #example 3 (joint two OBJECT using spread operator)

var obj1 = {
    name : "jahid",
    id : "cse2001019068"
  }
  
  var obj2 = {
    title : "joba",
    roll : undefined
  }
  
  var jointObj = {
    ...obj1, 
    ...obj2
  }
  
  console.log(jointObj)

  // #example 4 : (as function paramitar)

  function sum(x, y, z,x) {
    return x + y + z;
  }
  
  const numbers = [1, 2, 4,3];
  
  console.log(sum(...numbers));
  // expected output: 6
  