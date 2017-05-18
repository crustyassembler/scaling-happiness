function updateCartCount(node) {
  if(localStorage.getItem('basket')) {
    node.innerText = JSON.parse(
      atob(
        localStorage.getItem('basket')
      )
    ).length;
  }
}

function getCartContents() {
  basket64 = localStorage.getItem('basket');
  if(!basket64) return;
  basket = JSON.parse(
    atob(basket64)
  );

  return basket;
}

document.addEventListener('DOMContentLoaded', function() {
  var basket_counter = document.getElementById('basket-count');
  updateCartCount(basket_counter);
});
