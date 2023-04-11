const productCart = document.querySelectorAll('.sc-main__order-content .basket__product');
const deleteProductBtn = document.querySelectorAll('.delete-btn');
const deletePopUp = document.querySelector('.delete-pop__wrapper');

const addPromocode = document.querySelector('.promocode');
const addPromocodeBtn = document.querySelector('.promocode-btn');
const editBtn = document.querySelectorAll('.edit-btn');

addPromocodeBtn.addEventListener('click', () => {
  if (addPromocode.classList.contains('active')) {
    addPromocode.classList.remove('active');
  } else {
    addPromocode.classList.add('active');
  }
});

deleteProductBtn.forEach((button) => {
  button.addEventListener('mousedown', () => {
    deletePopUp.classList.add('active');
  });
});

deletePopUp.addEventListener('mousedown', (e) => {
  if (deletePopUp.classList.contains('active') && deletePopUp.children[0].contains(e.target)) {
    if (e.target.classList.contains('cancel-delete')) {
      deletePopUp.classList.remove('active');
    } else {
      productCart.forEach((cart) => {
        cart.id === currentDeleteCart && cart.remove();
      });
    }
  } else {
    deletePopUp.classList.remove('active');
  }
});

editBtn.forEach(button => {
  button.addEventListener('click', () => {
    const productsArray = Array.from(productCart);
    productsArray.forEach(product => {
      if (product.dataset.id === button.dataset.id) {
        if (product.classList.contains('edit')) {
          product.classList.remove('edit')
        } else {
          product.classList.add('edit')
        }
      } else {
        product.classList.remove('edit');
      }
    })
  })
})