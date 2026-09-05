import { Routes, Route } from 'react-router-dom'
import LandingPage from './pages/Landing Page'
import Shop from './pages/Shop'
function App() {

  return(
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/shop" element={<Shop />} />
    </Routes>
  );
}

export default App