import { Outlet } from "react-router-dom";
import ProfileNavbar from "../components/ProfileNavbar/ProfileNavbar";

const ProfileLayout = () => {
  return (
    <>
      <section>
        <Outlet />
        <div className="md:px-36 p-1">
          <ProfileNavbar />
        </div>
      </section>
    </>
  );
};

export default ProfileLayout;
