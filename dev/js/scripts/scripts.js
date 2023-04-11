const header = document.querySelector('.header');

const headerDropdown = document.querySelector('.dropdown-menu');

const searchBtn = document.querySelector('.search-btn');
const searchForm = document.querySelector('.search-form');
const inputSearch = document.querySelector('.search');
const clearBtnSearch = document.querySelector('.clear-btn');
const topUp = document.querySelector('.top-up');

const profileHeaderBtn = document.querySelector('.profile-btn');
const profileHeaderBtnMobile = document.querySelector('.profile-btn-mobile');
const shoppingHeaderBtn = document.querySelector('.basket-btn');
const shoppingHeaderBtnMobile = document.querySelector('.basket-btn-mobile');
const authorizationPopUp = document.querySelector('.header-popup');
const closePopUp = document.querySelectorAll('.close-popup');
const disabledBgWrapper = document.querySelector('.disabled-bg-wrapper');

const authPopUp = document.querySelector('.auth-popup');
const shoppingPopUp = document.querySelector('.shopping-popup');

if (document.body.scrollHeight < 2000) {
  const topUp = document.querySelector('.top-up');
  topUp.remove();
} 

let currentScrollPos = 0;

window.addEventListener('scroll', () => {
  if (currentScrollPos < window.scrollY) {
    header.classList.add('hide');
    header.classList.remove('active');
    currentScrollPos = window.scrollY;
  } else if (window.scrollY === 0) {
    header.classList.remove('hide');
    header.classList.remove('active');
    currentScrollPos = window.scrollY;
  } else {
    header.classList.remove('hide');
    header.classList.add('active');
    currentScrollPos = window.scrollY;
  }
});

window.addEventListener('mousemove', (e) => {
  if (e.clientY < 98) {
    header.classList.add('active');
    header.classList.remove('hide');
  }
});

header.addEventListener('mouseleave', () => {
  if (authorizationPopUp.classList.contains('active')) {
    return;
  }

  if (window.scrollY > 0) {
    header.classList.add('hide');
    header.classList.remove('active');
  } else {
    header.classList.remove('active');
  }
});

const catalogNavHeader = document.querySelector('.catalog');

topUp.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
});

catalogNavHeader.addEventListener('mouseenter', () => {
  header.classList.add('active');
  headerDropdown.classList.add('active');
  catalogNavHeader.classList.add('active');
});

catalogNavHeader.addEventListener('mouseleave', () => {
  headerDropdown.classList.remove('active');
  catalogNavHeader.classList.remove('active');
  setTimeout(() => {
    !window.scrollY && header.classList.remove('active');
  }, 300);
});

headerDropdown.addEventListener('mouseenter', () => {
  header.classList.add('active');
  headerDropdown.classList.add('active');
  catalogNavHeader.classList.add('active');
});

headerDropdown.addEventListener('mouseleave', () => {
  headerDropdown.classList.remove('active');
  catalogNavHeader.classList.remove('active');
  setTimeout(() => {
    !window.scrollY && header.classList.remove('active');
  }, 300);
});

searchBtn.addEventListener('click', (e) => {
  e.preventDefault();
  if (searchForm.classList.contains('active')) {
    searchForm.submit();
  } else {
    searchForm.classList.add('active');
    header.classList.add('active');
    inputSearch.focus();

    if (inputSearch.value) {
      clearBtnSearch.classList.add('active');
    }
  }
});

inputSearch.addEventListener('input', (e) => {
  if (e.target.value) {
    clearBtnSearch.classList.add('active');
  } else {
    clearBtnSearch.classList.remove('active');
  }
});

inputSearch.addEventListener('blur', () => {
  searchForm.classList.remove('active');
  clearBtnSearch.classList.remove('active');
  header.classList.remove('active');
});

clearBtnSearch.addEventListener('mousedown', (e) => {
  if (document.activeElement === inputSearch) {
    e.preventDefault();
  }
});

clearBtnSearch.addEventListener('click', (e) => {
  e.preventDefault();
  if (e.currentTarget.classList.contains('clear-btn')) {
    inputSearch.value = '';
    inputSearch.focus();
  }
  clearBtnSearch.classList.remove('active');
});

const showAuthorizationPopUp = (path) => {
  if (path === 'auth') {
    authPopUp.classList.add('active');
    shoppingPopUp.classList.remove('active');
  } else if (path === 'shopping') {
    shoppingPopUp.classList.add('active');
    authPopUp.classList.remove('active');
  }

  header.classList.add('active');
  disabledBgWrapper.classList.add('active');
  authorizationPopUp.classList.add('active');
  document.body.style.overflowY = 'hidden';
};

const hideAuthorizationPopUp = () => {
  authorizationPopUp.classList.remove('active');
  authorizationPopUp.classList.add('hide');
  disabledBgWrapper.classList.remove('active');
  document.body.style.overflowY = 'scroll';
  setTimeout(() => {
    authorizationPopUp.classList.remove('hide');
  }, 300);
};

