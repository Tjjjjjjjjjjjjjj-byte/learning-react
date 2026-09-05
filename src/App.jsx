import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/Landing Page";
import Shop from "./pages/Shop";
function App() {
  const products = [
    {
      id: 1,
      name: "Wireless Headphones",
      price: 79.99,
      category: "Electronics",
      rating: 4.5,
      image: "https://via.placeholder.com/300x200?text=Headphones",
    },
  ];
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/shop" element={<Shop products={products} />} />
    </Routes>
  );
}

export default App;
