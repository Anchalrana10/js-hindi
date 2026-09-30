// let a = 10
// const b = 20
// var c = 30

// {}  this is known as scope

// var c = 300 // but the value is same as 30 not 300
// inside global scope the values you have written are available in block scope but the value inside the scope are not available outside

let a = 300

if(true) { // this inside the if is known as block scope and outside is global scope
    let a = 10
    const b = 20
    console.log("INNer: ", a);
    
    // var c = 30
    // c = 30 // in this situation the result is same as 30 , this is the problem with var
}
console.log(a); // no result
// console.log(b);// no result
// console.log(c); // provide result 30
