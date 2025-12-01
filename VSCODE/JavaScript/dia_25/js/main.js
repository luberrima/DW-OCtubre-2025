"use strict"

//NIVEL 1
const alumno = {
    nombre: "Lucía",
    apellido: "Franco",
    edad: 25,
    curso: "DW",
    nombreApellido: () => console.log(`Nombre y apellido: ${nombre} ${apellido}`)
};

console.log("NIVEL 1:");
console.log(`Nombre: ${alumno.nombre}`);
console.log(`Apellido: ${alumno.apellido}`);
console.log(`Edad: ${alumno.edad}`);
console.log(`Curso: ${alumno.curso}`);

const {nombre, apellido, edad, curso} = alumno;
console.log("Nombre: ", nombre);
console.log("Apellido: ", apellido);
console.log("Edad: ", edad);
console.log("Curso: ", curso);

alumno.nombreApellido();

//NIVEL 2
const fichaAlumno = {...alumno};

const array1 = [1, 2, 3];
const array2 = ["sevilla", "madrid", "albacete"];
const array3 = [100, 300, "hola"];
const array4 = [...array1, ...array2, ...array3];
console.log("Array:", array4);

function rest(...numeros) {
    return numeros.reduce((a, b) => a + b, 0);
}

console.log(rest(1, 2, 500, 400));

const num = [1, 2, 3, 4, 5, 6, 7];
const [index1, index2, index3, ...index] = num;
console.log("Index1:", index1);
console.log("Index2:", index2);
console.log("Index3:", index3);
console.log("Index:", index);

