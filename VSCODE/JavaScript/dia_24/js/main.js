"use strict"

//nivel 2
const submit = document.querySelector("button");
const textarea = document.querySelector("#textarea");
const text = document.querySelector(".texto");

submit.addEventListener("click", () => {
    text.innerHTML = textarea.value
})

//nivel 3
const submit2 = document.querySelector(".button2");
const showResult = document.querySelector(".result")

submit2.addEventListener("click", () => {
    const num1 = parseInt(document.querySelector("#num1").value);
    const num2 = parseInt(document.querySelector("#num2").value);
    showResult.innerHTML = num1 + num2;
})


