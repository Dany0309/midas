document.querySelector('.header__burger-menu').addEventListener('click', function() {
    this.classList.toggle('active');
    document.querySelector('.header__menu').classList.toggle('open');
})