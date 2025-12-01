"use strict"

//nivel 1
const array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log("array1:", array1)
console.log("Posiciones 3 y 6:", array1[3], "y", array1[6]);
console.log("tamaño del array:", array1.length);

array1.unshift("elemento al principio");
console.log("añadir elemento al principio del array:", array1)

array1.push("elemento al final")
console.log("añadir elemento al final:", array1)

array1.splice(5, 2)
console.log("array1 con elementos quitados:", array1)

//nivel 2
let array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log("Posición del 3:", array2.indexOf(3));
console.log("array2 dado la vuelta:", array2.reverse())
array2.reverse()
console.log("array2 convertido a string", array2.join())

let array3 = array2.splice(",")
console.log("volver a convertirlo en array:", array3)

array3.forEach((value, index) => {
    console.log("valor:", value, ", índice:", index)
})

array3.forEach((value, index) => {
   array3[index] = value + index
})
console.log(array3)
