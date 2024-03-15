import hero from "../../assets/hero.webp";
import womanCategory from "../../assets/category-woman.png";
import manCategory from "../../assets/category-man.png";
import casualCategory from "../../assets/category-casual.png";

const Home = () => {
  return (
    <>
      <section id="hero" className="w-full h-[90vh] flex items-center justify-center pt-10 pb-40">
        <div className="w-full max-w-8xl h-full flex items-center justify-around bg-secondary bg-opacity-60 gap-6 px-10 rounded-lg border border-tertiary border-opacity-10">
          <div className="">
            <h1 className="text-6xl font-serif font-bold mb-5">
              Descubra o seu estilo <br /> na iShirts
            </h1>
            <p className="text-3xl font-sans mb-10">Descontos de até 40% OFF</p>
            <a href="" className="font-sans bg-primary text-white px-5 py-3 rounded-lg">COMPRAR AGORA</a>
          </div>

          <img src={hero} className="self-end h-5/6" alt="Imagem de uma modelo posando com camiseta preta e chapéu branco" />
        </div>
      </section>

      <section id="shop-by-categories" className="px-4">
        <div className="flex justify-between items-center gap-2">
          <h2 className="font-bold text-2xl md:text-4xl sm:text-3xl">Comprar por categoria</h2>
          <button className="bg-primary text-sm text-secondary w-36 py-2.5 rounded-lg transition hover:opacity-90 hover:underline">
            Ver todas
          </button>
        </div>
        <div className="flex gap-6 2xl:gap-10 mt-10 justify-center flex-wrap md:justify-between md:flex-nowrap">
          <div
            style={{ backgroundImage: `url(${womanCategory})` }}
            className="bg-no-repeat bg-top  2xl:flex-1 2xl:bg-cover w-96 h-96 flex items-end justify-center rounded-xl"
          >
            <button className="w-11/12 bg-white font-medium py-3 rounded-lg mb-3 transition-colors hover:bg-primary hover:text-white">Feminino</button>
          </div>
          <div
            style={{ backgroundImage: `url(${manCategory})` }}
            className="bg-no-repeat bg-top  2xl:flex-1 2xl:bg-cover w-96 h-96 flex items-end justify-center rounded-xl"
          >
            <button className="w-11/12 bg-white font-medium py-3 rounded-lg mb-3 transition-colors hover:bg-primary hover:text-white">Masculino</button>
          </div>
          <div
            style={{ backgroundImage: `url(${casualCategory})` }}
            className="bg-no-repeat bg-top 2xl:flex-1 2xl:bg-cover w-96 h-96 flex items-end justify-center rounded-xl"
          >
            <button className="w-11/12 bg-white font-medium py-3 rounded-lg mb-3 transition-colors hover:bg-primary hover:text-white">Casual</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
