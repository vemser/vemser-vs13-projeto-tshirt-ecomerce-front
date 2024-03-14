import { FiHeart, FiSearch, FiShoppingCart } from "react-icons/fi";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../Logo/Logo";

const Header = () => {
  const navigate = useNavigate();

  return (
    <header className="w-full flex justify-center p-7">
      <nav className="container w-full flex justify-between gap-6">
        <Logo onClick={() => navigate("/")} className="cursor-pointer" />

        <ul className="hidden gap-10 items-center md:flex">
          <li className="font-medium cursor-pointer hover:text-black">
            <Link to={"/"}>Início</Link>
          </li>
          <li className="text-gray-600 cursor-pointer hover:text-black">
            <Link to={"/produtos"}>Produtos</Link>
          </li>
          <li className="text-gray-600 cursor-pointer hover:text-black">
            <Link to={"/depoimentos"}>Depoimentos</Link>
          </li>
        </ul>

        <div className="flex gap-1 items-center">
          <div className="p-3 rounded-full hover:bg-gray-100 transition-colors cursor-pointer">
            <FiSearch size={24} />
          </div>
          <div className="p-3 rounded-full hover:bg-gray-100 transition-colors cursor-pointer">
            <FiHeart size={24} />
          </div>
          <div className="p-3 rounded-full hover:bg-gray-100 transition-colors cursor-pointer">
            <FiShoppingCart size={24} />
          </div>

          <button
            onClick={() => navigate("/login")}
            className="hidden md:block bg-black text-white font-medium px-9 py-3 rounded-lg transition-opacity hover:opacity-80 ml-5"
          >
            Login
          </button>
          <div className="block md:hidden ml-2 p-3 rounded-full cursor-pointer hover:bg-gray-100 transition-colors">
            <RxHamburgerMenu size={26} className="" />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
