import { LuTrash2 } from "react-icons/lu";

interface BankCardProps {
  cardCompany: string;
  cardNumber: string;
}

const BankCard = ({ cardCompany, cardNumber }: BankCardProps) => {
  const handleDeleteClick = () => {
    console.log("Delete Card");
  };

  return (
    <div className="flex justify-between items-center border-b-2 w-full py-4 my-2">
      <div className="flex  gap-4">
        <img
          src="https://via.placeholder.com/150"
          alt="Logo da bandeira do Cartão"
          className="w-16 h-16 rounded-lg"
        />
        <div className="flex  flex-col gap-3">
          <p className="text-lg font-bold ">{cardCompany}</p>
          <p className="text-xs md:text-sm">{cardNumber}</p>
        </div>
      </div>
      <div>
        <button
          className="flex   items-center gap-2 text-white rounded-lg px-4 py-2 bg-red-400 hover:bg-red-500 transition-all"
          onClick={handleDeleteClick}
        >
          <LuTrash2 />
          Excluir
        </button>
      </div>
    </div>
  );
};

export default BankCard;
