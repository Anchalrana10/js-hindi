const score = 400 //number defined

//new keyword use
const balance = new Number(100)
//console.log(balance);
//console.log(score);

//console.log(balance.toString().length); //converted to string
//console.log(balance.toFixed(1));  //this will used in future when making ecommerce value so please use toFixed


const otherNumber = 1123.8966

//console.log(otherNumber.toPrecision(4)); // returns a string


const hundreds = 1000000
//console.log(hundreds.toLocaleString('en-IN')); // to calculate in indian value


//max value and min value , we dont talkk about bigInt




//+++++++++++++++++++++++++ Maths ++++++++++++++++++++++++++++++++++



// The **Math library comes built into JavaScript by default**, so we don't need to install it separately
//console.log(Math);
//console.log(Math.abs(-4)); //Math.abs() → converts a negative number into a positive number.

// So:

// Negative → Positive: Math.abs(-10) → 10
// Positive → Same positive: Math.abs(10) → 10
// Zero → Zero: Math.abs(0) → 0

// In short: Math.abs() gives the absolute (non-negative) value of a number.

//console.log(Math.round(4.3));
//console.log(Math.ceil(4.2)); //ceiling means top value a little more than 4 so it returns 5 big value 
//console.log(Math.floor(4.9)); //floor means lower value 

console.log(Math.random()); // values in between 0 or 1 always , values are 0.1, 0.2, 0.4 likewise

console.log((Math.random()*10) + 1); // problem is when multiplied by 10 we shift the value to left but maybe sometimes the value
//  can be 0.1  then Math.floor gives you value 0

console.log(Math.floor(Math.random()*10) + 1); // to avoid that case we add + 1

const min = 10
const max = 20

//syntax formula

console.log(Math.floor(Math.random() * (max - min + 1)) + min ) //formula , to vaoid 0 case we add +1 we need minium value that why
// +min add