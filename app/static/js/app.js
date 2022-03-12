const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');
const fileBtn = document.getElementById('curr__file');
const mainBtn = document.getElementById('file__transfer');
const navbarBtn = document.getElementById('resume__btn');

menu.addEventListener('click', function() {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
})

mainBtn.addEventListener('click', function() {
    fileBtn.click();
})

navbarBtn.addEventListener('click', function() {
    fileBtn.click();
})