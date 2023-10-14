let icon_menu = document.querySelector('.nav-bar__icon');
let collapso = document.querySelector('.nav-bar__collapse');

icon_menu.addEventListener('click',() => {
    collapso.classList.toggle('show');
});