import { BrowserRouter, Route, Routes } from "react-router-dom";

import Checkout from "../pages/Checkout/Checkout";
import { Login } from "../pages/Login/Login";

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
        <Route path="/login" element={<Login />} />

        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </BrowserRouter>
  );
}
