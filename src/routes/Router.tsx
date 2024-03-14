import { BrowserRouter, Route, Routes } from "react-router-dom";
import Checkout from "../pages/Checkout/Checkout";
import Header from "../components/Header/Header";
import { Login } from "../pages/login/Login";
import { Register } from "../pages/Register/Register";
import Home from "../pages/Home/Home";

export default function Router() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}
