import ProgressBar from "../../components/ProgressBar/ProgressBar";
import Subtotal from "../../components/Subtotal/Subtotal";

const producstList = [
  {
    title: "Camiseta Básica",
    size: "M",
    price: 29.99,
    img: "https://via.placeholder.com/150",
    color: "Azul",
  },
  {
    title: "Camiseta com Estampa",
    size: "G",
    price: 39.99,
    img: "https://via.placeholder.com/150",
    color: "Vermelho",
  },
  {
    title: "Camiseta Listrada",
    size: "G",
    price: 29.99,
    img: "https://via.placeholder.com/150",
    color: "Verde",
  },
];

const ReviewYourOrder = () => {
  return (
    <main className="md:px-36 md:py-12 p-6">
      <h2 className="text-primary text-4xl">Revise seu pedido</h2>

      {/* Products Lists */}
      <div
        className="grid lg:grid-cols-[2fr,1fr] mt-6
     gap-6
      "
      >
        <section className="flex flex-col gap-3">
          <ProgressBar />
          <h2 className="font-semibold text-xl mt-4 mb-3">
            Previsão de entrega: Mar 22, 2024
          </h2>
          {producstList.map((product, index) => (
            <div key={index} className="flex items-center gap-4 pb-2 border-b">
              <img
                className="w-20 h-20"
                src={product.img}
                alt={product.title}
              />
              <div className="flex flex-col flex-1">
                <strong>{product.title}</strong>
                <p>R$ {product.price}</p>
                <p>Tamanho: {product.size}</p>
              </div>
            </div>
          ))}
          <h2 className="font-semibold text-xl mt-6 mb-1">
            Endereço de entrega
          </h2>
          <div className="flex items-center gap-4 pb-2 border-b">
            <div className="flex flex-col flex-1">
              <strong className="text-lg font-semibold">DBC Company</strong>
              <p>
                Tv. São José, 455 - Navegantes, Porto Alegre - RS, 90240-200
              </p>
              {/* <p>Cartão de Débito (... ... ... ..89)</p> */}
            </div>
          </div>

          <h2 className="font-semibold text-xl mt-4 mb-1">
            Método de pagamento
          </h2>
          <div className="flex items-center gap-4 pb-2 border-b">
            <div className="flex flex-col flex-1">
              <strong className="font-semibold">
                Cartão de Débito (... ... ... ..89)
              </strong>
            </div>
          </div>
        </section>

        <div>
          <Subtotal />
        </div>
      </div>
    </main>
  );
};

export default ReviewYourOrder;
