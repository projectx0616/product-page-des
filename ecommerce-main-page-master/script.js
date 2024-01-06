document.addEventListener("DOMContentLoaded", function () {
  // Get references to relevant elements
  const addToCartBtn = document.querySelector(".price-cart__btn");
  const cartCountElement = document.querySelector(".nav-link.cart-count");

  // Initialize cart count (you may load this from storage if needed)
  let cartCount = 0;

  // Function to update the cart count in the navbar
  function updateCartCount() {
    cartCountElement.textContent = `Cart (${cartCount})`;
  }

  // Event listener for the "Add to cart" button
  addToCartBtn.addEventListener("click", function () {
    // Increment the cart count
    cartCount++;

    // Update the cart count in the navbar
    updateCartCount();

    // You can add more logic here to save the cart state, display a confirmation, etc.
  });
});