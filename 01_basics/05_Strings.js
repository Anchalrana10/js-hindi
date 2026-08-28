const name = "Anchal"
const repoCOunt = 30

// console.log(name + repoCOunt + "Value"); dont use this type of code nowdays

//todays you can use backtick

// String Interpolation

// String interpolation means putting variables or expressions directly inside a string.

// In JavaScript, we use template literals with backticks ` ` and ${}.


console.log(`Hello my name is ${name} and my repo count is ${repoCOunt}`); 


//string declared 

const gameName= new String('anchal-ac') //keyname value

console.log(gameName[0]);
console.log(gameName.__proto__); //these the methods


console.log(gameName.length);
console.log(gameName.charAt(2)); // we cant use direct t we need to add it in charcter
console.log(gameName.indexOf('l')); // we can check that which letter is in which position by using indexof 

//sometime we need to break string in some parts or santize : those methods

const newString = gameName.substring(0, 4) // divided in substring
console.log(newString);

const anotherString = gameName.slice(-8, 4) // we can give -ve value to it when -ve value gives it starts reversed
console.log(anotherString);


// Trim and replace method

// Sometimes users unknowingly add extra spaces while filling out forms. We don't want to save these unnecessary spaces in the database.
//  That's why we use `trim()`, which removes the spaces from the beginning and end of a string.

const newStringOne = "    Anchal   "

console.log(newStringOne); // in this it take the space with it 
console.log(newStringOne.trim()); // This  remove the space 


// Replace method 
// The browser does not handle spaces in URLs directly, so it converts a space into `%20`. In this situation, 
// if we want to remove or replace something, we can use the `replace()` method. It allows us to specify 
// **what we want to search for** and **what we want to replace it with**.

const url = "https://hitesh.com/hitesh%20choudhary"
console.log(url.replace('%20', '-'));





