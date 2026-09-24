// const tinderUser = new Object()  // singleton object


const tinderUser = {} // non-singleton object

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = "false"


// console.log(tinderUser);


const regularUser = {
    Email : "sum@gmail.com",
    fullname: {
        userFullname : {
            firstName : "Anchal",
            lastName : "Rana"
        }
    }
}

// console.log(regularUser.fullname); // by dot notation you can acccess objects values



// we can combine objects 

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = {obj1, obj2}
// const obj3 = Object.assign({}, obj1, obj2, obj4) // we use empty array {} paranthesis is tagret and others are source

const obj3 = {...obj1, ...obj2} // we use this 90%
// console.log(obj3);


// returntarget === target ( true)


// values are coming from db , 

const users = [ // in arrays too many objects
    {
        id: 1,
        email: "hr@gmail.com"
    },
    {
        id: 1,
        email: "hr@gmail.com"
    },
    {
        id: 1,
        email: "hr@gmail.com"
    },
    {
        id: 1,
        email: "hr@gmail.com"
    },
]

users[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser)); // datatype is arrayy
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser)); // array inside an array , 1st property is key and 2nd is its value



// Many times, we loop through the entire object and then try to extract a specific value. The problem is that, 
// in some cases, that value may not exist. If we try to access a value that doesn’t exist,
//  there is a chance that it could cause the application to crash.

// So, we should either manually verify whether the value exists before accessing it,
//  or explicitly check with the object to confirm whether that particular value is available.

console.log(tinderUser.hasOwnProperty('isLoggedIn'));
