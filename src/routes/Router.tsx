import { BrowserRouter, Route, Routes } from "react-router-dom";

import Checkout from "../pages/Checkout/Checkout";
import Home from "../pages/Home/Home";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </BrowserRouter>
  );
}
