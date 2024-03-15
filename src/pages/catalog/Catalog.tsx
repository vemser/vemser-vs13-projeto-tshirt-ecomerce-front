import { Pagination, PaginationItem } from "@mui/material";
import {
  LuArrowLeft,
  LuArrowRight,
  LuCircleDollarSign,
  LuCreditCard,
  LuHeadphones,
  LuPackage,
} from "react-icons/lu";
import ProductCard from "../../components/product-card/ProductCard";
import ProductMenu from "../../components/product-menu/ProductMenu";

function Catalog() {
  return (
    <>
      <section className="flex gap-12 w-full h-full py-16">
        <section className="w-full h-auto max-w-80">
          <div className="w-full h-full">
            <ProductMenu />
          </div>
        </section>
        <section>
          <p className="font-bold mb-4">Exibindo 1-16 de 72 resultados</p>
          <ul className="flex gap-8 flex-wrap">
            {Array.from({ length: 12 }).map((_, index) => (
              <li key={index}>
                <ProductCard />
              </li>
            ))}
          </ul>
          <div className="mt-8 w-full flex justify-center">
            <Pagination
              count={10}
              shape="rounded"
              variant="outlined"
              siblingCount={0}
              boundaryCount={1}
              renderItem={(item) => (
                <PaginationItem
                  sx={{
                    backgroundColor: "white",
                    borderColor: "black",
                    "&:hover": {
                      backgroundColor: "black",
                      color: "white",
                    },
                    "&.Mui-selected": {
                      backgroundColor: "black",
                      color: "white",
                    },
                    "&.Mui-selected:hover": {
                      color: "black",
                      backgroundColor: "white",
                    },
                  }}
                  slots={{ previous: LuArrowLeft, next: LuArrowRight }}
                  {...item}
                />
              )}
            />
          </div>
        </section>
      </section>
      <section className="w-full flex justify-between my-6">
        <div>
          <i className="text-4xl">
            <LuPackage />
          </i>
          <p className="font-bold text-lg mt-2">Entrega Grátis</p>
          <p>Entrega grátis para comprar acima de R$ 150,00</p>
        </div>
        <div>
          <i className="text-4xl">
            <LuCircleDollarSign />
          </i>
          <p className="font-bold text-lg mt-2">Dinheiro Garantido</p>
          <p>Dentro de 30 dias para o ter o dinheiro de volta</p>
        </div>
        <div>
          <i className="text-4xl">
            <LuHeadphones />
          </i>
          <p className="font-bold text-lg mt-2">Suporte Online</p>
          <p>24 horas por dia, 7 dias na semana</p>
        </div>
        <div>
          <i className="text-4xl">
            <LuCreditCard />
          </i>
          <p className="font-bold text-lg mt-2">Pagamento Flexível</p>
          <p>Pague com múltiplos cartões de crédito</p>
        </div>
      </section>
    </>
  );
}

export default Catalog;
