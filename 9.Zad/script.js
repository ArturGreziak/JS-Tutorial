// Typ prymitywnym BigInt

// ES2020 

// 2 ** 53 - 1

console.log(typeof(9007199254740991n));

/*

Dziesiętny system liczbowy // 9007199254740991n

Dwójkowy system liczbowy // 0b111111101n 509n

Ósemkowy system liczbowy // 0o756012345n 129504485n

Szesnastkowy system liczbowy 0xABCDEF321n 46118400801n

BigInt(Number.MAX_SAFE_INTEGER); // 9007199254740991n

BigInt(Number.MAX_SAFE_INTEGER + 1); // 9007199254740992n

BigInt("123"); // 123n

Operatory porównania

1 < 4n true
5 > 3n true
0 == 0n true 
0 === 0n false

*/