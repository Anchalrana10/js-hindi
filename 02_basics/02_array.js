const marvel_heros = ["Thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

//marvel_heros.push(dc_heros) //push() → adds element at the end of an array. push in existing array

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);


// operator concat

const allHeros = marvel_heros.concat(dc_heros) //concat() is used to join two or more arrays. returns a new array
console.log(marvel_heros);


// spread  operator

const all_new_heros = [...marvel_heros, ...dc_heros]
console.log(all_new_heros);


// rarely used but you should know

const another_array = [ 1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity) // flat() is used to remove nested arrays and make them simpler/flat.
console.log(real_another_array);



// mostly used 

console.log(Array.isArray("Anchal")) // Array.isArray() is used to check whether a value is an array or not. we ask a question 
console.log(Array.from("Anchal")) // convert (Array.from() is used to convert something into an array.)
console.log(Array.from({name: "Anchal"})) // provide empty array  ( interesting ) we need to tell from keys you can make array from values then it returns the output


let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3)); // Array.of() is used to create an array from the values you give it.




