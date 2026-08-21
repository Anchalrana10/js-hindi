// Primitive type

// 7 types: String, Number, Boolean, null, undefined, symbol, BigInt

// in js we dont define any languages.
// js is dynamically typed


const score = 100 // number defined
const scoreValue = 100.3 // number defined, no matter its in decimal or what 
const isLoggedIn = false // boolean type
const outsideTemp = null // empty not 0
let userEmail; // value is undefined you can also manually make the value undefined by using let userEmail = undefined;



const id = Symbol('123')
const anotherId = Symbol('123') // return value is not same

console.log(id === anotherId);





const bigNumber = 342423424234724n // bigint


/**********   ***********/

// Reference type also known as {non-premitive} : 

// Array, objects, functions


const heros = ["shaktiman", "naagraj", "doga"] //arrays in square bracket

// {
//    name: "anchal", // object declared
//     age: 22,
// }



//function can treat as variable in js

const myFunction = function(){
    console.log("hello world");
}



//know the datatype 

console.log(typeof Symbol);






//********************************************************************* */

// two types of memory

// Stack ( primitive ) and heap ( non-premitive )

// in primitive type we use stack memory and when stack memory used , which means Whenever 
// you declare a variable of a primitive data type and assign it to another variable, a copy of its value is created.



// in heap original reference value received


let myYoutubename = "anchalranadotcom" //goes to stack 

let anothername = myYoutubename
anothername = "chaiaurcode"

console.log(myYoutubename);
console.log(anothername);



let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}
let userTwo = userOne

// we can access object by using .email like in the eg
userTwo.email = "anchal@google.com"

console.log(userOne.email);
console.log(userTwo.email);




