// The Array.of()

// Array.of()  // []

// Array.of(8) // [8]

// Array.of("a", "b", "c"); // ["a", "b", "c"]

let tab = Array.of("a", "b", "c"); // ["a", "b", "c"];

console.log(tab)

let tab2 = [1, 2, 3];

let copy = Array.from(tab2);

console.log(copy);