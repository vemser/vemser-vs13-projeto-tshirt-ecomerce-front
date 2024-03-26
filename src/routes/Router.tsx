import { BrowserRouter, Route, Routes } from "react-router-dom";
import ClientOrders from "../components/ClientOrders/ClientOrders";
import DefaultLayout from "../layout/DefaultLayout";
import ProfileLayout from "../layout/ProfileLayout";
import Catalog from "../pages/catalog/Catalog";
import Checkout from "../pages/Checkout/Checkout";
import { ForgotPassword } from "../pages/ForgotPassword/ForgotPassword";
import Home from "../pages/Home/Home";
import { Login } from "../pages/login/Login";
import { NotFound } from "../pages/NotFound/NotFound";
import Product from "../pages/Product/Product";
import ManageAddress from "../pages/Profile/ManageAddress/ManageAddress";
import Notifications from "../pages/Profile/Notifications/Notifications";
import PaymentsMethod from "../pages/Profile/PaymentsMethod/PaymentsMethod";
import PersonalInfo from "../pages/Profile/PersonalInfo/PersonalInfo";
import { Register } from "../pages/Register/Register";
import ReviewYourOrder from "../pages/ReviewYourOrder/ReviewYourOrder";
import Wishlist from "../pages/Wishlist/Wishlist";
import PrivateRoute from "./PrivateRoute";
import ServiceTerms from "../pages/Terms/ServiceTerms";
import CookiePolicy from "../pages/Terms/CookiePolicy";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/product" element={<Product />} />
          <Route path="/service-terms" element={<ServiceTerms />} />
          <Route path="/cookie-policy" element={<CookiePolicy />} />

          <Route element={<PrivateRoute />}>
            <Route path="/review-your-order" element={<ReviewYourOrder />} />
            <Route element={<ProfileLayout />}>
              <Route path="/profile/favorites" element={<Wishlist />} />
              <Route path="/profile/orders" element={<ClientOrders />} />
              <Route path="/profile/personal-info" element={<PersonalInfo />} />
              <Route
                path="/profile/payment-methods"
                element={<PaymentsMethod />}
              />
              <Route
                path="/profile/notifications"
                element={<Notifications />}
              />
              <Route
                path="/profile/settings"
                element={<div>Configurações</div>}
              />
            </Route>
          </Route>
          <Route path="/profile/addresses" element={<ManageAddress />} />
        </Route>

        <Route path="*" element={<NotFound />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/recover-password" element={<ForgotPassword />} />
      </Routes>
    </BrowserRouter>
  );
}
