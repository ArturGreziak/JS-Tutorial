// Array Iterator Method map()

const data = [3, 4, 1, 7, 6];

let total = 0;

data.map(value => {total += value});

console.log("total: ", total);

const tab = [3, 9, 27];

let newTab = tab.map(value => value * value);

console.log(tab); // [3, 9, 27];

console.log(newTab) // [9, 81, 729];