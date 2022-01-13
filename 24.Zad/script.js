// Instrukcja warunkowa if

/* 
if(expression)
    statement

if(expression)
    statement
else (statement_2)
*/

/*
if(userName == null){
    userName = "Jan Kowalski";
}

if (!userName) { userName = "Jan Kowalski";}

*/
/*
if(!name = ""){
    name="";
    message = "Please add name";
}
*/

/*
let age = 17;

if(age >= 18){
    console.log("Welcome");
}
else{
    console.log("You don't have accessto ...");
}
*/

let a = b = 1;

let c = 2;

if(a === b){
    if(a === c){
        console.log("a equals c");
    }else {
        console.log("a doesn't equals c");
    }
}else {
    console.log("a doesn't equals b");
}