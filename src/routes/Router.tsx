import { BrowserRouter, Route, Routes } from "react-router-dom";
import DefaultLayout from "../layout/DefaultLayout";
import Checkout from "../pages/Checkout/Checkout";
import { ForgotPassword } from "../pages/ForgotPassword/ForgotPassword";
import Home from "../pages/Home/Home";
import { NotFound } from "../pages/NotFound/NotFound";
import Product from "../pages/Product/Product";
import PersonalInfo from "../pages/Profile/PersonalInfo/PersonalInfo";
import { Register } from "../pages/Register/Register";
import Catalog from "../pages/catalog/Catalog";
import { Login } from "../pages/login/Login";
import ReviewYourOrder from "../pages/ReviewYourOrder/ReviewYourOrder";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/review-your-order" element={<ReviewYourOrder />} />
          <Route path="/product" element={<Product />} />

          {/* Profile */}
          <Route path="/profile/personal-info" element={<PersonalInfo />} />
          <Route path="/profile/orders" element={<div>Pedidos</div>} />
          <Route path="/profile/favorites" element={<div>Favoritos</div>} />
          <Route path="/profile/addresses" element={<div>Endereços</div>} />
          <Route
            path="/profile/payment-methods"
            element={<div>Meios de Pagamento</div>}
          />
          <Route
            path="/profile/notifications"
            element={<div>Notificações</div>}
          />
          <Route path="/profile/settings" element={<div>Configurações</div>} />
        </Route>

        <Route path="*" element={<NotFound />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/recover-password" element={<ForgotPassword />} />
      </Routes>
    </BrowserRouter>
  );
}
