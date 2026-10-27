const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

menuBtn.addEventListener('click', () => {

    const isOpen = !mobileMenu.classList.contains('hidden');

    mobileMenu.classList.toggle('hidden', isOpen);
    mobileMenu.classList.toggle('flex', !isOpen);

    menuBtn.setAttribute('aria-expanded', String(!isOpen));

});