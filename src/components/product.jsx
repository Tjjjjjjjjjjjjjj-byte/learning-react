// ===== ProductCard.jsx =====
function ProductCard({ product, onAddToCart }) {
  return (
    <div className="product-card">
      {/* Product image */}
      <div className="product-image">
        <img src={product.image} alt={product.name} />
      </div>

      {/* Product info */}
      <div className="product-info">
        {/* Category label */}
        <span className="product-category">{product.category}</span>

        {/* Product name */}
        <h3 className="product-name">{product.name}</h3>

        {/* Rating */}
        <div className="product-rating">
          <span className="stars">⭐ {product.rating}</span>
          <span className="reviews">({product.reviews} reviews)</span>
        </div>

        {/* Description */}
        <p className="product-description">{product.description}</p>

        {/* Price and button */}
        <div className="product-footer">
          <span className="product-price">${product.price}</span>
          
          {/* Add to cart button - calls the function passed from parent */}
          <button 
            className="add-to-cart-btn"
            onClick={() => onAddToCart(product)}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;