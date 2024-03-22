import { LuPlus } from "react-icons/lu";
import AddressCard from "../../../components/Profile/AddressCard/AddressCard";
import AddressFormDialog from "../../../components/Profile/AddressFormDialog/AddressFormDialog";
import { useState } from "react";

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
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const HandleAddAddressClick = () => {
    handleOpen();
  };

  return (
    <>
      <button
        className=" bg-primary text-white px-14 py-3 rounded-lg flex gap-2 items-center hover:bg-opacity-90"
        onClick={HandleAddAddressClick}
      >
        <LuPlus /> Adicionar Endereço
      </button>
      {open && <AddressFormDialog open={open} handleClose={handleClose} />}
      <div>
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
