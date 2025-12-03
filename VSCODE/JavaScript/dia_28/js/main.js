"use strict"

//nivel 2

//generar color aleatorio
function randomColor() {
    let min = 1;
    let max = 255;
    const r = Math.floor(Math.random() * (max - min + 1)) + min;
    const g = Math.floor(Math.random() * (max - min + 1)) + min;
    const b = Math.floor(Math.random() * (max - min + 1)) + min;

    return `rgb(${r}, ${g}, ${b})`;
}

//cambiarle color a los botones cuando se haga click
let btns = document.querySelectorAll("button");

btns.forEach((btn) => {
    btn.addEventListener ("click", () => {
        btn.style.backgroundColor = randomColor()
    })
})