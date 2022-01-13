/* Tworzenie tablic:

1.Array literals
2. ...spread operator
3.The Array() constructor
4.The Array.of and Array.form()
*/

let empty = [];

let numbers = [1, 2, 3, 4, 5, 6];

let mix = [1.2, "m", true];

let base = 7;

let rate = [base, base + 1, base + 3, base + base];

console.log(rate); //[ 7, 8, 10, 14];

let user = [{name: "Atrur", id: 1}, {name: "Dorota", id: 2}];

let multi = [[1, { name: "Atrur"}],[2, { name: "Dorota" }]];

console.log(multi);

let a = [1, , 3, ,5];

console.log(a);

a[0] // 1
a[1] // undefined