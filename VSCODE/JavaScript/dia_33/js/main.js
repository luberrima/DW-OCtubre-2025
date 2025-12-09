"use strict"

//nivel 1
let btn1 = document.querySelector(".btn1")
let div1 = document.querySelector(".div1")

const handleAnimation1 = () => {
        div1.classList.toggle("animation1")
}

btn1.addEventListener("click", () => {
    handleAnimation1()
})

//
let p2 = document.querySelector(".p2")
let btn2 = document.querySelector(".btn2")

const handleAnimation2 = () => {
    p2.classList.remove("fuchsia");
    p2.style.color = "green"
}

btn2.addEventListener("click", () => {
    handleAnimation2()
})

//
let div3 = document.querySelector(".div3")
let btn3 = document.querySelector(".btn3")

const handleAnimation3 = () => {
    div3.classList.toggle("div3-animation")
}

btn3.addEventListener("click", () => {
    handleAnimation3()
})

//
let btn4 = document.querySelector(".btn4")
let div4 = document.querySelector(".div4")
let count = 1

const handleAnimation4 = () => {
    div4.classList.add("display");

    // color aleatorio
    let randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    div4.style.backgroundColor = randomColor;

    // número incremental
    div4.textContent = contador;
    contador++;
}

btn4.addEventListener("click", () => {
    handleAnimation4()
})