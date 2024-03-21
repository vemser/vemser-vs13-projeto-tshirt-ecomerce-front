import { MdStar } from "react-icons/md";

function ReviewCard() {
  return (
    <div className="py-4 border-b border-primary border-opacity-15">
      <div className="flex gap-2 items-center mb-2">
        <img
          className="w-10 h-10 rounded-full"
          src="https://placeholder.com/40x40"
          alt="imagem placeholder"
        />
        <div>
          <p>Mark Williams</p>
          <span className="flex">
            <MdStar size={16} />
            <MdStar size={16} />
            <MdStar size={16} />
            <MdStar size={16} />
            <MdStar size={16} />
          </span>
        </div>
      </div>
      <p className="font-bold mb-1">Produto excelente!!!</p>
      <p className="mb-2">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi odio
        nesciunt perspiciatis facilis? Suscipit rerum, odit dolor provident
        nesciunt atque!
      </p>
      <small>Postado em 5 de Abril, 2023</small>
    </div>
  );
}

export default ReviewCard;
