import { BrowserRouter, Route, Routes } from "react-router-dom";
import Catalog from "../pages/catalog/Catalog";

import Checkout from "../pages/Checkout/Checkout";

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
        <Route path="/catalog" element={<Catalog />} />

        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </BrowserRouter>
  );
}
