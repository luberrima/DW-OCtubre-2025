"use strict"

const btn1 = document.querySelector('.btn1');
const btn2 = document.querySelector('.btn2');
const contenedor = document.querySelector('.contenedor');

async function cargarContenido(url) {
    try {
        
        const response = await fetch(url);

        
        const html = await response.text();

        
        contenedor.classList.remove('visible');

        setTimeout(() => {
            contenedor.innerHTML = html;
            contenedor.classList.add('visible');
        }, 200);

    } catch (error) {
        contenedor.innerHTML = '<p>Error al cargar el contenido</p>';
        console.error(error);
    }
}

btn1.addEventListener('click', () => {
    cargarContenido('content-1.html');
});

btn2.addEventListener('click', () => {
    cargarContenido('content-2.html');
});
