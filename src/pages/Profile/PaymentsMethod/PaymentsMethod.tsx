import { LuPlus } from "react-icons/lu";
import BankCard from "../../../components/Profile/BankCard/BankCard";

const PaymentsMethod = () => {
  const handleEditProfile = () => {
    console.log("Edit Profile");
  };

  return (
    <>
      <button
        className=" bg-primary text-white px-14 py-3 rounded-lg flex gap-2 items-center hover:bg-opacity-90"
        onClick={handleEditProfile}
      >
        <LuPlus /> Adicionar Cartão
      </button>
      <div className="flex justify-between items-center ">
        <BankCard />
      </div>
    </>
  );
};

export default PaymentsMethod;
