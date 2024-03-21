import { Drawer, Pagination, PaginationItem } from "@mui/material";
import { useState } from "react";
import { LuArrowLeft, LuArrowRight, LuX } from "react-icons/lu";
import { Link } from "react-router-dom";
import BenefitsCards from "../../components/BenefitsCards/BenefitsCards";
import ProductCard from "../../components/product-card/ProductCard";
import ProductMenu from "../../components/product-menu/ProductMenu";

function Catalog() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

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
            <p className="font-bold">Exibindo 1-16 de 72 resultados</p>
            <button
              onClick={handleDrawerToggle}
              className="border border-primary rounded-md px-2 py-1 block lg:hidden transition-colors hover:bg-primary hover:text-secondary"
            >
              Filtros
            </button>
          </div>
          <ul className="flex gap-9 flex-wrap">
            {Array.from({ length: 12 }).map((_, index) => (
              <li key={index}>
                <Link to="/product">
                  <ProductCard />
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-10 w-full flex justify-center">
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
      <BenefitsCards />
    </>
  );
}

export default Catalog;
