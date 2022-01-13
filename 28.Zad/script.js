// Pętla for

// for(initialize; test; increment){
//     statement
// }

// for(let counter = 0; counter < 9; counter++){
//     console.log("counter: ", counter);
// }

for(let i = 0; i < 4; i++){
    let print = "";
    for(let j = 0; j < i + 1; j++){
        print += "$";
    }
    console.log(print);
}