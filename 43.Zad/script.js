// Metoda flat

const tab = [1, [2, [3, [4, [5]]]]];

console.log(tab.flat()); // [1, 2, [3, [4, [5]]]]];
console.log(tab.flat(1));  // [1, 2, [3, [4, [5]]]]];
console.log(tab.flat(2));
console.log(tab.flat(3));
console.log(tab.flat(4));