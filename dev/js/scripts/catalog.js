let currentPage = 1;
let activeFiltersArray = [];

const filterBar = document.querySelector('.filter-bar');
const filterBarTitle = document.querySelector('.filter-bar__title');
const filterResetButton = document.querySelector('.filter-bar__reset-btn');
const checkboxFilters = document.querySelectorAll('.filters input');
const activeFilterCounter = document.querySelector('.active-filter__counter');

const catalogList = document.querySelector('.catalog__list');
const catalogPageQuantity = document.querySelector('.page-list');
const productBanner = document.querySelector('.product-banner');
const prevPageBtn = document.querySelector('.prev-page');
const nextPageBtn = document.querySelector('.next-page');

const filterBtn = document.querySelector('.filter-btn');
const filterParams = document.querySelector('.filter-params');
const rangeInputs = document.querySelectorAll('.range-input');
const activeFilters = document.querySelector('.active-filters');

const catalogProducts = [
  {
    id: generateRandomId(),
    title: 'Slim Fit Boxers - Modern Cotton',
    prevPrice: 9600,
    currentPrice: 4800,
    img: ['./img/catalog/product-1.png', './img/catalog/product-1.png', './img/catalog/product-1.png'],
  },
  {
    id: generateRandomId(),
    title: 'Slim Fit Boxers - Modern Cotton',
    prevPrice: 9600,
    currentPrice: 4800,
    img: ['./img/catalog/product-2.png', './img/catalog/product-2.png', './img/catalog/product-2.png'],
  },
  {
    id: generateRandomId(),
    title: 'Slim Fit Boxers - Modern Cotton',
    prevPrice: 9600,
    currentPrice: 4800,
    img: ['./img/catalog/product-3.png', './img/catalog/product-3.png', './img/catalog/product-3.png'],
  },
  {
    id: generateRandomId(),
    title: 'Slim Fit Boxers - Modern Cotton',
    prevPrice: null,
    currentPrice: 4800,
    img: ['./img/catalog/product-1.png', './img/catalog/product-1.png', './img/catalog/product-1.png'],
  },
  {
    id: generateRandomId(),
    title: 'Slim Fit Boxers - Modern Cotton',
    prevPrice: null,
    currentPrice: 4800,
    img: ['./img/catalog/product-2.png', './img/catalog/product-2.png', './img/catalog/product-2.png'],
  },
  {
    id: generateRandomId(),
    title: 'Slim Fit Boxers - Modern Cotton',
    prevPrice: null,
    currentPrice: 4800,
    img: ['./img/catalog/product-3.png', './img/catalog/product-3.png', './img/catalog/product-3.png'],
  },
  {
    id: generateRandomId(),
    title: 'Slim Fit Boxers - Modern Cotton',
    prevPrice: null,
    currentPrice: 4800,
    img: ['./img/catalog/product-1.png', './img/catalog/product-1.png', './img/catalog/product-1.png'],
  },
  {
    id: generateRandomId(),
    title: 'Slim Fit Boxers - Modern Cotton',
    prevPrice: null,
    currentPrice: 4800,
    img: ['./img/catalog/product-2.png', './img/catalog/product-2.png', './img/catalog/product-2.png'],
  },
  {
    id: generateRandomId(),
    title: 'Slim Fit Boxers - Modern Cotton',
    prevPrice: null,
    currentPrice: 4800,
    img: ['./img/catalog/product-3.png', './img/catalog/product-3.png', './img/catalog/product-3.png'],
  },
  {
    id: generateRandomId(),
    title: 'Slim Fit Boxers - Modern Cotton',
    prevPrice: null,
    currentPrice: 4800,
    img: ['./img/catalog/product-1.png', './img/catalog/product-1.png', './img/catalog/product-1.png'],
  },
  {
    id: generateRandomId(),
    title: 'Slim Fit Boxers - Modern Cotton',
    prevPrice: null,
    currentPrice: 4800,
    img: ['./img/catalog/product-1.png', './img/catalog/product-1.png', './img/catalog/product-1.png'],
  },
  {
    id: generateRandomId(),
    title: 'Slim Fit Boxers - Modern Cotton',
    prevPrice: null,
    currentPrice: 4800,
    img: ['./img/catalog/product-1.png', './img/catalog/product-1.png', './img/catalog/product-1.png'],
  },
];

filterBtn.addEventListener('click', () => {
  if (filterBtn.classList.contains('active')) {
    filterBtn.classList.remove('active');
    filterParams.classList.remove('active');
    filterBarTitle.classList.remove('open');
    filterBarTitle.classList.add('close');
    disabledBgWrapper.classList.remove('active');
    document.body.style.overflowY = 'auto';
  } else {
    filterBtn.classList.add('active');
    filterParams.classList.add('active');
    filterBarTitle.classList.add('open');
    filterBarTitle.classList.remove('close');
    disabledBgWrapper.classList.add('active');
    document.body.style.overflowY = 'hidden';
  }
});

function setActiveFilterCount() {
  activeFilterCounter.innerText = `(${activeFiltersArray.length})`;
}

setActiveFilterCount();

const setActiveFilter = () => {
  activeFiltersArray.length > 0 &&
    activeFilters.insertAdjacentHTML(
      'beforeend',
      `
      <button class='active-filters__button' data-id=${activeFiltersArray[activeFiltersArray.length - 1].id
      } data-type=${activeFiltersArray[activeFiltersArray.length - 1].type}>${activeFiltersArray[activeFiltersArray.length - 1].name
      }</button>
    `
    );
  setActiveFilterCount();
};

