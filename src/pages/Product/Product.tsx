import { Tab, Tabs } from "@mui/material";
import { useState } from "react";
import { LuHeart, LuStar, LuStarHalf } from "react-icons/lu";
import BenefitsCards from "../../components/BenefitsCards/BenefitsCards";
import ReviewCard from "../../components/ReviewCard/ReviewCard";
import ProductCard from "../../components/product-card/ProductCard";

function Product() {
  const [sizeSelected, setSizeSelected] = useState<number | null>(null);
  const [tab, setTab] = useState<number>(0);

  const handleSizeSelected = (size: number) => {
    setSizeSelected(size);
  };

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    event.preventDefault();
    setTab(newValue);
  };

  interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
  }

  const CustomTabPanel = ({ value, index, children }: TabPanelProps) => {
    return (
      <div hidden={value !== index}>
        {value === index && <div className="mt-4">{children}</div>}
      </div>
    );
  };

  return (
    <section className="px-10 w-full">
      <section className="w-full flex flex-col lg:flex-row gap-6 max-w-7xl">
        <section className="w-full max-w-xl">
          <div className="w-full max-w-[540px]">
            <img
              className="object-contain"
              src="https://placeholder.com/600x600"
              alt="imagem placeholder"
              width="100%"
              height="100%"
            />
          </div>
          <div className="flex mt-3 lg:mt-5 gap-5">
            {Array.from({ length: 4 }).map((_, index) => (
              <div key={index}>
                <img
                  src="https://placeholder.com/120x120"
                  alt="imagem placeholder"
                />
              </div>
            ))}
          </div>
        </section>
        <section className="w-full flex flex-col gap-3">
          <h1 className="text-3xl font-bold">YK Disney</h1>
          <h2 className="text-xl">Girls Pink Moana Printed Dress</h2>
          <div className="flex flex-col sm:flex-row gap-2">
            <div className="flex gap-1 items-center">
              <LuStar size={20} />
              <LuStar size={20} />
              <LuStar size={20} />
              <LuStar size={20} />
              <LuStarHalf size={20} />
            </div>
            <div>
              <span className="mr-2">4.5</span>
              <span>(121 Reviews)</span>
            </div>
          </div>
          <div className="flex gap-2">
            <span className="text-xl">R$ 80,00</span>
            <span className="text-xl line-through opacity-25">R$ 100,00</span>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Perspiciatis, aliquam nisi. Sequi harum nisi praesentium obcaecati,
            mollitia vitae deleniti quisquam provident in voluptatem? Ducimus,
            earum? Ex doloribus quis rerum quisquam?
          </p>
          <div>
            <p className="text-lg font-bold mb-1">Cores</p>
            <div className="flex gap-3">
              {Array.from({ length: 4 }).map((_, index) => (
                <div key={index} className="w-9 h-9 bg-red-600 rounded"></div>
              ))}
            </div>
          </div>
          <div>
            <p className="text-lg font-bold mb-1">Tamanhos</p>
            <div className="flex gap-3">
              {Array.from({ length: 5 }).map((_, index) => {
                const isSelected = sizeSelected === index;
                const classSelected = isSelected
                  ? "bg-primary text-secondary"
                  : "";

                return (
                  <div
                    onClick={() => handleSizeSelected(index)}
                    key={index}
                    className={`cursor-pointer w-9 h-9 rounded border border-primary flex items-center justify-center ${classSelected}`}
                  >
                    <span>{index}</span>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="mt-6 flex flex-col md:flex-row gap-4 md:items-center">
            <div className="flex gap-4">
              <div
                className="px-3 py-4 inline-block border border-primary rounded-lg"
                data-hs-input-number
              >
                <div className="flex items-center gap-x-1.5">
                  <button
                    type="button"
                    className="size-6 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-md text-primary shadow-none hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none "
                    data-hs-input-number-decrement
                    onClick={() => {}}
                  >
                    <svg
                      className="flex-shrink-0 size-3.5"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14" />
                    </svg>
                  </button>
                  <input
                    className="p-0 w-6 bg-transparent border-0 text-primary text-center focus:ring-0"
                    type="text"
                    value={1}
                    data-hs-input-number-input
                    min={0}
                    max={99}
                  />
                  <button
                    type="button"
                    className="size-6 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-md shadow-none text-primary hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none "
                    data-hs-input-number-increment
                    onClick={() => {}}
                  >
                    <svg
                      className="flex-shrink-0 size-3.5"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14" />
                      <path d="M12 5v14" />
                    </svg>
                  </button>
                </div>
              </div>
              <div className="px-4 py-4 border border-primary rounded-lg">
                <button className="w-5 h-5 flex items-center justify-center">
                  <LuHeart size={20} />
                </button>
              </div>
            </div>
            <button className="w-full px-3 py-4 bg-primary text-white rounded-lg">
              Adicionar ao carrinho
            </button>
          </div>
        </section>
      </section>
      <section className="py-4 mb-8 border-b border-primary border-opacity-15">
        <Tabs
          value={tab}
          onChange={handleTabChange}
          variant="scrollable"
          allowScrollButtonsMobile
          scrollButtons
          aria-label="basic tabs example"
        >
          <Tab
            sx={{
              color: "black",
              "&.Mui-selected": {
                fontWeight: "bold",
                color: "black",
                borderColor: "black",
              },
            }}
            label="Descrição"
          />
          <Tab
            sx={{
              color: "black",
              "&.Mui-selected": {
                fontWeight: "bold",
                color: "black",
                borderColor: "black",
              },
            }}
            label="Informação Adicional"
          />
          <Tab
            sx={{
              color: "black",
              "&.Mui-selected": {
                fontWeight: "bold",
                color: "black",
                borderColor: "black",
              },
            }}
            label="Avaliações"
          />
        </Tabs>
        <CustomTabPanel value={tab} index={0}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque
            nulla, cumque iure illo nihil inventore! Animi et repellendus
            deserunt, dolores consequuntur velit distinctio iure ratione
            dignissimos, cum atque blanditiis nobis ad ut. Molestias
            exercitationem praesentium eaque ipsum debitis enim libero. Lorem
            ipsum dolor, sit amet consectetur adipisicing elit. Repellat
            suscipit deserunt nemo obcaecati aliquam dolores ipsam ducimus
            consectetur quae enim.
          </p>
        </CustomTabPanel>
        <CustomTabPanel value={tab} index={1}>
          <div>
            <span className="font-bold">Cores </span>
            <span>Vermelho, Azul, Verde, Amarelo</span>
          </div>
          <div>
            <span className="font-bold">Tamanhos </span>
            <span>P, M, G, GG, XG</span>
          </div>
        </CustomTabPanel>
        <CustomTabPanel value={tab} index={2}>
          <p className="font-bold">Avaliações dos clientes</p>
          <ReviewCard />
          <ReviewCard />
          <ReviewCard />
          <ReviewCard />
          <ReviewCard />
          <ReviewCard />
        </CustomTabPanel>
      </section>
      <section className="mt-8 mb-10">
        <p className="text-2xl my-4">Produtos Relacionados</p>
        <div className="flex flex-wrap gap-8">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </section>
      <section className="mt-14 mb-6">
        <BenefitsCards />
      </section>
    </section>
  );
}

export default Product;
