import { Link, useNavigate } from "react-router-dom";
import Logo from "../../assets/logo.png";

const Header = () => {
  const navigate = useNavigate();

  return (
    <header className="flex justify-center p-7">
      <nav className="max-w-7xl w-full flex justify-between gap-6">
        <img
          onClick={() => navigate("/")}
          className="cursor-pointer"
          src={Logo}
          alt="logo do iShirt"
        />

        <ul className="hidden gap-10 items-center md:flex">
          <li className="font-medium cursor-pointer hover:text-black">
            <Link to={"/"}>Início</Link>
          </li>
          <li className="text-gray-600 cursor-pointer hover:text-black">
            <Link to={"/"}>Produtos</Link>
          </li>
          <li className="text-gray-600 cursor-pointer hover:text-black">
            <Link to={"/"}>Depoimentos</Link>
          </li>
        </ul>

        <div className="flex gap-8">
          <button
            onClick={() => navigate("/login")}
            className="bg-black text-white font-medium px-9 py-2 rounded-lg transition-opacity hover:opacity-80"
          >
            Login
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
