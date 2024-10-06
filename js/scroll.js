// Функция для прокрутки вверх
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Показ иконки при прокрутке страницы
window.addEventListener('scroll', () => {
    const scrollToTopButton = document.querySelector('.scroll-to-top');
    if (window.scrollY > 300) {
        scrollToTopButton.style.display = 'block';
    } else {
        scrollToTopButton.style.display = 'none';
    }
});

