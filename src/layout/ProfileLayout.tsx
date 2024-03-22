import { Outlet } from "react-router-dom";
import ProfileNavbar from "../components/ProfileNavbar/ProfileNavbar";

const ProfileLayout = () => {
  return (
    <main className="md:px-10 md:py-12 p-6">
      <h2 className="text-primary text-4xl">Meu Perfil</h2>

      <section className="sm:flex gap-8 my-8">
        <ProfileNavbar />
        <section className="flex-auto my-4 md:my-0">
          <Outlet />
        </section>
      </section>
    </main>
  );
};

export default ProfileLayout;
