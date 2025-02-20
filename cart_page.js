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

                // ***  Расширенная HTML структура карточки товара в корзине  ***
                const productImage = document.createElement('img');
                productImage.src = product.image;
                productImage.alt = product.name;
                productImage.className = 'cart-item-image'; // Добавляем класс для CSS

                const productDetails = document.createElement('div');
                productDetails.className = 'cart-item-details'; // Контейнер для названия и цены

                const productName = document.createElement('h4');
                productName.textContent = product.name;

                const productPrice = document.createElement('p');
                productPrice.textContent = `Цена: ${product.price} ₽`;

                productDetails.appendChild(productName);
                productDetails.appendChild(productPrice);

                const removeButton = document.createElement('button');
                removeButton.textContent = 'Удалить';
                removeButton.className = 'remove-from-cart-button'; // Добавляем класс для CSS

                // ***  Добавляем обработчик события click для кнопки "Удалить"  ***
                removeButton.addEventListener('click', () => {
                    removeFromCart(product); // Вызываем функцию removeFromCart() из cart.js и передаем ей объект product

                    // *** После удаления товара, нужно обновить отображение корзины на странице ***
                    displayCartItems(); // **Сразу же вызываем displayCartItems() снова, чтобы обновить список товаров на странице**
                });

                cartItemElement.appendChild(productImage);
                cartItemElement.appendChild(productDetails);
                cartItemElement.appendChild(removeButton);

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