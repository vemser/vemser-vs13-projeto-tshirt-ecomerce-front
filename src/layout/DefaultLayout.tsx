import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";

function DefaultLayout() {
  return (
    <main className="w-full min-h-screen flex flex-col">
      <Header />
      <section className="container py-7 mx-auto flex-1">
        <Outlet />
      </section>
      <Footer />
    </main>
  );
}

export default DefaultLayout;
