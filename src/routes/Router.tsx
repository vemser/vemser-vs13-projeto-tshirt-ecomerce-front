import { BrowserRouter, Route, Routes } from "react-router-dom";
import Catalog from "../pages/catalog/Catalog";

import DefaultLayout from "../layout/DefaultLayout";
import Checkout from "../pages/Checkout/Checkout";

import { NotFound } from "../pages/NotFound/NotFound";
import { Register } from "../pages/Register/Register";
import { Login } from "../pages/login/Login";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route path="/" element={<h1>Home</h1>} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/catalog" element={<Catalog />} />
        </Route>

        <Route path="*" element={<NotFound />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}
