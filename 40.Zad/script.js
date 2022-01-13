// Metody find() i findIndex

const age = [16, 18, 20, 22, 21, 27];

const age2 = age.find(value => value > 20);

console.log(age2);

const age3 = [16, 18, 20, 22, 21, 27];

const age4 = age3.find(value => value > 30);

console.log(age4);

const age5 = [16, 18, 20, 22, 21, 27];

const age6 = age5.findIndex(value => value >= 27);

console.log(age6);

const age7 = [16, 18, 20, 22, 21, 27];

const age8 = age7.findIndex(value => value === 19);

console.log(age8);