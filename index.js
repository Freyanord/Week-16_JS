const RenaultModels = [
    { name: 'Clio', price: 100 },
    { name: 'Duster', price: 150 },
]
const OpelModels = [
    { name: 'Zafira', price: 150 },
    { name: 'Crossland', price: 200 },
]
const MazdaModels = [
    { name: '6', price: 200 },
    { name: 'CX-5', price: 250 },
]
const JaguarModels = [
    { name: 'F-type', price: 250 },
    { name: 'E-Race', price: 300 },
]

const brand = document.getElementById('brands');
const modelSelect = document.getElementById('model');
let sumPrice = 0;

const renderModel = (array) => {
    let modelHTML = '';
    array.forEach((model) => {
        modelHTML += `<option value="${model.price}">${model.name}</option>`
    })
    modelSelect.innerHTML = modelHTML;
    document.getElementById('model-list').className = 'visible';
}

const onBrandChange = () => {
    const indexOfChosen = brand.selectedIndex;
    const chosenBrand = brand.options[indexOfChosen].innerText;
    const brandSum = 0;
    switch (chosenBrand) {
        case 'Renault':
            renderModel(RenaultModels);
            brandSum = Number(brand.options[indexOfChosen].value);
            break;
        case 'Opel':
            renderModel(OpelModels);
            break;  
        case 'Mazda':
            renderModel(MazdaModels);
            break; 
        case 'Jaguar':
            renderModel(JaguarModels);
            break; 
            default:
                sumPrice += Number(brand.options[indexOfChosen].value);
    }
}

const onOldClick = () => {
    document.getElementById('owner').className = 'visible';
}

const onNewClick = () => {
    document.getElementById('owner').className = 'invisible';
}

const onCount = () => {
    const brandPrice = Number(brand.value);



}
