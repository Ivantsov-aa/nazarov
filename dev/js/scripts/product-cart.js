const deliveryBtn = document.querySelector('.delivery-btn');
const deliveryContent = document.querySelector('.delivery__content');

const descriptionBtn = document.querySelector('.desc-btn');
const descriptionContent = document.querySelector('.description__content');

descriptionBtn.addEventListener('click', () => {
  deliveryBtn.classList.remove('active');
  deliveryContent.classList.remove('active');

  descriptionBtn.classList.add('active');
  descriptionContent.classList.add('active');
});

deliveryBtn.addEventListener('click', () => {
  descriptionBtn.classList.remove('active');
  descriptionContent.classList.remove('active');

  deliveryBtn.classList.add('active');
  deliveryContent.classList.add('active');
});
