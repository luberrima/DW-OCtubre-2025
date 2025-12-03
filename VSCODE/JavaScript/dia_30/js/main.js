"use strict"

//nivel 1

let open = document.querySelector(".botones button:nth-child(1)");
open.addEventListener("click", () => {
    window.open("https://luberrima.com")
})

let close = document.querySelector(".botones button:nth-child(2)");
close.addEventListener("click", () => {
    window.close()
})

let moveTo = document.querySelector(".botones button:nth-child(3)");
moveTo.addEventListener("click", () => {
    window.moveTo(100, 200)
})

let resizeTo = document.querySelector(".botones button:nth-child(4)");
resizeTo.addEventListener("click", () => {
    window.resizeTo(600, 400)
})

let location = document.querySelector(".botones button:nth-child(5)");
location.addEventListener("click", () => {
    window.location.reload()
})