closePopUp.forEach((button) =>
  button.addEventListener('click', (e) => {
    e.preventDefault();
    hideAuthorizationPopUp();
  })
);

profileHeaderBtnMobile.addEventListener('click', () => {
  showAuthorizationPopUp('auth');
  mobileMenu.classList.remove('active');
  hamburgerBtn.classList.remove('open');
});

document.addEventListener('mousedown', (e) => {
  if (
    !authorizationPopUp.contains(e.target) &&
    authorizationPopUp.classList.contains('active') &&
    !profileHeaderBtn.contains(e.target) &&
    !shoppingHeaderBtn.contains(e.target) &&
    !shoppingHeaderBtnMobile.contains(e.target)
  ) {
    hideAuthorizationPopUp();
  } else if (profileHeaderBtn.contains(e.target)) {
    showAuthorizationPopUp('auth');
  } else if (
    shoppingHeaderBtn.contains(e.target.parentElement) ||
    shoppingHeaderBtnMobile.contains(e.target.parentElement)
  ) {
    showAuthorizationPopUp('shopping');
    mobileMenu.classList.remove('active');
    hamburgerBtn.classList.remove('open');
  }
});

const authorizationPopUpToggleBtns = document.querySelectorAll(
  '.auth-popup__toggle-buttons button'
);

let activeTab = 0;

const authorizationPopUpTabsWrapper = document.querySelector('.auth-popup__toggle-buttons');

authorizationPopUpTabsWrapper.addEventListener('mousedown', (e) => {
  const authorizationPopUpTabs = document.querySelectorAll('.auth-popup__toggle-buttons button');
  const authForms = document.querySelectorAll('.header-popup form');

  if (e.target.id) {
    authorizationPopUpTabs.forEach((button) => button.classList.remove('active'));
    e.target.classList.add('active');
    authForms.forEach((form) => {
      form.classList.contains(e.target.id)
        ? form.classList.add('active')
        : form.classList.remove('active');
    });
  }
});

const variableLink = document.querySelector('.variable-link');

if (variableLink) {
  const { pathname } = window.location;
  const pageBreadcrumbs = document.querySelector('.page-breadcrumbs');
  const variableText = [
    {
      name: 'catalog',
      value: 'Каталог',
    },
    {
      name: 'about-us',
      value: 'О нас',
    },
    {
      name: 'stores',
      value: 'Магазины',
    },
    {
      name: 'shopping-cart',
      value: 'Корзина',
    },
    {
      name: 'product-cart',
      value: 'Товар',
    },
    {
      name: 'favorites',
      value: 'Избранное',
    },
    {
      name: 'order',
      value: 'оформление товара',
    },
  ];

  let currentLink = '';

  variableText.forEach((text) => {
    if (pathname.replace(/.html/gi, '').split('/').pop() === text.name) {
      currentLink += text.value;
    }
  });

  if (pathname.replace(/.html/gi, '').split('/').pop() === 'catalog') {
    pageBreadcrumbs.insertAdjacentHTML(
      'beforeend',
      `
        <li>
          <a href=${pathname}>Slim Fit Boxers - Modern Cotton</a>
        </li>
      `
    );
  }

  variableLink.setAttribute('href', '.' + pathname);
  variableLink.innerText = currentLink;
}

const hamburgerBtn = document.querySelector('.hamburger-button');
const mobileMenu = document.querySelector('.mobile-menu');
const mobileCategoryBtn = document.querySelector('.dropdown-menu__catalog-wrapper .title');
const mobileDropdownCategory = document.querySelector('.dropdown-menu-mobile');
const mobileDropdownSubcategoryTitle = document.querySelectorAll('.dropdown-menu__catalog-wrapper .subcategory__title');

hamburgerBtn.addEventListener('click', () => {
  if (hamburgerBtn.classList.contains('open')) {
    hamburgerBtn.classList.remove('open');
    mobileMenu.classList.remove('active');
    document.body.style.overflowY = 'auto';
  } else {
    hamburgerBtn.classList.add('open');
    mobileMenu.classList.add('active');
    document.body.style.overflowY = 'hidden';
  }
});

mobileCategoryBtn.addEventListener('click', (e) => {
  if (mobileCategoryBtn.classList.contains('active')) {
    mobileCategoryBtn.classList.remove('active');
    mobileDropdownCategory.classList.remove('active');
  } else {
    mobileCategoryBtn.classList.add('active');
    mobileDropdownCategory.classList.add('active');
  }
});

mobileDropdownSubcategoryTitle.forEach(button => (
  button.addEventListener('click', (e) => {
    console.log(e);
    if (button.classList.contains('active')) {
      button.classList.remove('active');
    } else {
      button.classList.add('active');
    }
  })
))

const deviceHeight = () => {
  const doc = document.documentElement;
  doc.style.setProperty('--device-height', `${window.innerHeight}px`);
}

window.addEventListener('resize', deviceHeight);
deviceHeight();