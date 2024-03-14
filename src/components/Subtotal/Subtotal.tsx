const Subtotal = () => {
  return (
    <aside
      className="
    bg-gray-100
    rounded-lg
    p-5
    flex
    flex-col
    justify-between
    gap-5
    lg:max-w-80
    mx-auto
  "
    >
      <p className="font-bold flex justify-between">
        Subtotal <span>R$ 200</span>
      </p>

      <div>
        <span>Digite o Cupom de Desconto</span>
        <input
          type="text"
          className="rounded-lg border border-black ph-full w-full p-3 text-primary "
          placeholder="ISHIRTS15"
        />
      </div>
      <p className="flex justify-between">
        Frete <span>R$ 24</span>
      </p>
      <p className="font-bold flex justify-between">
        Total <span>R$ 224,00</span>
      </p>
      <button className="bg-black text-secondary rounded-lg p-4 hover:bg-opacity-90">
        Confirmar pedido
      </button>
    </aside>
  );
};

export default Subtotal;
