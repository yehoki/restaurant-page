// import {makeDOM, removeDOM} from './index.js';


/*----------------------------------------------------
                About page factory
----------------------------------------------------*/

// const makeAboutPage = () => {
//     const main = document.createElement('main');
//     main.innerHTML = 'About Page';
//     return main;
// }

// const onAboutClick = () => {
//     removeDOM();
//     makeDOM(makeAboutPage());
// }

const makeAboutPage = () => {
    const main = document.createElement('main');
    main.innerHTML = 'About Page';
    main.textContent = 'hehehe'
    return main;
}


export {
    makeAboutPage,
}