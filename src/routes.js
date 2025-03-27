import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import { useState } from "react";

const AppRoute = () => {
  const [cart, setCart] = useState([]); //cart state to store selected items
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home cart={cart} setCart={setCart} />} />
        <Route path="/cart" element={<Cart cart={cart} setCart={setCart}/>} />
        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoute;