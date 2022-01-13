// Pętla for in

// for(variable in object){
//     statement
// }

const game = { name: "Super Mario", age: 3, multiplayer: 3 }

for(let property in game){
    console.log(`${property}: ${game[property]}`);
}