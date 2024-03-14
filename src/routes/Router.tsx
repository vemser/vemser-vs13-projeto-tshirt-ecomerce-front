import { BrowserRouter, Route, Routes } from "react-router-dom";
import Checkout from "../pages/Checkout/Checkout";
import { Login } from "../pages/Login/Login";
import { Register } from "../pages/Register";
import { NotFound } from "../pages/NotFound/NotFound";

import Header from "../components/Header/Header";


export default function Router() {
  return (
    <BrowserRouter>

      <Header />

      <Routes>
        <Route path="/" element={<></>} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />

      </Routes>
    </BrowserRouter>
  );
}
