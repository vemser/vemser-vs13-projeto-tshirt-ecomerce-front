import { BrowserRouter, Route, Routes } from "react-router-dom";
import DefaultLayout from "../layout/DefaultLayout";
import Checkout from "../pages/Checkout/Checkout";
import { NotFound } from "../pages/NotFound/NotFound";
import { Register } from "../pages/Register/Register";
import { Login } from "../pages/login/Login";
import Home from "../pages/Home/Home";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/checkout" element={<Checkout />} />
        </Route>
        
        <Route path="*" element={<NotFound />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}
