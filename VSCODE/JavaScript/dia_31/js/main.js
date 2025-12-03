"use strict"

//nivel 1

//generar color aleatorio
function randomColor() {
    let min = 1;
    let max = 255;
    const r = Math.floor(Math.random() * (max - min + 1)) + min;
    const g = Math.floor(Math.random() * (max - min + 1)) + min;
    const b = Math.floor(Math.random() * (max - min + 1)) + min;

    return `rgb(${r}, ${g}, ${b})`;
}

//cambiar color
let items = document.querySelectorAll(".lista1");
items.forEach((item) => {
    item.style.backgroundColor = randomColor()
})

//parrafos
let texts = document.querySelectorAll(".p1")
texts.forEach((text) => {
    text.textContent += "\u{1F60A}"
})

//botones
let btns = document.querySelectorAll(".btn")
btns.forEach((btn, index) => {
    btn.textContent = `Botón ${index + 1}`
})

//nivel 2

//lista tareas
let tasks = document.querySelectorAll(".lista2")
tasks.forEach((task) => {
    task.addEventListener("click", () => {
        task.style.textDecoration = "line-through"
    })

    task.addEventListener("dblclick", () => {
        task.style.textDecoration = "none"
    })
})

//cards
let cards = document.querySelectorAll(".card")
cards.forEach((card) => {
    let precio = card.querySelector(".precio")
    //cambiar color del precio
    if (Number(precio.textContent) >= 60) {
        precio.style.color = "red"
    } else {
        precio.style.color = "green"
    }
})

//borrar bloques
let nivel1 = document.querySelector(".nivel1")
let nivel2 = document.querySelector(".nivel2")

let removeBtn1 = document.querySelector(".remove1")
let removeBtn2 = document.querySelector(".remove2")


removeBtn1.addEventListener("click", () => {
    nivel1.remove()
})

removeBtn2.addEventListener("click", () => {
    nivel2.remove()
})