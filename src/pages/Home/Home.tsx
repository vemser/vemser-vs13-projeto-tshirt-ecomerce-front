import hero from "../../assets/hero.webp";

const Home = () => {
  return (
    <>
      <section id="hero" className="w-full h-screen flex items-center justify-center pt-10 pb-40">
        <div className="w-full max-w-8xl h-full flex items-center justify-around bg-secondary bg-opacity-60 gap-6 px-10 rounded-lg border border-tertiary border-opacity-10">
          <div className="">
            <h1 className="text-6xl font-serif font-bold mb-5">Descubra o seu estilo <br /> na iShirts</h1>
            <p className="text-3xl font-sans mb-10">Descontos de até 40% OFF</p>
            <a href="" className="font-sans bg-primary text-white px-5 py-3 rounded-lg">COMPRAR AGORA</a>
          </div>

          <img src={hero} className="self-end h-4/5" alt="Imagem de uma modelo posando com camiseta preta e chapéu branco" />
        </div>
      </section>

      <section id=""></section>
    </>
  );
};

export default Home;
