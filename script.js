let popupBg = document.querySelector('.popup__bg');  // Фон попап окна
let popup = document.querySelector('.popup');  // Само окно
let openPopupButton = document.querySelector('.open-popup');  // Кнопка для показа окна
let closePopupButtonOuter = document.querySelector('.close-popup-outer');  // Кнопка 1 для скрытия окна
let closePopupButtonInner = document.querySelector('.close-popup-inner');  // Кнопка 2 для скрытия окна


// выводим окно с формой
if (typeof openPopupButton !== 'undefined' && openPopupButton != null) {
    openPopupButton.addEventListener('click', (e) => {  // Для каждой вешаем обработчик событий на клик
        popupBg.classList.add('active');  // Добавляем класс 'active' для фона
        popup.classList.add('active');  // И для самого окна
    })
};


// скрытие окна при нажатии на крестик 1
if (typeof closePopupButtonOuter !== 'undefined' && closePopupButtonOuter != null) {
    closePopupButtonOuter.addEventListener('click', () => {  // Вешаем обработчик на крестик
        popupBg.classList.remove('active');  // Убираем активный класс с фона
        popup.classList.remove('active');  // И с окна
    });
};

// скрытие окна при нажатии на крестик 2
if (typeof closePopupButtonInner !== 'undefined' && closePopupButtonInner != null) {
    closePopupButtonInner.addEventListener('click', () => {  // Вешаем обработчик на крестик
        popupBg.classList.remove('active');  // Убираем активный класс с фона
        popup.classList.remove('active');  // И с окна
    });
};


// прячем попап при клике на окно
document.addEventListener('click', (e) => {  // Вешаем обработчик на весь документ
    if(e.target === popupBg) {  // Если цель клика - фот, то:
        popupBg.classList.remove('active');  // Убираем активный класс с фона
        popup.classList.remove('active');  // И с окна
    }
});
