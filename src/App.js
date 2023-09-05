import "./App.css";
import Home from "./Pages/Home";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Header from "./Components/Header";
import ProductPage from "./Pages/ProductPage";
import Cart from "./Pages/Cart";
import CartDetail from "./Pages/CartDetail";
import { FilterProvider } from "./FilterContext";
function App() {
  return (
    <>
      <Header />
      <FilterProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/productpage" element={<ProductPage />} />
        <Route path="/cart/:id" element={<Cart />} />
        <Route path="/addtocart" element={<CartDetail />} />
      </Routes>
      </FilterProvider>
    </>
  );
}

export default App;
