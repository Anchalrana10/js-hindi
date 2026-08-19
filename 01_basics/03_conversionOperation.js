let score = null

console.log(typeof score); //type of score 
console.log(typeof (score));// write as a method 

let valueINnumber = Number(score) // score is converted to number , Capital based 
console.log(typeof valueINnumber);
console.log(valueINnumber); //dont rely on number

//conversion

// 33" ==> 33, number convert
// "33abc" ==> NaN, not a number  , but type of NaN is number
// true ==> 1; false ==> 0

let isLoggedIn = 1
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

// 1 ==> true; 0 ==> false
// "" ==> false
// "anchal" ==> true



let someNumber = 33

let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);