// Burger menu toggle
const menuBurger = document.getElementById('menu');
const navLinks = document.querySelector('.nav-links');

menuBurger.addEventListener('click', () => {
    navLinks.classList.toggle('active');  // բացում/փակում
    menuBurger.classList.toggle('open');  // փոխում է ☰ → ✖
});
