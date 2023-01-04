window.addEventListener('DOMContentLoaded', () => {

    const hamburger = document.querySelector('.hamburger'),
            menu = document.querySelector('.menu'),
            menuLink = document.querySelectorAll('.menu_link');

    hamburger.addEventListener('click', () => {
        menu.classList.toggle('menu_active');
        hamburger.classList.toggle('hamburger_active');
    });

    menuLink.forEach(item => {
        item.addEventListener('click', () => {
            menu.classList.toggle('menu_active');
            hamburger.classList.toggle('hamburger_active');
        });
    });
});

