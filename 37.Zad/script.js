// Array Iterator Method forEach()

const data = [7, 19, 21, 3, 5];
let total = 0;

data.forEach(value => {total += value});
console.log("total: ", total); // 55

const tab = [5, 4, 3, 2, 6, 7];

tab.forEach((value , index, array) => {array[index] = value * 2})

console.log(tab);