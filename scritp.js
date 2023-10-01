const container = document.querySelector('.container');
const btn = document.querySelector('.hamburger-menu');

btn.addEventListener('click', () => {
    container.classList.toggle('change');
})