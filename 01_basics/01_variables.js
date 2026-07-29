const accountId = 144552  
let accountEmail = "anchal@google.com"// can change the value
var accountPassword ="1234" //can change the value
accountCity = "Jaipur" // don't use this method but rememeber a variable be declared by this method also
let accountState; // if you dont add any value in the variable it appears as undefined okay?



//accountId = 2 // not allowed because we cant change the const value
accountEmail ="hc@hc.com"
accountPassword ="202020"
accountCity ="bengaluru"

console.log(accountId);

/*
prefer not to use var
because of issue in block scope and functional scope
*/


console.table([accountEmail, accountId, accountPassword, accountCity, accountState])



