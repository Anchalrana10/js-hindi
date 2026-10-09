const user = {
    username: "Anchal",
    price: 999,

    welcomeMessage: function(){ // the user whose name add here in the fxn only for those this welcome message has been shown, username can be changed
        console.log(`${this.username} , welcome to website`); // this keyword means refer the current context
        console.log(this);
        
    }
}

// user.welcomeMessage()
// user.username = "Aditi" // we change the context means value
// user.welcomeMessage()

// console.log(this); // the value is empty object

// function one(){
//     let username = "Anchal"
//     console.log(this.username);
    
// }
// one()


// const One = function () {
//     let username = "Anchal"
//      console.log(this.username);
// }



const One =  () => {  // this is arrow fxn
    let username = "Anchal"
     console.log(this);
}

One()



// arrow fxn +++++++++++++++++++

// const addTwo = (num1, num2) => num1 + num2  //implicit return
const addTwo = (num1, num2) => ({username: "Anchal"})   //if you use curly bracket then you have to write return if you used paranthesis then no need to write return

console.log(addTwo( 3, 4))


// const myArray = [2, 5, 7, 8]

// myArray.forEach()