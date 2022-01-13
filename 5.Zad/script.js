/*
console.log(typeof(undefined)); // undefined

let mojaZmienna;

console.log(mojaZmienna); // undefined

console.log(innaZmienna); // ReferenceError

let innaZmienna;

let osoba = undefined;

console.log(osoba.wiek); // ReferenceError
*/
console.log(typeof (null));

let mojaZmienna = null;

console.log(mojaZmienna); // null

let osoba = null;

console.log(osoba.wiek); // TypeError

null == undefined // true

null === undefined // false

undefined // nieumyślnie brakujące wartości

null // umyślnie brakujące wartości