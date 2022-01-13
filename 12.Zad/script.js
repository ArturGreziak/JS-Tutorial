// Typ symbol 

//ES6

//not-string property

console.log(typeof(Symbol("hello"))); // symbol

let stringName = "Books";
let symbolName = Symbol("Books");

let obj = {};

obj[stringName] = 5;
obj[symbolName] = 4;

obj[stringName] // 5;
obj[symbolName] // 4;

console.log("obj: " + obj);
// obj: "Books" = 5, Symbol("Books") = 4

//Symbol()

// brak literal syntax

/*
let s1 = Symbol("hello");
let s2 = Symbol("hello");

s1 === s2 // false

s1.toString(); // "Symbol(hello)"
s2.toString(); // "Symbol(hello)"

let s1 = Symbol.for("share");
let s2 = Symbol.for("share");

s1 === s2

s1.toString(); // Symbol(share)
Symbol.keyFor(s1);// "share"
*/