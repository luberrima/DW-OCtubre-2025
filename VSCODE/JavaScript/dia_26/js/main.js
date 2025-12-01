"use strict"

//ej 1
let a = 3;
if (a > 0) {
    console.log(`${a} es mayor que 0`);
}

//ej 2
const edad = 13;
if (edad >= 18) {
    console.log("Es mayor de edad")
} else {
    console.log("Es menor de edad")
};

//ej 3
let num = 6

if (num > 50) {
    console.log("Es mayor de 50")
} else if (num < 5) {
    console.log("Es menor de 5")
} else {
    console.log("Está entre 5 y 50")
}

//ej 4
const fruta = "manzana";

switch (fruta) {
    case "manzana":
        console.log("Es una manzana");
        break;
    case "cereza":
        console.log("Es una cereza");
        break;
    case "naranja":
        console.log("Es una naranja");
        break;
    default:
        console.log("No es una fruta");
        break;
}

//ej 5
let num1 = 1;

for (let i = 0; i < 10; i++) {
    num1 = num1 + "a";
    console.log("num1 dentro del for:", num1);
};

console.log("num1 fuera del for:", num1);

//ej 6
let num2 = 1;

while (num2 < 10) {
    num2++;
    console.log("num2 dentro del while:", num2);
};
console.log("num2 fuera del while:", num2);

//ej 7
let num3 = 0;
do {
    num3++;
    console.log("num3 dentro de do:", num3);
} while (num3 < 20);

//ej 8
let ciudades = ["sevilla", "madrid", "albacete"];
ciudades.forEach((ciudad) => console.log(`Estás en ${ciudad}`));