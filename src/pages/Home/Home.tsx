import hero from "../../assets/hero.webp";

const Home = () => {
  return (
    <main className="flex items-center justify-center px-5">
      <section id="hero" className="w-full h-screen flex items-center justify-center pt-10 pb-40 px-60">
        <div className="w-full max-w-8xl h-full flex items-center justify-around bg-secondary gap-6 px-10 rounded-lg border border-tertiary border-opacity-10">
          <div className="">
            <h1 className="text-6xl font-serif font-bold">Descubra o Seu Estilo na iShirts</h1>
            <p className="text-3xl font-sans">Descontos de até 40% OFF</p>
            <a href="" className="font-sans">COMPRAR AGORA</a>
          </div>

          <img src={hero} className="self-end h-4/5" alt="Imagem de uma modelo posando com camiseta preta e chapéu branco" />
        </div>
      </section>

      <section id=""></section>
    </main>
  );
};

export default Home;
