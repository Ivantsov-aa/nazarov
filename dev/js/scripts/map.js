let stores = [
  {
    name: 'ТРЦ «Афимолл Сити»',
    coord: [55.748963, 37.539658],
  },
  {
    name: 'ТРЦ «Дана Молл»',
    coord: [53.934071, 27.65224],
  },
];

let myMap, myCollection;

const storesList = document.querySelector('.stores-list');
const groupTitle = document.querySelectorAll('.group__title');

storesList.addEventListener('mousedown', (e) => {
  const { id } = e.target.dataset;

  if (id) {
    myMap.panTo(stores[id - 1].coord, {
      duration: 1000,
    });

    groupTitle.forEach((button) => {
      if (id === button.dataset.id) {
        button.parentElement.classList.add('active');
      } else {
        button.parentElement.classList.remove('active');
      }
    });
  }
});

function init() {
  myMap = new ymaps.Map('map', {
    center: [55.749162, 37.539742],
    controls: ['zoomControl', 'fullscreenControl'],
    zoom: 14,
  });

  myCollection = new ymaps.GeoObjectCollection();

  for (let i = 0; i < stores.length; i++) {
    let name = stores[i].name;
    let coord = stores[i].coord;

    myCollection.add(
      new ymaps.Placemark(
        [parseFloat(coord[0]), parseFloat(coord[1])],
        {
          hintContent: name,
        },
        {
          iconLayout: 'default#image',
          iconImageHref: './img/svg/placemark.svg',
          iconImageSize: [32, 32],
        }
      )
    );
  }

  myMap.geoObjects.add(myCollection);
}

ymaps.ready(init);
