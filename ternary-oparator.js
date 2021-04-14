/*

structure : (condition) : trueValue : flasyValue

*/


// regular condition
var age = 12;

if(age > 17){
  console.log("adult") 
} else{
  console.log("teen")
}

// ternary oparator

var singleCondition = (age>17) ? console.log("adult") : console.log("teen")

var doubleCondition = (age>17) ? console.log("adult") 
                                : (age > 10) ? console.log("teen") 
                                : (age > 5) ? console.log("kid") 
                                : console.log("newbron")