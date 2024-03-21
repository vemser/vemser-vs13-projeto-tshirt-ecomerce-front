import { BrowserRouter, Route, Routes } from "react-router-dom";
import DefaultLayout from "../layout/DefaultLayout";
import ProfileLayout from "../layout/ProfileLayout";
import Catalog from "../pages/catalog/Catalog";
import Checkout from "../pages/Checkout/Checkout";
import { ForgotPassword } from "../pages/ForgotPassword/ForgotPassword";
import Home from "../pages/Home/Home";
import { Login } from "../pages/login/Login";
import { NotFound } from "../pages/NotFound/NotFound";
import Product from "../pages/Product/Product";
import Notifications from "../pages/Profile/Notifications/Notifications";
import PaymentsMethod from "../pages/Profile/PaymentsMethod/PaymentsMethod";
import PersonalInfo from "../pages/Profile/PersonalInfo/PersonalInfo";
import { Register } from "../pages/Register/Register";
import ReviewYourOrder from "../pages/ReviewYourOrder/ReviewYourOrder";
import ManageAddress from "../pages/Profile/ManageAddress/ManageAddress";

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

          <Route element={<ProfileLayout />}>
            <Route path="/profile/favorites" element={<div>Favoritos</div>} />
            <Route path="/profile/orders" element={<div>Pedidos</div>} />
            <Route path="/profile/personal-info" element={<PersonalInfo />} />
            <Route
              path="/profile/payment-methods"
              element={<PaymentsMethod />}
            />
            <Route path="/profile/notifications" element={<Notifications />} />
            <Route path="/profile/addresses" element={<ManageAddress />} />
            <Route
              path="/profile/settings"
              element={<div>Configurações</div>}
            />
          </Route>
        </Route>

        <Route path="*" element={<NotFound />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/recover-password" element={<ForgotPassword />} />
      </Routes>
    </BrowserRouter>
  );
}
