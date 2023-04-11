let currentPage = 1;

const catalogList = document.querySelector('.catalog__list');
const catalogPageQuantity = document.querySelector('.page-list');
const prevPageBtn = document.querySelector('.prev-page');
const nextPageBtn = document.querySelector('.next-page');

const catalogProducts = [
  {
    id: generateRandomId(),
    title: 'Slim Fit Boxers - Modern Cotton',
    prevPrice: 9600,
    currentPrice: 4800,
    img: './img/catalog/product-1.png',
  },
  {
    id: generateRandomId(),
    title: 'Slim Fit Boxers - Modern Cotton',
    prevPrice: 9600,
    currentPrice: 4800,
    img: './img/catalog/product-2.png',
  },
  {
    id: generateRandomId(),
    title: 'Slim Fit Boxers - Modern Cotton',
    prevPrice: 9600,
    currentPrice: 4800,
    img: './img/catalog/product-3.png',
  },
  {
    id: generateRandomId(),
    title: 'Slim Fit Boxers - Modern Cotton',
    prevPrice: null,
    currentPrice: 4800,
    img: './img/catalog/product-1.png',
  },
  {
    id: generateRandomId(),
    title: 'Slim Fit Boxers - Modern Cotton',
    prevPrice: null,
    currentPrice: 4800,
    img: './img/catalog/product-2.png',
  },
  {
    id: generateRandomId(),
    title: 'Slim Fit Boxers - Modern Cotton',
    prevPrice: null,
    currentPrice: 4800,
    img: './img/catalog/product-3.png',
  },
  {
    id: generateRandomId(),
    title: 'Slim Fit Boxers - Modern Cotton',
    prevPrice: null,
    currentPrice: 4800,
    img: './img/catalog/product-1.png',
  },
  {
    id: generateRandomId(),
    title: 'Slim Fit Boxers - Modern Cotton',
    prevPrice: null,
    currentPrice: 4800,
    img: './img/catalog/product-2.png',
  },
  {
    id: generateRandomId(),
    title: 'Slim Fit Boxers - Modern Cotton',
    prevPrice: null,
    currentPrice: 4800,
    img: './img/catalog/product-3.png',
  },
  {
    id: generateRandomId(),
    title: 'Slim Fit Boxers - Modern Cotton',
    prevPrice: null,
    currentPrice: 4800,
    img: './img/catalog/product-1.png',
  },
  {
    id: generateRandomId(),
    title: 'Slim Fit Boxers - Modern Cotton',
    prevPrice: null,
    currentPrice: 4800,
    img: './img/catalog/product-1.png',
  },
  {
    id: generateRandomId(),
    title: 'Slim Fit Boxers - Modern Cotton',
    prevPrice: null,
    currentPrice: 4800,
    img: './img/catalog/product-1.png',
  },
];

const colors = [
  {
    id: 7,
    name: 'Белый',
    value: 'white',
  },
  {
    id: 8,
    name: 'Серый',
    value: 'gray',
  },
  {
    id: 9,
    name: 'Черный',
    value: 'black',
  },
  {
    id: 10,
    name: 'Cиний',
    value: 'blue',
  },
  {
    id: 11,
    name: 'Многоцветный',
    value: 'multicolor',
  },
];
const sizes = [
  {
    id: 12,
    name: 'S',
  },
  {
    id: 13,
    name: 'M',
  },
  {
    id: 14,
    name: 'L',
  },
  {
    id: 15,
    name: 'XL',
  },
  {
    id: 16,
    name: 'XXL',
  },
];

function valueWithSpaces(e, val) {
  e.target.value = val
    .toString()
    .replace(/[^0-9.]/g, '')
    .replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
}

function generateRandomId() {
  return Math.floor((1 + Math.random()) * 0x10000)
    .toString(16)
    .substring(1);
}

