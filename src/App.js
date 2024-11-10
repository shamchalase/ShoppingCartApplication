import "./App.css";
import Navbar from "./component/Navbar";
import ProductCart from "./component/ProductCart";
import CartPage from "./component/CartPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<ProductCart />} />
          <Route path="/cart" element={<CartPage />} /> {/* Cart page route */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
