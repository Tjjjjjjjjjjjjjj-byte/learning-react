import Nav from "../components/nav";
import Main from "../components/main";
import Cart from "../components/cart";
import { useState } from "react";
function Shop( {products} ) {
  const [isCartOpen, setIsCartOpen] = useState(false);
  return (
    <>
      <Nav
        onCartToggle={() => {
          setIsCartOpen(!isCartOpen);
        }}
      />
      <Main products={products} />
      <Cart
        isOpen={isCartOpen}
        onCartToggle={() => {
          setIsCartOpen(!isCartOpen);
        }}
      />
    </>
  );
}
export default Shop;
