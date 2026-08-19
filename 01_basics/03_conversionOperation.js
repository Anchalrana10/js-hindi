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




//****************************operations*************************//

let value = 3
let negValue = -value
console.log(negValue); // -3 value received


//some basic maths opeartion 

console.log(2+2);//addition
console.log(2-2);//subtraction
console.log(2*2);//multiplication
console.log(2**2); //2 raise to the power 2
console.log(2/2);// divide
console.log(2%2);// remainder

//some tricky things

let str1 = "hello"
let str2 = " Anchal" //space before name because when you add the two strings they can't collide or merge

let str3 = str1 + str2
console.log(str3);


//where the problem ( omplex situation)

console.log("1" + 2); // output is 12 
console.log(1 + "2");
console.log("1" + 2 + 2); // 122 if first there is string then all the value be known as string and if there is number then they add
console.log(1 + 2 + "2"); // 32 how same opeartion is above but its not adding any value and here frst add then string as it is

// its a guideline in ecma documentation in  abstract operation that which is convert in which value


//tricky

console.log(+true); // the value is true when you simply want the value of true but when there is + before true the value is 1
console.log(+"");// empty paranthesis

let gameCounter = 100
gameCounter++;  
console.log(gameCounter); // value is 101


//prefix and post prefix

//link to study