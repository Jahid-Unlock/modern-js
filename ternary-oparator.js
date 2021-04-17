/*

topic : ternary oparator
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

var singleCondition = (age>17) ? "adult" : "teen"

var doubleCondition = (age>17) ? "adult"
                               : (age > 10) ? "teen"
                               : (age > 5) ? "kid"
                               : "newbron"