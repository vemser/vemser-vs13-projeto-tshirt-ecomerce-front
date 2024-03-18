import ProductCheckoutCard from "../../components/ProductCheckoutCard/ProductCheckoutCard";
import Subtotal from "../../components/Subtotal/Subtotal";

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

const Checkout = () => {
  return (
    <main className="md:px-36 md:py-12 p-6">
      <h2 className="text-primary text-4xl">Carrinho</h2>

      {/* Products Lists */}
      <div
        className="grid lg:grid-cols-[2fr,1fr] mt-6
     gap-6
      "
      >
        <section className="flex flex-col ">
          <div className="md:grid  md:grid-cols-[1fr,110px,120px,70px] hidden">
            <p>Produtos</p>
            <p>Preço</p>
            <p>Quantidade</p>
            <p>Total</p>
          </div>
          {producstList.map((product, index) => (
            <ProductCheckoutCard key={index} {...product} />
          ))}
        </section>

        <Subtotal />
      </div>
    </main>
  );
};

export default Checkout;
