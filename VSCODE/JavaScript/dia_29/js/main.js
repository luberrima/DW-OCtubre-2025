"use strict"

//nivel 1
function pares() {
    for (let i=1; i<=100; i++) {
        if (i%2 === 0) {
            console.log(i)
        }
    }
}
pares();

function cuadrado1() {
    for (let i = 0; i<5; i++) {
        let fila = ""
        for (let j = 0; j<5; j++) {
            fila += "* "
        }
        console.log(fila)
    }
}
cuadrado1()

function cuadrado2() {
    for (let i = 0; i < 5; i++) {
        let fila = "";

        for (let j = 0; j < 5; j++) {
            
            if (i === 0 || i === 4 || j === 0 || j === 4) {
                fila += "* ";
            } else {
                fila += "  ";
            }
        }

        console.log(fila);
    }
}

cuadrado2();

//nivel 2
function paresParam() {
    let inicio = 4
    let fin = 27
    for (let i = inicio; i <= fin; i++) {
        if (i % 2 === 0) {
            console.log(i)
        }
    }
}
paresParam();

function cuadrado1Param() {
    let size = 4
    for (let i = 0; i < size; i++) {
        let fila = ""
        for (let j = 0; j < size; j++) {
            fila += "* "
        }
        console.log(fila)
    }
}
cuadrado1Param()

