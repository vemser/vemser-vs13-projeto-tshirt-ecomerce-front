import {
  LuBell,
  LuCreditCard,
  LuHeart,
  LuMapPin,
  LuPackage,
  LuSettings,
  LuUser,
} from "react-icons/lu";
import { NavLink } from "react-router-dom";

const ProfileNavbar = () => {
  return (
    <nav className="flex flex-col shadow w-48 md:w-64">
      <div className="flex items-center gap-4 border-b p-4">
        <img
          src="
          https://via.placeholder.com/150

        "
          alt="Profile Picture"
          className="w-16 h-16 rounded-full"
        />
        <div>
          <p className="text-gray-500">Olá, </p>
          <h1 className="text-lg font-bold">John Doe</h1>
        </div>
      </div>
      <div className="flex flex-col my-4">
        <NavLink
          to="/profile/personal-info"
          className={({ isActive }) =>
            isActive
              ? "flex  items-center p-4  gap-3 bg-primary text-secondary"
              : "flex  items-center p-4  gap-3 hover:bg-primary hover:text-secondary "
          }
        >
          <LuUser fontSize={24} />
          <p className="">Dados Pessoais</p>
        </NavLink>

        <NavLink
          to="/profile/orders"
          className={({ isActive }) =>
            isActive
              ? "flex  items-center p-4  gap-3 bg-primary text-secondary"
              : "flex  items-center p-4  gap-3 hover:bg-primary hover:text-secondary "
          }
        >
          <LuPackage fontSize={24} />

          <p className="">Meus Pedidos</p>
        </NavLink>

        <NavLink
          to="/profile/favorites"
          className={({ isActive }) =>
            isActive
              ? "flex  items-center p-4  gap-3 bg-primary text-secondary"
              : "flex  items-center p-4  gap-3 hover:bg-primary hover:text-secondary "
          }
        >
          <LuHeart fontSize={24} />

          <p className="">Meus Favoritos</p>
        </NavLink>

        <NavLink
          to="/profile/addresses"
          className={({ isActive }) =>
            isActive
              ? "flex  items-center p-4  gap-3 bg-primary text-secondary"
              : "flex  items-center p-4  gap-3 hover:bg-primary hover:text-secondary "
          }
        >
          <LuMapPin fontSize={24} />

          <p className=""> Endereços</p>
        </NavLink>

        <NavLink
          to="/profile/payment-methods"
          className={({ isActive }) =>
            isActive
              ? "flex  items-center p-4  gap-3 bg-primary text-secondary"
              : "flex  items-center p-4  gap-3 hover:bg-primary hover:text-secondary "
          }
        >
          <LuCreditCard fontSize={24} />

          <p className=""> Formas de Pagamento</p>
        </NavLink>

        <NavLink
          to="/profile/notifications"
          className={({ isActive }) =>
            isActive
              ? "flex  items-center p-4  gap-2 bg-primary text-secondary"
              : "flex  items-center p-4  gap-2 hover:bg-primary hover:text-secondary "
          }
        >
          <LuBell fontSize={24} />

          <p className="">Notificações</p>
        </NavLink>

        <NavLink
          to="/profile/settings"
          className={({ isActive }) =>
            isActive
              ? "flex  items-center p-4  gap-2 bg-primary text-secondary"
              : "flex  items-center p-4  gap-2 hover:bg-primary hover:text-secondary "
          }
        >
          <LuSettings fontSize={24} />

          <p className="">Configurações</p>
        </NavLink>
      </div>
    </nav>
  );
};

export default ProfileNavbar;
