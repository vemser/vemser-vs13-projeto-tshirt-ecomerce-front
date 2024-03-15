import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const producstList = [
  {
    title: "Camiseta",
    size: "M",
    price: 29.99,
    img: "https://via.placeholder.com/150",
    color: "Azul",
  },
  {
    title: "Camiseta",
    size: "G",
    price: 39.99,
    img: "https://via.placeholder.com/150",
    color: "Vermelho",
  },
];

const DropdownCart = () => {
  const navigate = useNavigate();

  return (
    <>
      <div
        id="dropdownDelay"
        className="z-10 hidden absolute bg-white divide-y divide-gray-100 rounded-lg shadow  w-52 md:w-72 top-16 right-0 md:right-16 mt-4"
      >
        <div className="flex flex-col gap-4 p-4">
          {producstList.map((product, index) => (
            <div key={index} className="flex gap-4 items-center">
              <img
                src={product.img}
                alt={product.title}
                className="rounded-lg w-16 h-16 object-cover"
              />
              <div>
                <p className="text-primary font-bold">{product.title}</p>
                <p className="text-tertiary">{product.size}</p>
                <p className="text-primary font-bold text-base">
                  R${product.price}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="p-4 flex justify-between">
          <p className="text-tertiary">Total</p>
          <p className="text-primary font-medium">R$69,98</p>
        </div>

        <div className="p-4 flex flex-col gap-4 ">
          <button
            className="w-full bg-transparent border-black border-2 text-primary font-medium py-3 rounded-lg transition-opacity hover:opacity-80"
            onClick={() => navigate("/checkout")}
          >
            Ver Carrinho
          </button>
          <button className="w-full bg-primary text-secondary font-medium py-3 rounded-lg transition-opacity hover:opacity-80">
            Finalizar a compra
          </button>
        </div>
      </div>
    </>
  );
};

export default DropdownCart;
