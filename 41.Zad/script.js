// Metoda every i some

const result = [1, 2, 3, 4, 5, 6];

const tab = result.every(value => value < 7);

console.log(tab);

const result2 = [1, 2, 3, 4, 5, 6];

const tab2 = result2.every(value => value > 3);

console.log(tab2);

let result3 = [1, 2, 3, 4, 5, 6]; 

let result4 = result3.some(value => value > 5)

console.log(result4);

let result6 = [1, 2, 3, 4, 5, 6]; 

let result7 = result6.some(value => value > 10)

console.log(result7);