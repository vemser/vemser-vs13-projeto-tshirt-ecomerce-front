import { LuPlus } from "react-icons/lu";
import ProfileNavbar from "../../../components/ProfileNavbar/ProfileNavbar";
import BankCard from "../../../components/Profile/BankCard/BankCard";

const PaymentsMethod = () => {
  const handleEditProfile = () => {
    console.log("Edit Profile");
  };

  return (
    <main className="md:px-36 md:py-12 p-6">
      <h2 className="text-primary text-4xl">Meu Perfil</h2>

      <section className="sm:flex gap-8 my-8">
        <ProfileNavbar />
        <section className="flex-auto my-4 md:my-0">
          <button
            className=" bg-primary text-white px-14 py-3 rounded-lg flex gap-2 items-center hover:bg-opacity-90"
            onClick={handleEditProfile}
          >
            <LuPlus /> Adicionar Cartão
          </button>
          <div className="flex justify-between items-center ">
            <BankCard />
          </div>
        </section>
      </section>
    </main>
  );
};

export default PaymentsMethod;
