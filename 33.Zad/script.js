// Arrays and spread operator

let tabOne = [5, 6, 7];

let tabTwo = [0,...tabOne, 1, 2];

console.log(tabTwo);

let original = ["M", "A", "R", "S"];

let copy = [...original];

console.log(copy);

copy[0] = 7;

console.log(copy);

console.log(original);

const hello = [..."Cześć!"];

console.log(hello);