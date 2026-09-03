// singleton created by constructors (A singleton object means an object where only one instance is created from that constructor.)
//Object.create //  (Object.create() is one way to create an object using a constructor/prototype.)

//object literals

const mySym = Symbol("key1") //Symbol is a primitive data type in JavaScript.
// The "key1" is just a description of the Symbol. You can think of it as a unique key.

const JsUser = { //object create
    name: "Anchal",
    "full name": "Anchal Rana",
    [mySym] : "mykey1", // Using Symbol as an object key , This means we are using the Symbol stored inside mySym as the property key.
    age: 25,
    location: "chandigarh",
    email: "anchal@gmail.com",
} 

//There are mainly two ways to access object properties. 
// Dot notation
// Bracket notation


console.log(JsUser.email);// methods 
console.log(JsUser["full name"]);// second method 

console.log(JsUser["email"])
console.log(typeof JsUser[mySym])

// object be accessed by dot notation

// how to change

JsUser.email = "Anchal2@gmail.com" // by this

// Object.freeze(JsUser) // value freeze, not change in the object

JsUser.email = "Anchal4@gmail.com"
console.log(JsUser);


///functions

JsUser.greeting = function(){
    console.log("hello js user");
    
}

JsUser.greeting2 = function(){
    console.log(`hello js user, ${this.name}`);
    
}

// console.log(JsUser.greeting); // value is undefined
console.log(JsUser.greeting()); //so use () this
console.log(JsUser.greeting2());


