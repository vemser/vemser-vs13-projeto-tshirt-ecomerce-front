import ProductCard from "../../components/product-card/ProductCard";

function Wishlist() {
  return (
    <section className="flex flex-wrap gap-5 max-w-6xl">
      {Array.from({ length: 12 }).map((_, index) => (
        <ProductCard key={index} />
      ))}
    </section>
  );
}

export default Wishlist;
