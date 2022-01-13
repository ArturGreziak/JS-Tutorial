// Number
/*
-64 bit floating-point 
- IEEE 754 standard

1.7976931348623157 X 10 ** 308
5 X 10 ** -324

-9007,199,254,470,992(-2**53)-9007,199,254,470,992(2**53)
*/

/*
Dziesiętny system liczbowy 
9
19943

Szesnastkowy system liczbowy zakres 0 - 9 a - f lub A - F
0xff -> 255
0X0ff -> 15

Dwójkowy system liczbowy zakres 0 - 1
0b101 -> 5
0B10 -> 2

Ósemkowy system liczbowy zakres 0 - 7 
0o311 -> 201
0O377 -> 255
*/
// Literały zmienno przecinkowe
/*
2.58
27.58
0.334
2.04e12
1.23E-15
*/
let milion = 1_000_000;
console.log("milion", milion); // 1000000
let bytes = 0xFF_AC_01; // 16755713

// Operatory Arytmetyczne 

/* 
+ Dodawanie 
- Odejmowanie
* Mnożenie
/ Dzielenie
** Potęgowanie
% Modulo 
Math.pow(2,8) // 256 
*/

// Specjalne liczby

/*
NaN // not-a-number
Infinity
-Infinity
*/

console.log(typeof(NaN));
console.log(typeof(Infinity));
console.log(typeof(-Infinity));

/*
1/0 // Infinity
-1/0 // -Infinity
0/0 //NaN
Infinity/Infinity // NaN
*/

const m = NaN;

m === NaN // false
m != m // true 
Number.isNaN(m); //true