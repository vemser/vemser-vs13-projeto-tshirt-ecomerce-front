import { BrowserRouter, Route, Routes } from "react-router-dom";
import Checkout from "../pages/Checkout/Checkout";
import { Login } from "../pages/Login/Login";
import { Register } from "../pages/Register";
import { ForgotPassword } from "../pages/ForgotPassword/ForgotPassword";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <h1>Home</h1>
            </>
          }
        />
        

        <Route path="/checkout" element={<Checkout />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/recover-password" element={<ForgotPassword />} />
      </Routes>
    </BrowserRouter>
  );
}
