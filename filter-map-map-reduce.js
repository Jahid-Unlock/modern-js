/*
topic : arr.filter()
structure : array.filter(function(curentValue, currentIndex, array){}, this);

** return a new array
** don't make any change on main array
** loop through every element of array
** 

*/

// example

var arr = [1,42,33,4,5,36,7,8,23,45,87]

var result = arr.filter((ev)=>{
    return ev > 10;
})

console.log(result)



/*
topic : arr.map()
structure : array.map(function(curentValue, currentIndex, array){}, this);

** return a new array
** don't make any change on main array
** loop through every element of array

*/

// example

var arr2 = [1,2,3,4,5,6,7,8,9,10]

var result2 = arr2.map((cv)=>{
    return 2 * cv
})

console.log(result2)


/*
topic : arr.reduce()
structure : array.reduce(function(previousValue, curentValue, currentIndex, array){}, initailValue);

** return a new value
** don't make any change on main array
** loop through every element of array

*/

// example
var arr3 = [1,2,3,4,5,6,7,8,9,10]

var result3 = arr3.reduce((pv,cv)=>{
  return pv + cv
})

console.log(result3)