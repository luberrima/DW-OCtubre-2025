"use strict"

//nivel 1

//párrafo y botón
const p = document.querySelector(".p1");
const btn1 = document.querySelector(".btn1");

//se tienen que hacer las funciones antes
const handleClick1 = () => {
    if (p.style.color === "black") {
        p.style.transition = "color 1s ease"
        p.style.transition = "background-color 0.5s ease"
        p.style.backgroundColor = "black";
        p.style.color = "white"
    } else {
        p.style.transition = "color 1s ease"
        p.style.transition = "background-color 0.5s ease"
        p.style.color = "black";
        p.style.backgroundColor = "white"
    }
}

btn1.addEventListener("click", () => {
    handleClick1()
})

//div y botón

//1. declarar variables
const div1 = document.querySelector(".div1");
const btn2 = document.querySelector(".btn2");

//2. declarar funciones
const handleClick2 = () => {
    if (div1.style.width === "20vw") {
        div1.style.transition = "width 0.5s ease"
        div1.style.width = "80vw"
    } else {
        div1.style.transition = "width 0.5s ease"
        div1.style.width = "20vw"
    }
}

//3. lógica
btn2.addEventListener("click", () => {
    handleClick2()
})

//nivel 2
const div2 = document.querySelector(".div2");
const btn3 = document.querySelector(".btn3");
let counter = 0;

const handleClick3 = () => {
    counter++;
    if (counter % 2 === 0) {
        console.log("if:", counter)
        div2.style.transition = "transform 0.5s ease"
        div2.style.transform = "scale(1.2)"
    } else {
        console.log("else:", counter)
        div2.style.transition = "transform 0.5s ease"
        div2.style.transform = "rotate(45deg)"
    }
}

btn3.addEventListener("click", () => {
    handleClick3()
})

