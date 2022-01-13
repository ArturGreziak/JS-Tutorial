// Pętla for of

// for(variable of object){
//     statement;
// }

const data = [1, 2, 3, 4, 5];
let total = 0;

for(el of data){
  total  += el;
}
console.log("total: ", total);