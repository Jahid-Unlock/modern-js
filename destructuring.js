/*
topic : Destructuring
structure : const {} = objectName

*/

// ##1 Object Destructuring

var obj1 = {
    name : " jahid",
    id : 12,
    age : 22

    education : {
        degree : "master"
      }
  }

    // old way to stole a value from object
    var name = obj1.name // "jahid"
    
    // new way to stole a value from object
    const {name} = obj1 
    // OR
    const {name : title} = obj1

    // for nested object
    const {education : {degree} = {degree : "hons"}} = obj1 // here {degree : "hons"} is defult object

    
// ##3 Array Destructuring

var arr = [1,2,3,4,5,[100, 500]]

var [,a,,,b] = arr 
var[,,,,,[,c]] = arr //for nested arrvar arr = [1,2,3,4,5,[100, 500]]
