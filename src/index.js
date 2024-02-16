import './style.css';

import renderHome from './home';
import renderMenu from './menu';
import renderContact from './contact';

function setActiveButton(button) {
    const activeButtons = document.querySelectorAll('.nav-btn');

    activeButtons.forEach(activeButton => {
    activeButton.classList.remove('active');
    });
    button.classList.add('active');
};

function navControl() {
    // select buttons
    const homeButton = document.querySelector('.nav-home');
    const menuButton = document.querySelector('.nav-menu');
    const contactButton = document.querySelector('.nav-contact');

    // activated the selected button
    homeButton.addEventListener('click', (e) => {
        if (e.target.classList.contains('active')) {
            return;
        }
        setActiveButton(homeButton);
        renderHome()
    });
    menuButton.addEventListener('click', (e) => {
        if (e.target.classList.contains('active')) {
            return;
        }
        setActiveButton(menuButton);
        renderMenu()
    });
    contactButton.addEventListener('click', (e) => {
        if (e.target.classList.contains('active')) {
            return;
        }
        setActiveButton(contactButton);
        renderContact()
    });
};

navControl();
renderHome();