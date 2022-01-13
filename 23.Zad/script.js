// Nullish Coalescing Operator(??)

// ES2020

// First Defined Operator

/*
a ?? b 

(a !== null && a !== undefined) ? a : b
*/
/*
let maxSpeed = 70;

let max = maxSpeed ?? 50;

console.log("max: ", max); // max: 70

let maxSpeed = undefined;

let max = maxSpeed ?? 50;

console.log("max: ", max); // 50

let obj = {name: "", speed: 0, open: false, amount: null};

obj.name ?? "Jan" // ""

obj.speed ?? 5 // 0

obj.open ?? true // false 

obj.amount ?? 100 // 100

obj.age ?? 18 // 18
*/