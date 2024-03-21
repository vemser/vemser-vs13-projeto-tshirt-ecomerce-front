import { LuPenSquare, LuPhoneCall, LuTrash2 } from "react-icons/lu";

interface AddressCardProps {
  title: string;
  address: string;
  phone: string;
}

const AddressCard = ({ title, address, phone }: AddressCardProps) => {
  const handleDeleteClick = () => {
    console.log("Delete Address");
  };

  const handleEditClick = () => {
    console.log("Edit Address");
  };

  return (
    <div className="flex justify-between items-center border-b-2 w-full py-4 my-2">
      <div className="flex  gap-4">
        <div className="flex  flex-col gap-3">
          <p className="text-lg font-bold ">{title}</p>
          <p className="text-xs md:text-sm">{address}</p>
          <p className="flex items-center gap-2 text-xs md:text-sm">
            <LuPhoneCall fontSize={16} />
            {phone}
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <button
          className="flex items-center gap-2 text-primary rounded-lg px-4 py-2 bg-editGray hover:bg-gray-300 transition-all"
          onClick={handleEditClick}
        >
          <LuPenSquare />
          Editar
        </button>
        <button
          className="flex items-center gap-2 text-white rounded-lg px-4 py-2 bg-red-400 hover:bg-red-500 transition-all"
          onClick={handleDeleteClick}
        >
          <LuTrash2 />
          Excluir
        </button>
      </div>
    </div>
  );
};

export default AddressCard;
