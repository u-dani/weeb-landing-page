const menu = document.querySelector('.js-menu-mobile');

menu.addEventListener('click', e => {
    e.preventDefault();
    menu.classList.toggle('is-open')
})

