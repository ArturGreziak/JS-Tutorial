// Metody push i pop

const tab = [1, 2, 3, 4, 5];
console.log("tab.length: ", tab.length);

const tab2 = tab.pop()
console.log("tab.length: ", tab.length);
console.log("tab: ", tab);
console.log();

const tab3 = tab.pop()
console.log("tab.length: ", tab.length);
console.log("tab: ", tab);
console.log();

const tabOne = [1, 2, 3];

const a = tabOne.push([4, 5, 6]);

console.log("tabOne: ", tabOne);

const b = [9, 8, 7];

const c = b.push(...[6, 5, 4]);

console.log("b: ", b);