// Metoda copyWithin

const tab = [0, 1, 2, 3, 4, 5];

tab.copyWithin(2);
console.log("tab: ", tab);

tab.copyWithin(1, 4);
console.log("tab: ", tab);

tab.copyWithin(0, 4, 5);
console.log("tab: ", tab);