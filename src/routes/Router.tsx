import { BrowserRouter, Route, Routes } from "react-router-dom";

import DefaultLayout from "../layout/DefaultLayout";
import Checkout from "../pages/Checkout/Checkout";

import { NotFound } from "../pages/NotFound/NotFound";
import { Register } from "../pages/Register/Register";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route path="/" element={<h1>Home</h1>} />
          <Route path="/checkout" element={<Checkout />} />
        </Route>

        <Route path="*" element={<NotFound />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}
