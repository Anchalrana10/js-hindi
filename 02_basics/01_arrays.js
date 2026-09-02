//array

const myArr = [ 0, 1, 2, 3, 4, 5] /// number based

const myHeors = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)
console.log(myArr[1]);


//Array Methods


//myArr.push(6)
//myArr.push(7)
//myArr.pop() // last value in array removed

//myArr.unshift(9) // unshift() is an array method used to add one or more elements at the beginning of an array.
//myArr.shift() //shift() is an array method that removes the first element from an array.

//console.log(myArr.includes(9)); // includes() → "Is this value present?" → true / false
//console.log(myArr.indexOf(3)); //indexOf() is used to find the position (index) of a value in an array. if there is no value then it goes to -ve


//const newArr = myArr.join() //join() is used to combine all array elements into one string.
//console.log(myArr);
//console.log(newArr); // values converted to string


// ++++++++++++slice or splice++++++++++++


console.log("A", myArr); //slice() → copies a part of an array, does NOT change the original array.
const myn1 = myArr.slice(1, 3) // inclued 1 2 but 3 is not included

console.log(myn1);
console.log("B", myArr);


const myn2 = myArr.splice(1, 3) //splice() → removes/adds elements and DOES change the original array.
console.log("C", myArr);
console.log(myn2);

