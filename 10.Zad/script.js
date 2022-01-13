// Typ string

/*

UTF - 16

16 - bit

*/

// console.log(typeof("Hello")); // string

// console.log(typeof('Hello')); // string

// console.log(typeof(`Hello`)); // string

// let msg = "Hello, " + " word!";

// console.log(msg);

// let firstName = "Artur";

// let megName = "Hellow, " +  firstName;

// console.log(megName);

/*
Porównywanie stringów

"Hello, word" === "Hello, word" // true

"Hello, word" === "hello, word" // false

"M" === "m"  // false

"M" > "m"  // false

"M" < "m"  // true

*/

let empty = "";

console.log(empty.length); // 0

let msg = "Hello, world";

console.log(msg.length); // 12

let helloMsg = msg.replace("world", "Dorota!");

console.log(helloMsg);