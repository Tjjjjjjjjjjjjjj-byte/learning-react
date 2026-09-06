function Nav({onCartToggle, items}) {
  return (
    <nav>
      <div className="nav-left">
        <h1 className="logo">Shop</h1>
      </div>

      <div className="nav-center">
        <input type="text" className="search" placeholder="Search products..." />
      </div>

      <div className="nav-right">
        <button className="categories-btn">Categories</button>

        <button
        className="cart-btn"
        onClick={onCartToggle}
        >
          Cart
          <span className="cart-count">{items.length}</span>
        </button>
      </div>
    </nav>
  );
}
export default Nav;
