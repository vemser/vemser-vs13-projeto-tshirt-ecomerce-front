import ProductCard from "../../components/product-card/ProductCard";
import ProductMenu from "../../components/product-menu/ProductMenu";

function Catalog() {
  return (
    <main className="flex gap-8 w-full h-full py-16 px-8">
      <section className="w-full h-auto max-w-80">
        <div className="w-full h-full">
          <ProductMenu />
        </div>
      </section>
      <section>
        <p className="font-bold mb-4">Exibindo 1-16 de 72 resultados</p>
        <ul className="flex gap-8 flex-wrap">
          {Array.from({ length: 18 }).map((_, index) => (
            <li key={index}>
              <ProductCard />
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}

export default Catalog;
