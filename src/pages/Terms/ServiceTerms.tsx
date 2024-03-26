import TermsLayout from "../../layout/TermsLayout";

function ServiceTerms() {
  return (
    <TermsLayout title="Termos de Serviço - IShirts">
        <p className="text-gray-700">
          <strong className="block mb-4">Bem-vindo aos Termos de Serviço da IShirts!</strong>
          Obrigado por escolher nossa plataforma para suas necessidades de moda casual. Antes de prosseguir com sua compra, pedimos que revise cuidadosamente os seguintes termos que regem o uso de nosso site e os serviços que oferecemos. Ao acessar ou usar os serviços da IShirts, você concorda em cumprir e estar vinculado a estes termos. Se você não concordar com algum destes termos, não utilize nossos serviços.
        </p>
        <ol className="list-decimal list-inside mt-4">
          <li className="mb-4">
            <strong className="font-bold">Uso do Site</strong>
            <ol className="list-decimal list-inside pl-4">
              <li>Ao acessar e utilizar o site da IShirts, você declara ser maior de idade em sua jurisdição de residência ou ter permissão de um responsável legal para usar nossos serviços.</li>
              <li>Você concorda em fornecer informações precisas, atualizadas e completas durante o processo de compra ou registro.</li>
              <li>Ao utilizar nosso site, você concorda em não violar quaisquer leis aplicáveis ou regulamentos.</li>
            </ol>
          </li>
        </ol>
    </TermsLayout>
  );
}

export default ServiceTerms;
