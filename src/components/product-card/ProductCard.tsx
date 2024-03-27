import { LuEye, LuHeart } from "react-icons/lu";
import { useNavigate } from "react-router-dom";

type ProductCard = {
  id: number;
  title: string;
  description: string;
  price: string;
};

interface ProductCardProps {
  product: ProductCard;
}

function ProductCard({ product }: ProductCardProps) {
  const { title, description, price, id } = product;
  const navigate = useNavigate();

  const handleProductClick = () => {
    navigate(`/product/${id}`);
  };

  return (
    <div>
      <div className="group/card relative hover:cursor-pointer">
        <img src="https://placeholder.com/250x300" alt="imagem placeholder" />
        <div className="w-full h-full p-2 flex flex-col justify-between group/overlay absolute top-0 left-0 invisible group-hover/card:visible">
          <div className="flex flex-col gap-2 w-full justify-end items-end">
            <button
              className="bg-white py-2 px-2 rounded-full hover:bg-zinc-100"
              onClick={handleProductClick}
            >
              <div className="w-5 h-5 flex justify-center items-center">
                <LuEye />
              </div>
            </button>
            <button className="bg-white py-2 px-2 rounded-full hover:bg-zinc-100">
              <div className="w-5 h-5 flex justify-center items-center">
                <LuHeart />
              </div>
            </button>
          </div>
          <div className="w-full flex justify-center">
            <button className="bg-white py-2 px-4 rounded hover:bg-zinc-100">
              Adicionar ao carrinho
            </button>
          </div>
        </div>
      </div>
      <div>
        <p className="font-bold">{title}</p>
        <p>{description}</p>
        <span>{price}</span>
      </div>
    </div>
  );
}

export default ProductCard;
