import ProductCheckoutCard from "../../components/ProductCheckoutCard/ProductCheckoutCard";

const producstList = [
  {
    title: "Camiseta",
    size: "M",
    price: 29.99,
    img: "https://via.placeholder.com/150",
  },
  // {
  //   title: "Camiseta",
  //   size: "G",
  //   price: 39.99,
  //   img: "https://via.placeholder.com/150",
  // },
];

const Checkout = () => {
  return (
    <main className="px-36 py-12">
      <h2 className="text-primary text-4xl">Carrinho</h2>

      {/* Products Lists */}
      <section className="flex flex-col justify-around">
        <div className="flex justify-around">
          <p>Produtos</p>
          <p>Preço</p>
          <p>Quantidade</p>
          <p>Total</p>
        </div>
        {producstList.map((product, index) => (
          <ProductCheckoutCard key={index} {...product} />
        ))}
      </section>
    </main>
  );
};

export default Checkout;
