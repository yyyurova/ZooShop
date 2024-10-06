// document.querySelector('.detailed').addEventListener('click', () => {
//     const card = document.querySelector('.card');

//         card.style.display = 'block';
//     } 
// );

// Получаем элементы
document.addEventListener('DOMContentLoaded', function () {
    var cards = document.getElementsByClassName("modal");
    var imgs = document.getElementsByClassName("card");
    var openModals = document.getElementsByClassName("detailed");
    var spans = document.getElementsByClassName("close");

    // Добавляем обработчик события для каждой ссылки
    for (let i = 0; i < openModals.length; i++) {
        openModals[i].addEventListener('click', function () {
            cards[i].style.display = "flex";
            // imgs[i].src = "card1.png"; // Укажите путь к вашей картинке
        });
    }

    // Добавляем обработчик события для каждой кнопки закрытия
    for (let i = 0; i < spans.length; i++) {
        spans[i].addEventListener('click', function () {
            cards[i].style.display = "none";
        });
    }

    // Закрываем модальное окно при клике вне его
    window.addEventListener('click', function (event) {
        for (let i = 0; i < cards.length; i++) {
            if (event.target == cards[i]) {
                cards[i].style.display = "none";
            }
        }
    });
});




