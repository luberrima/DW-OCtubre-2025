"use strict"

const tabs = document.querySelectorAll('[role="tab"]');
const content = document.querySelectorAll('.contenido');

tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => {
        
        content.forEach((content, i) => {
            content.classList.toggle('visible', i === index);
        });

        
        tabs.forEach((t, i) => {
            t.setAttribute('aria-selected', i === index);
        });
    });
});

