import { LuFileText, LuHome, LuWallet } from "react-icons/lu";

const ProgressBar = () => {
  return (
    <div className="flex justify-between">
      <div className="flex flex-col items-center w-14 justify-center gap-1">
        <div className="w-12 h-12 rounded-xl flex justify-center items-center bg-primary">
          <LuHome size={24} color="white" />
        </div>
        Endereço
      </div>
      <hr className="flex-1 border-dashed border-primary mt-6" />
      <div className="flex flex-col items-center w-14 justify-center gap-1">
        <div className="w-12 h-12 rounded-xl flex justify-center items-center bg-primary">
          <LuWallet size={24} color="white" />
        </div>
        Pagamento
      </div>
      <hr className="flex-1 border-dashed border-primary mt-6" />
      <div className="flex flex-col items-center w-14 justify-center gap-1">
        <div className="w-12 h-12 rounded-xl flex justify-center items-center bg-primary">
          <LuFileText size={24} color="white" />
        </div>
        Revisão
      </div>
    </div>
  );
};

export default ProgressBar;
