const navigation = document.querySelector('.navigation');
const btn = document.querySelector('.hamburger-menu');

btn.addEventListener('click', () => {
    navigation.classList.toggle('change');
})