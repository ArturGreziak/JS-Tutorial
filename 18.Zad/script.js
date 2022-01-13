// Warunkowy dostęp do właściwości

// ES2020

//experession?.indentifier

//experession?.[experession]

// Optional chaining

/*
let a = { b: null};

console.log(a.b?.c); // undefined

console.log(a.b.c);  // TypeError: Cannot read properties of null (reading 'c')
*/

/*
let a = { b: null };

a["b"]?.["c"]

a["b"]["c"]
*/