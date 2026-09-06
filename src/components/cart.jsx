function Cart({ isOpen, onCartToggle, items }) {
  return (
    <>
      <aside className={isOpen ? "cart-window" : "cart-window hidden"}>
        <div class="cart-header">
          <h2>Your Cart</h2>

          <button class="close-cart" onClick={onCartToggle}>
            ×
          </button>
        </div>

        {items.length > 0 ? (
          <div className="cart-items">
            {items.map((item) => (
              <div className="cart-item" key={item.id}>
                <span>{item.name}</span>
                <span>${item.price}</span>
                <button>Remove</button>
              </div>
            ))}
          </div>
        ) : (
          <div className="cart-empty">
            <h3>Your cart is empty</h3>
            <p>Add some products to get started.</p>
          </div>
        )}

        <div class="cart-footer">
          <div class="cart-total">
            <span>Total</span>

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
export default Cart;
