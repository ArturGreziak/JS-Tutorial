// Typy danych

// 1.Primitive types:
/*
a.undefined
b.null
c.Boolean
d.Number
e.String
f.Symbol
g.BigInt
*/

// 2.Object types:
/*
a.Object
b.Function
*/

// Primitive types:
// let hello = "hello";
// hello.toLocaleUpperCase(); // zwruci "HELLO"
// console.log("hello", hello); // Zwróci "hello"

// Object types:

// let a = { x: 1 }, b = { x: 1 };
// a === b // false

// let c = [], d = [];
// c === d // false

let a = [];

let b = a;

b[0] = 1;

console.log( a[0], a[0]); // 1

a === b;