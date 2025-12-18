"use strict";

const swiper = new Swiper('.swiper', {
    loop: true,

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    scrollbar: {
        el: '.swiper-scrollbar',
    },
});

///


const sliderWindow = document.querySelector(".slider-window");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

function getScrollAmount() {
    return sliderWindow.offsetWidth;
}

nextBtn.addEventListener("click", () => {
    sliderWindow.scrollBy({
        left: getScrollAmount(),
        behavior: "smooth"
    });
});

prevBtn.addEventListener("click", () => {
    sliderWindow.scrollBy({
        left: -getScrollAmount(),
        behavior: "smooth"
    });
});
