import { BrowserRouter, Route, Routes } from "react-router-dom";

import Checkout from "../pages/Checkout/Checkout";
import { Register } from "../pages/Register";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <h1>Home</h1>
            </>
          }
        />

        <Route path="/checkout" element={<Checkout />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}