function valueWithSpaces(e, val) {
  e.target.value = val
    .toString()
    .replace(/[^0-9.]/g, '')
    .replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
}

checkboxFilters.forEach((filter) => {
  filter.addEventListener('click', (e) => {
    if (!filter.checked) {
      activeFiltersArray = activeFiltersArray.filter((item) => item.id !== filter.dataset.id);
      const activeFilterButtons = Array.from(activeFilters.children);
      activeFilterButtons.forEach((item) => {
        item.dataset.id === filter.dataset.id && item.remove();
      });
      setActiveFilterCount();
    } else {
      activeFiltersArray.push({
        id: filter.dataset.id,
        type: 'params',
        name: filter.name,
        value: filter.name,
      });
      setActiveFilter();
    }
  });
});

rangeInputs.forEach((input, i) => {
  input.addEventListener('input', (e) => {
    valueWithSpaces(e, e.target.value);

    if (!input.value) {
      activeFiltersArray = activeFiltersArray.filter((item) => item.id !== input.dataset.id);
      const activeFilterButtons = Array.from(activeFilters.children);
      activeFilterButtons.forEach((item) => {
        item.dataset.id === input.dataset.id && item.remove();
      });
    }
  });

  if (i === 0) {
    input.addEventListener('blur', () => {
      if (input.value) {
        activeFiltersArray.push({
          id: input.dataset.id,
          type: 'range',
          name: `От ${input.value} ₽`,
          value: input.value,
        });
        setActiveFilter();
      }
    });
  } else {
    input.addEventListener('blur', () => {
      if (input.value) {
        activeFiltersArray.push({
          id: input.dataset.id,
          type: 'range',
          name: `До ${input.value} ₽`,
          value: input.value,
        });
        setActiveFilter();
      }
    });
  }
});

activeFilters.addEventListener('click', (e) => {
  const { id } = e.target.dataset;

  if (id) {
    activeFiltersArray = activeFiltersArray.filter((item) => item.id !== id);
    e.target.remove();
    setActiveFilterCount();

    checkboxFilters.forEach((filter) => {
      if (filter.dataset.id === id) {
        filter.checked = false;
      }
    });

    rangeInputs.forEach((filter) => {
      if (filter.dataset.id === id) {
        filter.value = '';
      }
    });
  }
});

filterResetButton.addEventListener('click', () => {
  activeFiltersArray = [];
  setActiveFilter();
  rangeInputs.forEach((input) => (input.value = ''));
  checkboxFilters.forEach((input) => (input.checked = false));
  activeFilters.innerHTML = '';
});

function generateRandomId() {
  return Math.floor((1 + Math.random()) * 0x10000)
    .toString(16)
    .substring(1);
}

function setCatalogProducts(page, array) {
  array.forEach((product, i) => {
    let imageSlider = '';
    for (let i = 0; i < product.img.length; i++) {
      imageSlider += `<div class='swiper-slide'>
      <img src=${product.img[i]} alt='product' />
    </div>`
    }

    page % 4 !== 0
      ? i < 10 &&
      catalogList.insertAdjacentHTML(
        'afterbegin',
        `
        <div class='product-cart__wrapper'>
          <a href='./product-cart.html' class='product__cart'>
            <object class='img__wrapper'>
              <div class='swiper-wrapper'>
                ${imageSlider}
              </div>
              <div class='swiper-pagination'></div>
            </object> 
            <h6>${product.title}</h6>
            <p>${product.prevPrice ? `<span>${product.prevPrice}</span>` : ''}${product.currentPrice}</p>
          </a>
          <button class='fullfilled-btn'>
            <svg>
              <use href='./img/svg/header/favorites.svg#favorites' />
            </svg>
          </button>
        </div>
        `
      )
      : catalogList.insertAdjacentHTML(
        'afterbegin',
        `
        <div class='product-cart__wrapper'>
          <a href='./product-cart.html' class='product__cart'>
            <object class='img__wrapper'>
              <div class='swiper-wrapper'>
                ${imageSlider}
              </div>
              <div class='swiper-pagination'></div>
            </object> 
            <h6>${product.title}</h6>
            <p>${product.prevPrice ? `<span>${product.prevPrice}</span>` : ''}${product.currentPrice}</p>
          </a>
          <button class='fullfilled-btn'>
            <svg>
              <use href='./img/svg/header/favorites.svg#favorites' />
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
  productBanner.setAttribute('data-id', page % 10);

  new Swiper('.catalog__list .img__wrapper', {
    slidesPerView: 1,
    centeredSlides: true,
    spaceBetween: 0,
    loop: true,
    loopedSlides: 1,
    watchSlidesVisibility: true,
    pagination: {
      el: '.img__wrapper .swiper-pagination',
      clickable: true,
    },
  });
}

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
  catalogList.innerHTML = `<div class='product-banner' data-id=${value}><img src=['./img/catalog/product-banner, './img/catalog/product-banner, './img/catalog/product-banner ].png' alt='product-banner' /></div>`;
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

setPageQuantity();
setCatalogProducts(1, catalogProducts);

document.addEventListener('mousedown', (e) => {
  if (!authorizationPopUp.classList.contains('active') && !filterBar.contains(e.target)) {
    filterBtn.classList.remove('active');
    filterParams.classList.remove('active');
    filterBarTitle.classList.remove('open');
    filterBarTitle.classList.add('close');
    disabledBgWrapper.classList.remove('active');
  }
});
