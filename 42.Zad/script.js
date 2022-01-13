//  Metoda reduce();

const array1 = [3, 2, 1, 4, 5, 6];
const tab1 = array1.reduce
((previousValue, currentValue) => previousValue + currentValue);
console.log(tab1);

const array2 = [3, 2, 1, 4, 5, 6];
const tab2 = array1.reduce
((previousValue, currentValue) => previousValue + currentValue, 0);
console.log(tab2);

const array3 = [3, 2, 1, 4, 5, 6];
const tab3 = array3.reduce
((previousValue, currentValue) => previousValue + currentValue, 10);
console.log(tab3);

const results = [3, 2, 17, 14, 15, 6];

const results2 = results.reduce((previousValue, currentValue) => 
previousValue > currentValue ? previousValue : currentValue); 

console.log(results2);