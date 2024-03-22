import { LuPlus } from "react-icons/lu";
import AddressCard from "../../../components/Profile/AddressCard/AddressCard";

const addresses = [
  {
    title: "Casa",
    address: "Rua das Margaridas, 100, Jardim das Flores, São Paulo, SP",
    phone: "(11) 99999-9999",
  },
  {
    title: "Trabalho",
    address: "Rua das Rosas, 200, Jardim das Flores, São Paulo, SP",
    phone: "(11) 99999-9999",
  },
  {
    title: "Casa da Praia",
    address: "Rua das Margaridas, 100, Jardim das Flores, São Paulo, SP",
    phone: "(11) 99999-9999",
  },
];

const ManageAddress = () => {
  const HandleAddAddressClick = () => {
    console.log("Click add Adress");
  };

  return (
    <>
      <button
        className=" bg-primary text-white px-14 py-3 rounded-lg flex gap-2 items-center hover:bg-opacity-90"
        onClick={HandleAddAddressClick}
      >
        <LuPlus /> Adicionar Endereço
      </button>
      <div className="">
        {addresses.map((address, index) => (
          <AddressCard
            key={index}
            title={address.title}
            address={address.address}
            phone={address.phone}
          />
        ))}
      </div>
    </>
  );
};

export default ManageAddress;
