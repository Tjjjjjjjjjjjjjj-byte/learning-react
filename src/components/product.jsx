// src/components/ProductCard.jsx
function ProductCard({ product, onAddToCart }) {
  return (
    <div className="product-card">
      <img 
        src={product.image} 
        alt={product.name}
        className="product-image"
      />
      
      <div className="product-info">
        <h3 className="product-name">{product.name}</h3>
        
        <div className="product-rating">
          ⭐ {product.rating}
        </div>
        
        <span className="product-price">${product.price}</span>
        
        <button 
          className="add-to-cart-btn"
          onClick={() => onAddToCart(product)}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ProductCard;