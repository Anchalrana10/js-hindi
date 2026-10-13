function code(){
    console.log(`DB CONNECTED`);
}

code(); // immediately ivoked

// when things are polluted by global scope and we dont want that in this function


(function code(){ 
    //named iife
    console.log(`DB CONNECTED`);
})(); // for this code to be ended we use ;



( (name) => { // AS A ARGUMENT 
    console.log(`DB CONNECTED TWO ${name}`); // VARIABLE
})('ANCHAL') // PARAMETER

//SIMPLE iife