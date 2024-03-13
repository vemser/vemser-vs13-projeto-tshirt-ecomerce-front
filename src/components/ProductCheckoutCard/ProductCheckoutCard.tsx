import { useState } from "react";

interface ProductCheckoutCardProps {
  title: string;
  size: string;
  price: number;
  img: string;
}

const ProductCheckoutCard = ({
  title,
  size,
  price,
  img,
}: ProductCheckoutCardProps) => {
  const [quantity, setQuantity] = useState(0);

  return (
    <div className="flex items-center justify-around py-5">
      <div className="flex">
        <img src={img} alt={title} className="w-12 h-12 object-cover" />
        <div>
          <h3 className="text-lg font-semibold ps-3">{title}</h3>
          <p className="text-sm ps-3">{size}</p>
        </div>
      </div>
      <p>R$: {price}</p>

      <div
        className="py-2 px-3 inline-block bg-white border border-gray-200 rounded-lg
        "
        data-hs-input-number
      >
        <div className="flex items-center gap-x-1.5">
          <button
            type="button"
            className="size-6 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-md border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none "
            data-hs-input-number-decrement
            onClick={() => setQuantity(quantity - 1)}
          >
            <svg
              className="flex-shrink-0 size-3.5"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M5 12h14" />
            </svg>
          </button>
          <input
            className="p-0 w-6 bg-transparent border-0 text-gray-800 text-center focus:ring-0"
            type="text"
            value={quantity}
            data-hs-input-number-input
            min={0}
            max={99}
          />
          <button
            type="button"
            className="size-6 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-md border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none "
            data-hs-input-number-increment
            onClick={() => setQuantity(quantity + 1)}
          >
            <svg
              className="flex-shrink-0 size-3.5"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M5 12h14" />
              <path d="M12 5v14" />
            </svg>
          </button>
        </div>
      </div>

      <p>{price}</p>
    </div>
  );
};

export default ProductCheckoutCard;
