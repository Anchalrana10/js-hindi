// console.log("A");
// console.log("N");
// console.log("C");
// console.log("H");
// console.log("A");
// console.log("L");


function sayMyName() {
    console.log("A");
    console.log("N");
    console.log("C");
    console.log("H");
    console.log("A");
    console.log("L");
}


// `sayMyName` is the function reference, and `()` is used to call or execute the function.

// sayMyName()

// function addTwoNumbers(number1, Number2){ number1, Number2 these are called parameters
//        console.log(number1 + Number2);
// }

function addTwoNumbers(number1, number2){ //number1, Number2 these are called parameters
    //    let result = number1 + number2
    //    return result


    // another way direct 
    return number1 + number2
       
}

const result = addTwoNumbers(3, 5) // when we call the fxn called arguments

// console.log("Result: ", result);


// how many ways to take values


function loginUserMessage(username = "sam"){ // we can use default value
    // if(username === undefined){ // value checked
    //     console.log("Please enter a username");
    //     return
    // }
    if(!username){ // value checked , we can use like this also
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("Anchal"))
// console.log(loginUserMessage("Anchal")) if there is no value passed then? shows undefined not null 


function calculateCartPrice (val1, val2, ...num1){
    return num1
}
// console.log(calculateCartPrice(200, 400, 500)) // packed in budle and give it to me for now its open  i.e rest operator

const user = {
    username: "Anchal",
    price: 199
}

// how to use this object in the function

function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
    
}

// handleObject(user)

handleObject({
    username: "sam",
    price: 399
})


const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]

}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 10000]));
