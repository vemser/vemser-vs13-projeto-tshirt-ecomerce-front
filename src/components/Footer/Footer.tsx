import { LuFacebook, LuInstagram, LuTwitter, LuYoutube } from "react-icons/lu";
import Logo from "../Logo/Logo";

function Footer() {
  return (
    <footer className="w-full bg-primary text-secondary px-7">
      <section className="container mx-auto">
        <div className="flex justify-between py-6 border-b border-secondary">
          <div className="flex flex-col gap-6">
            <Logo color="secondary" />
            <p className="w-80">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint.
            </p>
            <div className="flex gap-6 *:text-2xl items-center">
              <i>
                <LuFacebook />
              </i>
              <i>
                <LuInstagram />
              </i>
              <i>
                <LuYoutube />
              </i>
              <i>
                <LuTwitter />
              </i>
            </div>
          </div>
          <ul className="flex flex-col gap-4">
            <li className="font-bold">Empresa</li>
            <li>Sobre nós</li>
            <li>Blog</li>
            <li>Parceiros</li>
          </ul>
          <ul className="flex flex-col gap-4">
            <li className="font-bold">Termos</li>
            <li>Termos de serviço</li>
            <li>Política de privacidade</li>
            <li>Política de cookies</li>
          </ul>
          <ul className="flex flex-col gap-4">
            <li className="font-bold">Comunidade</li>
            <li>Github</li>
            <li>Discord</li>
            <li>Twitter</li>
          </ul>
        </div>
        <div className="py-6">
          <p>© 2024 DBC Company. Todos os direitos reservados.</p>
        </div>
      </section>
    </footer>
  );
}

export default Footer;
