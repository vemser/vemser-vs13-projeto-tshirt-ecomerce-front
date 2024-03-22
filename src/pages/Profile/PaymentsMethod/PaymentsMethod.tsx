import { LuPlus } from "react-icons/lu";
import BankCard from "../../../components/Profile/BankCard/BankCard";

const cards = [
  {
    cardCompany: "Mastercard",
    cardNumber: "**** **** **** 1234",
  },
  {
    cardCompany: "Visa",
    cardNumber: "**** **** **** 5678",
  },
  {
    cardCompany: "Elo",
    cardNumber: "**** **** **** 9012",
  },
];

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
      <div>
        {cards.map((card, index) => (
          <BankCard
            key={index}
            cardCompany={card.cardCompany}
            cardNumber={card.cardNumber}
          />
        ))}
      </div>
    </>
  );
};

export default PaymentsMethod;
