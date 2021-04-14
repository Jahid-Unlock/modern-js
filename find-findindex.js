/*
topic : arr.find()
structure : array.find(function(curentValue, currentIndex, array){}, this);

** retrun only one value from array.
** after found target value array.find stop looping (like switch)
** retun a single value
** cannot make any change on main array

*/

// basic example
var arr = [1, 3, 5, 6, 9, 12, 26, 30]

var result = arr.find(function(cv){
  return cv > 9;
})


// advance example (use of this)

class Person{
  constructor(name, age){
    this.name = name
    this.age = age
  }

  test(){
    console.log(`hi`)
  }

  dammyFunc(){
    let arr = [1,2,3]

    arr.find(function(){
      this.test()
    },this) // if we do not use "this" here we'll get error.
  }
}

var person1 = new Person('jahid', '21')




/*
topic : arr.findIndex()
structure : array.findIndex(function(curentValue, currentIndex, array){}, this);

** retrun only one index from array.
** after found target index array.findIndex stop looping (like switch)
** cannot make any change on main array
** if target value don't exist return -1
*/

// basic example

var arr = [3,6,22,45,67,34]

var result = arr.findIndex(function(cv, ci){
  return cv > 6;
})