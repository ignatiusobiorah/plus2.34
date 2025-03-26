import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "./pages/Cart";
import Home from "./pages/Home";

const AppRoute = () => {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoute;