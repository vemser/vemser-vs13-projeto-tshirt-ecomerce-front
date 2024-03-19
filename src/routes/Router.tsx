import { BrowserRouter, Route, Routes } from "react-router-dom";
import DefaultLayout from "../layout/DefaultLayout";
import Checkout from "../pages/Checkout/Checkout";
import { ForgotPassword } from "../pages/ForgotPassword/ForgotPassword";
import Home from "../pages/Home/Home";
import { NotFound } from "../pages/NotFound/NotFound";
import Product from "../pages/Product/Product";
import { Register } from "../pages/Register/Register";
import Catalog from "../pages/catalog/Catalog";
import { Login } from "../pages/login/Login";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/product" element={<Product />} />
        </Route>

        <Route path="*" element={<NotFound />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/recover-password" element={<ForgotPassword />} />
      </Routes>
    </BrowserRouter>
  );
}
