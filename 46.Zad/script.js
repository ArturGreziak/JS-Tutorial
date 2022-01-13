// Metody shift i unshift

const tab = [1, 2, 3, 4, 5];

tab.shift();

console.log("tab.shifi: ", tab);

tab.shift();

console.log("tab.shifi: ", tab);

const tabOne = [1, 2, 3];
tabOne.unshift(9);
tabOne.unshift(8);
console.log("tabOne: ", tabOne);

const tabTwo = [1, 2, 3];
tabTwo.unshift(9,8);
console.log("tabTwo: ", tabTwo);