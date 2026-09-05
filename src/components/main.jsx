import { useState } from "react";
function Main(){
    const categories = ['All', 'Electronics', 'Clothing', 'Jewelry', 'Accessories']
    const [activeCategory, setActiveCategory] = useState("All");
    
    return(
        <main>
        <section class="products-section">
          <div class="section-header">
            <div>
              <span class="section-label">STORE</span>
              <h2 class="class">Products</h2>
            </div>

            <select class="sort">
              <option value="default">Sort by</option>

              <option value="price-low">Price: Low to High</option>

              <option value="price-high">Price: High to Low</option>

              <option value="rating">Rating</option>
            </select>
          </div>

          <div class="category-list">
            {categories.map((cat) => (
                <button 
                key={cat}
                className={cat === activeCategory ? "category active" : "category"}
                onClick={() => setActiveCategory(cat)}
                >
                    {cat}
                </button>
            ))}
          </div>

          <div class="products">
            
          </div>

          <div class="loading hidden">Loading products...</div>

          <div class="no-results hidden">
            <h3>No products found</h3>

            <p>Try searching for something else.</p>
          </div>
        </section>
      </main>
    );
}
export default Main