function setCatalogProducts(page, array) {
  array.forEach((product, i) => {
    catalogList.insertAdjacentHTML(
      'afterbegin',
      `
          <div class='catalog__product' data-id=${product.id}>
            <div class='img__wrapper'>
              <img src=${product.img} alt='product' />
            </div>
            <h6>${product.title}</h6>
            <p>${product.prevPrice ? `<span>${product.prevPrice}</span>` : ''}
              ${product.currentPrice}</p>
              <button class='add-to-cart btn-outline' data-id=${
                product.id
              }>Добавить в корзину</button>
            <div class='product-params'>
              <div class='params'>
                <label> Цвет
                  <select>
                    ${colors.map((color) => `<option>${color.name}</option>`)}
                  </select>
                </label>
                <label> Размер
                  <select>
                    ${sizes.map((color) => `<option>${color.name}</option>`)}
                  </select>
                </label>
                <label> Количество
                  <div>
                    <img src='./img/svg/minus.svg' alt='product' />
                    <p>1</p>
                    <img src='./img/svg/plus.svg' alt='product' />
                  </div>
                </label>
              </div>
              <div class='params-btns'>
                <button class='cancel btn-outline' data-id=${
                  product.id
                } data-value='cancel'>Отменить</button>
                <button class='save-btn btn-fill' data-id=${
                  product.id
                } data-value='save'>Добавить</button>             
              </div>
            </div>
            <button class='close-btn'>
              <svg width='24px' height='24px'>
                <use href='./img/svg/header/clear-btn.svg#clear-btn' />
              </svg>
            </button>
          </div>
        `
    );
  });

  let catalogPageQuantityChildren = Array.from(catalogPageQuantity.children);
  catalogPageQuantityChildren.forEach((button) => {
    button.classList.remove('active');
  });

  catalogPageQuantity.children[page - 1].classList.add('active');
}

setPageQuantity();
setCatalogProducts(1, catalogProducts);

function setPageQuantity() {
  switch (catalogProducts.length) {
    case 42 || 84 || 126:
      for (let i = 1; i <= 4; i++) {
        catalogPageQuantity.insertAdjacentHTML(
          'beforeend',
          `
        <li><button class='page-btn'>${i}</button></li>
      `
        );
      }
      break;

    default:
      let pages = Math.ceil(catalogProducts.length / 10);

      for (let i = 1; i <= pages; i++) {
        catalogPageQuantity.insertAdjacentHTML(
          'beforeend',
          `
          <li><button class='page-btn'>${i}</button></li>
        `
        );
      }
      break;
  }
}

function handleTogglePage(value) {
  catalogList.innerHTML = '';
  setCatalogProducts(value, catalogProducts);
  currentPage = value;

  prevPageBtn.setAttribute('data-value', value - 1);
  nextPageBtn.setAttribute('data-value', +value + 1);
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });

  if (+value === 1) {
    prevPageBtn.disabled = true;
  } else {
    prevPageBtn.disabled = false;
  }

  if (+value === Math.ceil(catalogProducts.length / 10)) {
    nextPageBtn.disabled = true;
  } else {
    nextPageBtn.disabled = false;
  }
}

catalogPageQuantity.addEventListener('mousedown', (e) => {
  const { innerText } = e.target;
  if (e.target.classList.contains('page-btn')) {
    handleTogglePage(innerText);
  }
});

prevPageBtn.addEventListener('click', (e) => {
  handleTogglePage(e.target.dataset.value);
});

nextPageBtn.addEventListener('click', (e) => {
  handleTogglePage(e.target.dataset.value);
});

catalogList.addEventListener('click', (e) => {
  const { id, value } = e.target.dataset;
  if (id) {
    const favoritesArray = Array.from(catalogList.children);
    favoritesArray.forEach((prod) => {
      prod.dataset.id === id ? prod.classList.add('active') : prod.classList.remove('active');
    });

    if (value === 'cancel') {
      const favoritesArray = Array.from(catalogList.children);
      favoritesArray.forEach((prod) => {
        prod.dataset.id === id && prod.classList.remove('active');
      });
    } else if (value === 'save') {
    }
  }
});
