import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductDetailPage from "./pages/ProductDetailPage.jsx";
import ProductCart from "./pages/ProductCart.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <StrictMode>
      <Routes>
        <Route path='/' element={<App />}/>
        <Route path="/product-detail" element={<ProductDetailPage/>}/>
        <Route path='/cart' element={<ProductCart/>} />
      </Routes>
    </StrictMode>
  </BrowserRouter>
);
