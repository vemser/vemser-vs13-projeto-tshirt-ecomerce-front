import {
  CircularProgress,
  Drawer,
  Pagination,
  PaginationItem,
} from "@mui/material";
import { useEffect, useState } from "react";
import { LuArrowLeft, LuArrowRight, LuX } from "react-icons/lu";
import { Link } from "react-router-dom";
import BenefitsCards from "../../components/BenefitsCards/BenefitsCards";
import ProductCard from "../../components/product-card/ProductCard";
import ProductMenu from "../../components/product-menu/ProductMenu";
import { useGetAllProductsQuery } from "../../services/catalog";
import { convertMoney } from "../../utils/convert-money";

function Catalog() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { data, isLoading, isError } = useGetAllProductsQuery();

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <>
      <Drawer
        variant="temporary"
        open={mobileOpen}
        ModalProps={{
          keepMounted: true,
        }}
        anchor="bottom"
      >
        <div className="w-full h-full">
          <div className="p-5">
            <div className="flex justify-between text-lg mb-5">
              <p className="">Filtros</p>
              <i onClick={handleDrawerToggle} className="cursor-pointer">
                <LuX />
              </i>
            </div>
            <ProductMenu />
          </div>
          <button className="w-full bg-primary text-secondary p-4 hover:bg-tertiary">
            Aplicar filtros
          </button>
        </div>
      </Drawer>
      <section className="flex gap-12 w-full h-full py-10 px-6">
        <section className="w-full h-auto max-w-80 hidden lg:block">
          <div className="w-full h-full">
            <ProductMenu />
          </div>
        </section>
        <section>
          <div className="w-full flex justify-between mb-4 gap-2 flex-wrap">
            <p className="font-bold">{`Exibindo 1-${data?.numberOfElements} de ${data?.totalElements} resultados`}</p>
            <button
              onClick={handleDrawerToggle}
              className="border border-primary rounded-md px-2 py-1 block lg:hidden transition-colors hover:bg-primary hover:text-secondary"
            >
              Filtros
            </button>
          </div>
          <ul className="flex gap-9 flex-wrap">
            {isError && <p>Erro ao carregar produtos</p>}
            {isLoading && <CircularProgress />}
            {data &&
              data.content.map((product) => (
                <li key={product.idProduto}>
                  <Link to="/product">
                    <ProductCard
                      product={{
                        id: product.idProduto,
                        description: product.descricao,
                        title: product.titulo,
                        price: convertMoney(product.variacaoList[0].preco),
                      }}
                    />
                  </Link>
                </li>
              ))}
          </ul>
          <div className="mt-10 w-full flex justify-center">
            <Pagination
              count={data?.totalPages}
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
      <BenefitsCards />
    </>
  );
}

export default Catalog;
