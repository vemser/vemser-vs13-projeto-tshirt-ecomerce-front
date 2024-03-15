import { Box, Drawer } from "@mui/material";
import { useState } from "react";
import { LuHeart, LuSearch, LuShoppingCart, LuMenu, LuX } from "react-icons/lu";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../Logo/Logo";
import DropdownCart from "../DropdownCart/DropdownCart";

const Header = () => {
  const navigate = useNavigate();
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const toggleDropdownCart = () => {
    const dropdown = document.getElementById("dropdownDelay");
    dropdown?.classList.toggle("hidden");
  };

  const drawer = (
    <Drawer
      anchor="right"
      open={mobileOpen}
      onClose={handleDrawerToggle}
      ModalProps={{
        keepMounted: true,
      }}
      variant="temporary"
      sx={{
        width: "100%",
        "& .MuiDrawer-paper": {
          width: "100%",
        },
        backgroundColor: "black",
      }}
    >
      <Box className="bg-primary h-full text-center py-8 px-10">
        <div className="flex justify-between items-center">
          <Logo color="secondary" />
          <LuX
            onClick={() => setMobileOpen(false)}
            size={32}
            color="white"
            className="cursor-pointer"
          />
        </div>
        <ul className="flex flex-col gap-10 mt-10">
          <li className="text-secondary font-medium cursor-pointer md:text-2xl text-xl">
            <Link to={"/"} onClick={() => setMobileOpen(false)}>
              Início
            </Link>
          </li>
          <li className="text-secondary cursor-pointer md:text-2xl text-xl">
            <Link to={"/produtos"} onClick={() => setMobileOpen(false)}>
              Produtos
            </Link>
          </li>
          <li className="text-secondary cursor-pointer md:text-2xl text-xl">
            <Link to={"/depoimentos"} onClick={() => setMobileOpen(false)}>
              Depoimentos
            </Link>
          </li>
        </ul>
        <button
          onClick={() => navigate("/login")}
          className="bg-secondary mt-14 md:text-2xl text-xl text-primary font-medium px-12 py-3 rounded-lg transition-opacity hover:opacity-80"
        >
          Login
        </button>
      </Box>
    </Drawer>
  );

  const container =
    window !== undefined ? () => window.document.body : undefined;

  return (
    <header className="w-full flex justify-center p-7">
      <nav className="container w-full flex justify-between gap-6">
        <Logo onClick={() => navigate("/")} className="cursor-pointer" />

        <ul className="hidden gap-10 items-center md:flex">
          <li className="font-medium cursor-pointer hover:text-black">
            <Link to={"/"}>Início</Link>
          </li>
          <li className="text-tertiary cursor-pointer hover:text-black">
            <Link to={"/produtos"}>Produtos</Link>
          </li>
          <li className="text-tertiary cursor-pointer hover:text-black">
            <Link to={"/depoimentos"}>Depoimentos</Link>
          </li>
        </ul>

        <div className="flex gap-1 items-center">
          <div className="p-3 rounded-full hover:bg-gray-100 transition-colors cursor-pointer">
            <LuSearch size={24} />
          </div>
          <div className="p-3 rounded-full hover:bg-gray-100 transition-colors cursor-pointer">
            <LuHeart size={24} />
          </div>
          <div
            className="p-3 rounded-full hover:bg-gray-100 transition-colors cursor-pointer"
            id="cart"
          >
            <LuShoppingCart
              size={24}
              onClick={() => {
                toggleDropdownCart();
              }}
            />
          </div>
          <DropdownCart />

          <button
            onClick={() => navigate("/login")}
            className="hidden md:block border-2 border-transparent bg-black text-secondary font-medium px-4 lg:px-9 py-2 rounded-lg transition-opacity hover:opacity-80 ml-5"
          >
            Login
          </button>

          <button
            onClick={() => navigate("/register")}
            className="hidden box-border md:block border-2 border-primary bg-transparent text-primary font-medium px-4 lg:px-9 py-2  rounded-lg transition-colors hover:bg-primary hover:text-white ml-5"
          >
            Cadastrar
          </button>
          <div className="block md:hidden ml-2 p-3 rounded-full cursor-pointer hover:bg-gray-100 transition-colors">
            <LuMenu onClick={handleDrawerToggle} size={26} />
          </div>
        </div>
      </nav>

      <Drawer
        container={container}
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        anchor="right"
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: "block", sm: "none" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: 260,
            backgroundColor: "var(--background-dark)",
            color: "var(--light-text)",
          },
        }}
      >
        {drawer}
      </Drawer>
    </header>
  );
};

export default Header;
