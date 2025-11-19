"use strict"

document.querySelector(".a").innerHTML="Lorem Ipsum qué dolor mae"

document.querySelector(".b").style.color = "blue"


function changeColor(newColor){
    document.querySelector(".c").style.color = newColor;
}

//nivel 2
const pi = 3.14;
let radio = 16;

function area(r) {
    return pi * r**2;
}

console.log(area(radio));

//nivel 3
const btn = document.querySelector(".btn");

btn.addEventListener('click', () => {
    alert('Botón clickeado');
})