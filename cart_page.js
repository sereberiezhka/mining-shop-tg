// cart_page.js

// Функция для отображения товаров в корзине на странице cart.html
function displayCartItems() {
    const cartItemsContainer = document.getElementById('cart-items-container'); // Находим контейнер для товаров корзины

    if (cartItemsContainer) { // Проверяем, найден ли контейнер на странице
        const cart = getCart(); // Получаем текущую корзину из localStorage

        if (cart.length > 0) { // Проверяем, есть ли товары в корзине
            // Если в корзине есть товары, начинаем их отображать

            cartItemsContainer.innerHTML = ''; // Очищаем контейнер перед добавлением новых товаров

            cart.forEach(product => { // Перебираем массив товаров в корзине
                const cartItemElement = document.createElement('div'); // Создаем div для каждого товара
                cartItemElement.className = 'cart-item'; // Добавляем класс для стилизации (CSS)

                // ***  Здесь нужно будет добавить HTML-код для отображения информации о товаре (изображение, название, цена и т.д.) и кнопки "Удалить"  ***
                cartItemElement.textContent = product.name; // Пока что просто выводим название товара

                cartItemsContainer.appendChild(cartItemElement); // Добавляем div товара в контейнер
            });


        } else {
            // Если корзина пуста, показываем сообщение
            cartItemsContainer.innerHTML = '<p>Ваша корзина пуста.</p>';
        }
    } else {
        console.error('Контейнер для товаров корзины не найден на странице!'); // Сообщение об ошибке, если контейнер не найден
    }
}

// Вызываем функцию displayCartItems() при загрузке страницы cart.html, чтобы отобразить товары в корзине
displayCartItems();