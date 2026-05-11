let score = null

console.log(typeof score);
console.log(typeof (score));

let valueINnumber = Number(score) // score is converted to number
console.log(typeof valueINnumber);
console.log(valueINnumber);

//conversion

// 33" ==> 33
// "33abc" ==> NaN
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