import { BrowserRouter, Route, Routes } from "react-router-dom";
import Catalog from "../pages/catalog/Catalog";
import DefaultLayout from "../layout/DefaultLayout";
import Checkout from "../pages/Checkout/Checkout";
import { NotFound } from "../pages/NotFound/NotFound";
import { Register } from "../pages/Register/Register";
import { Login } from "../pages/login/Login";
import Home from "../pages/Home/Home";
import { ForgotPassword } from "../pages/ForgotPassword/ForgotPassword";
import ProfileLayout from "../layout/ProfileLayout";
import PersonalInfo from "../pages/Profile/PersonalInfo/PersonalInfo";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/catalog" element={<Catalog />} />

          {/* Profile */}
          <Route element={<ProfileLayout />}>
            <Route path="/profile/personal-info" element={<PersonalInfo />} />
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
