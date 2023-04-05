// alert('Testing from index.js');
import './style.css';

const button = (className, text) => {
    const btn = document.createElement('button');
    btn.classList.add(className);
    btn.innerHTML = text;

    return btn;
}


function header() {
    const header = document.createElement('header');
    const buttons = document.createElement('div');
    buttons.classList.add('header-buttons');
    const homeButton = button('header-button', 'Home');
    const menuButton = button('header-button', 'Menu');
    const aboutButton = button('header-button', 'About');
    buttons.appendChild(homeButton);
    buttons.appendChild(menuButton);
    buttons.appendChild(aboutButton);
    header.appendChild(buttons);

    return header;
}

document.body.appendChild(header());