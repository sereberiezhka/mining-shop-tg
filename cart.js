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
    displayCartCount(cart); // Вызываем функцию displayCartCount(), чтобы обновить счетчик корзины
}

// Функция для удаления товара из корзины
function removeFromCart(product) {
    console.log('Товар удален из корзины:', product); // Выводим сообщение в консоль

    // 1. Получаем текущую корзину.
    const cart = getCart();

    // 2. Находим индекс товара, который нужно удалить, в массиве корзины.
    const productIndex = cart.findIndex(item => item.name === product.name); // Ищем индекс товара по имени

    // 3. Если товар найден в корзине (индекс не равен -1).
    if (productIndex !== -1) {
        // 4. Удаляем товар из массива корзины, используя метод splice().
        cart.splice(productIndex, 1); // Удаляем 1 элемент по найденному индексу
        console.log('Товар удален из массива корзины. Обновленная корзина:', cart); // Выводим обновленную корзину в консоль

        // 5. Сохраняем обновленную корзину в localStorage.
        localStorage.setItem('shoppingCart', JSON.stringify(cart));

        // 6. Обновляем отображение счетчика корзины.
        displayCartCount(cart); // Вызываем displayCartCount() и передаем обновленную корзину
    } else {
        console.log('Товар не найден в корзине для удаления:', product); // Сообщение, если товар не найден в корзине
    }
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
function displayCartCount(cart) { // <---  Теперь функция принимает аргумент 'cart'
    const cartCount = getCart().length;
    console.log('В корзине товаров:', cartCount);

    // **Временно выводим массив cart в консоль, чтобы убедиться, что данные корзины передаются**
    console.log('Содержимое корзины (передано в displayCartCount):', cart); // <---  ДОБАВЛЕНА ЭТА СТРОКА

    const cartCountElement = document.getElementById('cart-count');

    if (cartCountElement) {
        cartCountElement.textContent = cartCount;
        console.log('Текст счетчика обновлен на:', cartCount);
    } else {
        console.error('Элемент счетчика корзины не найден на странице!');
    }
}

// ***  Временный вызов displayCartCount для проверки (можно убрать потом) ***
displayCartCount();