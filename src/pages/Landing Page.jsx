import { Link } from "react-router-dom";
function Landingpage() {

  return(
    <section className="hero">
      <div className="hero-content">
        <span className="hero-label">NEW COLLECTION</span>

        <h2>Find something<br />you'll love.</h2>

        <p>
          Browse our latest products and find something that's right for you.
        </p>

        <Link className="shop-now-btn" to="/Shop">Shop Now!</Link>

        <p>
          A Seller? Take a look at your statistics!
        </p>

        <a href="/DashBoard" className="shop-now-btn">Dashboard</a>

      </div>
    </section>
  );
}
export default Landingpage