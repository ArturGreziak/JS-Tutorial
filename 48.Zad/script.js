// Metoda splice

const tab = [0, 1, 2, 3, 4, 5, 6, 7];

tab.splice(5)
console.log("tab: ", tab);

tab.splice(3, 1)
console.log("tab: ", tab);

const tab2 = [0, 1, 2, 3];

tab2.splice(2, 0, 7, 7, 7);
console.log("tab2: ", tab2);

tab2.splice(5, 2, "m", "m");
console.log("tab2: ", tab2);