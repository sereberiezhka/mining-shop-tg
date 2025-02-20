async function loadManufacturers() {
    const response = await fetch('products.json');
    const data = await response.json();
    const manufacturers = data.manufacturers;

    const manufacturersFilterDiv = document.getElementById('manufacturers-filter');
    const modelsListDiv = document.getElementById('models-list');

    manufacturers.forEach(manufacturer => {
        const manufacturerButton = document.createElement('button');
        manufacturerButton.textContent = manufacturer.name;
        manufacturerButton.addEventListener('click', () => {
            displayModels(manufacturer.models);
        });
        manufacturersFilterDiv.appendChild(manufacturerButton);
    });
}
function displayModels(models) {
        const modelsListDiv = document.getElementById('models-list');
        modelsListDiv.innerHTML = '';
    
        models.forEach(model => {
            // **ИСПОЛЬЗУЕМ createModelCard() ЗДЕСЬ, чтобы создать карточку товара, включая кнопку!**
            const modelCard = createModelCard(model, "Производитель"); // Вызываем createModelCard() !
            modelsListDiv.appendChild(modelCard); // Добавляем созданную карточку в список
        });
}

function createModelCard(model, manufacturerName) {
    const modelCard = document.createElement('div');
    modelCard.className = 'model-card';

    const modelImage = document.createElement('img');
    modelImage.src = model.image;
    modelImage.alt = model.name;
    modelCard.appendChild(modelImage);

    const modelName = document.createElement('h3');
    modelName.textContent = model.name;
    modelCard.appendChild(modelName);

    const manufacturerElement = document.createElement('p');
    manufacturerElement.textContent = `Производитель: ${manufacturerName}`;
    modelCard.appendChild(manufacturerElement);

    const modelDescription = document.createElement('p');
    modelDescription.textContent = model.description;
    modelCard.appendChild(modelDescription);

    if (model.price) {
        const modelPrice = document.createElement('p');
        modelPrice.textContent = `Цена: ${model.price} ₽`;
        modelCard.appendChild(modelPrice);
    }

    // **Добавляем кнопку "Добавить в корзину"**
    const addToCartButton = document.createElement('button');
    addToCartButton.textContent = 'Добавить в корзину';
    addToCartButton.addEventListener('click', () => {
        // **Здесь будет логика добавления в корзину (реализуем позже)**
        alert(`Товар "${model.name}" добавлен в корзину!`); // Пока просто сообщение
    });
    modelCard.appendChild(addToCartButton);

    return modelCard;
}