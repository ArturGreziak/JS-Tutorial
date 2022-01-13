//  Metoda slice

const tab = [0, 1, 2, 3, 4, 5, 6, 7];
const tab2 = tab.slice(0, 4);
const tab3 = tab.slice(6, 8);
const tab4 = tab.slice(4);
const tab5 = tab.slice(4, -1)
const tab6 = tab.slice(4, -2);

console.log("tab: ", tab);
console.log("tab2: ", tab2);
console.log("tab3: ", tab3);
console.log("tab4: ", tab4);
console.log("tab5: ", tab5);
console.log("tab6: ", tab6);