function Cart() {
  return (
    <>
      <aside class="cart-window hidden">
        <div class="cart-header">
          <h2>Your Cart</h2>

          <button class="close-cart">×</button>
        </div>

        <div class="cart-items">
          {/* <!-- Cart items will be created with JavaScript --> */}
        </div>

        <div class="cart-empty">
          <h3>Your cart is empty</h3>

          <p>Add some products to get started.</p>
        </div>

        <div class="cart-footer">
          <div class="cart-total">
            <span>TotFFal</span>

            <strong class="total-price"> $0.00 </strong>
          </div>

          <button class="checkout-btn">Checkout</button>
        </div>
      </aside>

      <div class="product-modal hidden">
        <div class="modal-content">
          <button class="close-modal">×</button>

          <div class="modal-product">
            {/* <!-- Product details will be inserted here --> */}
          </div>
        </div>
      </div>
    </>
  );
}
export default Cart