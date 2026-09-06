import Nav from "../components/nav";
import Main from "../components/main";
import Cart from "../components/cart";
import { useState } from "react";
function Shop( {products} ) {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([])
  const addToCart = (product) => {
  const cartItem = {
    ...product,  // ← Use the product parameter
    id: Date.now()
  };
  setCartItems([...cartItems, cartItem]);
}
  return (
    <>
      <Nav
        onCartToggle={() => {
          setIsCartOpen(!isCartOpen);
        }}
        items={cartItems}
      />
      <Main products={products} addToCart={addToCart} />
      <Cart
        isOpen={isCartOpen}
        onCartToggle={() => {
          setIsCartOpen(!isCartOpen);
        }}
        items={cartItems}
      />
    </>
  );
}
export default Shop;
