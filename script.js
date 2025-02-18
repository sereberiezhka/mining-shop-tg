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
        const modelCard = document.createElement('div');
        modelCard.classList.add('model-card');

        if (model.image) {
            const modelImage = document.createElement('img');
            modelImage.src = model.image;
            modelImage.alt = model.name;
            modelCard.appendChild(modelImage);
        }

        const modelName = document.createElement('h3');
        modelName.textContent = model.name;
        modelCard.appendChild(modelName);

        const modelDescription = document.createElement('p');
        modelDescription.textContent = model.description;
        modelCard.appendChild(modelDescription);

        const modelPrice = document.createElement('p');
        modelPrice.textContent = `Цена: ${model.price} руб.`;
        modelCard.appendChild(modelPrice);

        modelsListDiv.appendChild(modelCard);
    });
}