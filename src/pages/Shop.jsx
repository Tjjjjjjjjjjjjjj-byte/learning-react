import Nav from "../components/nav";
import Main from "../components/main";
import Cart from "../components/cart";
import { useState } from "react";
function Shop() {
  const [isCartOpen, setIsCartOpen] = useState(false)
  return (
    <>
      <Nav onCartToggle={}/>
      <Main />
      <Cart />
    </>
  );
}
export default Shop;