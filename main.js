const infoPizza = document.querySelector('.info-pizza')
const input = document.querySelector('.seleccionar');
const seleccionarBtn = document.querySelector('.seleccionar-btn');
const errorMessage = document.querySelector('.error-message')
const Pizzas = [
    {
        id: 1,
        nombre: 'Mozzarella',
        precio: '$590',
        Ingredientes: ['Queso', 'Salsa', ],
        imagen: './img/mozzarella.jpg',
      },
      {
        id: 2,
        nombre: 'Especial',
        precio: '$800',
        Ingredientes: ['Queso', 'Salsa', 'Jamon'],
        imagen: './img/especial.jpg',
      },
      {
        id: 3,
        nombre: 'Napolitana',
        precio:  '$1000',
        Ingredientes: ['Queso', 'Salsa', 'Jamon', 'Tomate'],
        imagen: './img/napolitana.jpg',
      },
      {
        id: 4,
        nombre: 'Fugazza',
        precio: '$1100',
        Ingredientes: ['Queso', 'Cebolla'],
        imagen: './img/fugazza.jpg',
      },
      {
        id: 5,
        nombre: 'de Champignones',
        precio: '$1200',
        Ingredientes: ['Queso', 'Champignones', 'Jamon' ],
        imagen: './img/champignones.jpg',
      },
      {
        id: 6,
        nombre: 'de Cuatro Quesos',
        precio: '$1250',
        Ingredientes: ['Queso Azul', 'Parmesano', 'Cremoso', 'Mozzarella'],
        imagen: './img/cuatro-quesos.jpg',
      },
];

let nuevaPizzas = []

let savel = JSON.parse (localStorage.getItem('list')) || [];

const saveLocalStorage = (savel) => {
    localStorage.setItem('list', JSON.stringify(savel));
};

const pizzaId = () => {

    const filterId = input.value;

    if (!filterId.length) {
        errorMessage.style.visibility = 'visible';
        errorMessage.innerHTML = createHtmlErrorNoneText();
        nuevaPizzas = [];
        input.value = '';
        renderPizza(nuevaPizzas);
        return;

    } else if (filterId < 1 || filterId > 6) {
        errorMessage.style.visibility = 'visible';
        errorMessage.innerHTML = createHtmlErrorOptions()
        nuevaPizzas = [];
        input.value = '';
        renderPizza(nuevaPizzas);
        return;

    } else if (
      nuevaPizzas = Pizzas.filter(pizza => pizza.id === parseInt(filterId))
    ) {
        errorMessage.style.visibility = 'hidden';
    }

    renderPizza(nuevaPizzas);
    saveLocalStorage(nuevaPizzas);
}

const createHtmlPizza = pizzas => {
    return `<div class="infoPizza">
      <h6 class="id"><p>Nº: </p>${pizzas.id}</h6>
      <h2 class="title"><p> Variedad: </p>${pizzas.nombre}</h2>
      <h5 class="precio"><p> Precio: </p>${pizzas.precio}</h5> 
      <h4 class="ing"><p class="ing"> Ingredientes: </p>${pizzas.Ingredientes}</h4> 
      <img class= "card" src="${pizzas.imagen}" "alt=</img>
      </div>`
}

const createHtmlErrorNoneText = () => {
    return `<h4 class="message">Por favor, ingrese una opcion numeica !</h4>`
}

const createHtmlErrorOptions = () => {
    return `<h4 class="message">Opciones disponibles del 1 al 6 !</h4>`
}

const renderPizza = pizza => infoPizza.innerHTML = pizza.map(pizzita => createHtmlPizza(pizzita))

const init = () => {
    seleccionarBtn.addEventListener('click', pizzaId)
    errorMessage.style.visibility = 'hidden';
    
}

init();



