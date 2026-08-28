//Dates

let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
//console.log(typeof myDate); // date is a object

//for specify date

//let myCreateOne = new  Date(2023, 0, 23, 5, 3)  // months starts from 0 in js
// let myCreateOne = new  Date('2023-01-14') // dd-mm-yy the month start from 1
let myCreateOne = new  Date('01-14-2023')
// console.log(myCreateOne.toLocaleString());



// TimeStamp

let myTimeStamp = Date.now() //exact this time value
console.log(myTimeStamp);
console.log(myCreateOne.getTime()); //compare bze date is object 

//change in seconds
// console.log(Date.now()/1000); 
console.log(Math.floor(Date.now()/1000));




// methods
let newDate = new Date()
console.log(newDate); 

console.log(newDate.getMonth());
// If we need to get a specific part of the current date,
// such as the day, month, or year, we can use these methods.


//method toLocalString
// toLocaleString() is a Date method in JavaScript that converts a date into a readable string according to the
//  user's/local region's format.


