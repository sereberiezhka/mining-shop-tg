// cart.js

// Функция для добавления товара в корзину
function addToCart(product) {
    console.log('Товар добавлен в корзину:', product); // Выводим сообщение в консоль (для отладки)

    // 1. Получаем текущую корзину из localStorage (если есть), или создаем пустой массив, если корзина еще не создана.
    const cart = getCart(); // Используем функцию getCart() для получения текущей корзины

    // 2. Добавляем новый товар в массив корзины.
    cart.push(product); // Добавляем переданный объект product в массив cart

    // 3. Сохраняем обновленную корзину обратно в localStorage.
    localStorage.setItem('shoppingCart', JSON.stringify(cart)); // Преобразуем массив cart в JSON-строку и сохраняем в localStorage под ключом 'shoppingCart'

    // 4. Обновляем отображение счетчика корзины на странице.
    displayCartCount(); // Вызываем функцию displayCartCount(), чтобы обновить счетчик корзины
}


// Функция для получения текущего состояния корзины
function getCart() {
    console.log('Запрос на получение корзины'); // Выводим сообщение в консоль (для отладки)

    // 1. Получаем JSON-строку с данными корзины из localStorage по ключу 'shoppingCart'.
    const cartData = localStorage.getItem('shoppingCart');

    // 2. Проверяем, есть ли данные корзины в localStorage.
    if (cartData) {
        // Если данные есть, преобразуем JSON-строку обратно в JavaScript-массив и возвращаем его.
        return JSON.parse(cartData); // JSON.parse() преобразует JSON-строку обратно в массив
    } else {
        // Если данных нет (корзина пуста), возвращаем пустой массив.
        return []; // Возвращаем пустой массив, если корзина в localStorage пуста
    }
}

// Функция для отображения количества товаров в корзине (например, на значке корзины)
function displayCartCount() {
    const cartCount = getCart().length;
    console.log('В корзине товаров:', cartCount); // Оставляем это сообщение

    console.log('Функция displayCartCount() вызвана. Количество товаров в корзине:', cartCount); // <----  ДОБАВЛЯЕМ ЭТО СООБЩЕНИЕ

    const cartCountElement = document.getElementById('cart-count');

    if (cartCountElement) {
        console.log('Элемент счетчика найден:', cartCountElement); // <----  ДОБАВЛЯЕМ ЭТО СООБЩЕНИЕ
        cartCountElement.textContent = cartCount;
        console.log('Текст счетчика обновлен на:', cartCount); // <----  ДОБАВЛЯЕМ ЭТО СООБЩЕНИЕ
    } else {
        console.error('Элемент счетчика корзины не найден на странице!');
    }
}

// ***  Временный вызов displayCartCount для проверки (можно убрать потом) ***
displayCartCount();