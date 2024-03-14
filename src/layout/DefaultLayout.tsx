import { Outlet } from "react-router-dom";

function DefaultLayout() {
  return (
    <main>
      <section>Header</section>
      <Outlet />
      <footer className="w-full bg-primary text-secondary">
        <section className="container mx-auto">
          <div className="flex justify-between py-6 border-b border-secondary">
            <ul className="flex flex-col gap-4">
              <li className="font-bold">Empresa</li>
              <li>Sobre nós</li>
              <li>Blog</li>
              <li>Parceiros</li>
            </ul>
            <ul className="flex flex-col gap-4">
              <li className="font-bold">Empresa</li>
              <li>Sobre nós</li>
              <li>Blog</li>
              <li>Parceiros</li>
            </ul>
            <ul className="flex flex-col gap-4">
              <li className="font-bold">Empresa</li>
              <li>Sobre nós</li>
              <li>Blog</li>
              <li>Parceiros</li>
            </ul>
            <ul className="flex flex-col gap-4">
              <li className="font-bold">Empresa</li>
              <li>Sobre nós</li>
              <li>Blog</li>
              <li>Parceiros</li>
            </ul>
          </div>
          <div className="py-6">
            <p>© 2024 DBC Company. Todos os direitos reservados.</p>
          </div>
        </section>
      </footer>
    </main>
  );
}

export default DefaultLayout;
