import {
  LuCircleDollarSign,
  LuCreditCard,
  LuHeadphones,
  LuPackage,
} from "react-icons/lu";

function BenefitsCards() {
  return (
    <section className="w-full mb-6 mt-4 flex flex-wrap *:flex-1 gap-4">
      <div className="min-w-44">
        <i className="text-4xl">
          <LuPackage />
        </i>
        <p className="font-bold text-lg mt-2">Entrega Grátis</p>
        <p>Entrega grátis para comprar acima de R$ 150,00</p>
      </div>
      <div className="min-w-44">
        <i className="text-4xl">
          <LuCircleDollarSign />
        </i>
        <p className="font-bold text-lg mt-2">Dinheiro Garantido</p>
        <p>Dentro de 30 dias para o ter o dinheiro de volta</p>
      </div>
      <div className="min-w-44">
        <i className="text-4xl">
          <LuHeadphones />
        </i>
        <p className="font-bold text-lg mt-2">Suporte Online</p>
        <p>24 horas por dia, 7 dias na semana</p>
      </div>
      <div className="min-w-44">
        <i className="text-4xl">
          <LuCreditCard />
        </i>
        <p className="font-bold text-lg mt-2">Pagamento Flexível</p>
        <p>Pague com múltiplos cartões de crédito</p>
      </div>
    </section>
  );
}

export default BenefitsCards;
