import TermsLayout from "../../layout/TermsLayout";

function PrivacyPolicy() {
  return (
    <TermsLayout title="Política de Privacidade - IShirts">
      <p className="text-gray-700">
        <strong className="block mb-4">Bem-vindo à Política de Privacidade da IShirts!</strong>
        Obrigado por escolher nossa plataforma para suas necessidades de moda casual. Esta Política de Privacidade destina-se a informá-lo sobre como coletamos, usamos e protegemos suas informações pessoais. Ao acessar ou usar o site da IShirts, você concorda com a coleta e o uso de informações de acordo com esta política.
      </p>
      <ol className="list-decimal list-inside mt-4">
        <li className="mb-4">
          <strong className="font-bold">Informações que coletamos</strong>
          <ol className="list-decimal list-inside pl-4">
            <li>Coletamos informações pessoais que você nos fornece ao se registrar em nosso site, fazer um pedido ou se inscrever em nossa newsletter.</li>
            <li>As informações pessoais que coletamos podem incluir seu nome, endereço de e-mail, endereço de entrega, número de telefone e informações de pagamento.</li>
            <li>Coletamos automaticamente informações sobre como você interage com nosso site, incluindo seu endereço IP, tipo de navegador, páginas visitadas e duração da visita.</li>
          </ol>
        </li>
        <li className="mb-4">
          <strong className="font-bold">Como usamos suas informações</strong>
          <ol className="list-decimal list-inside pl-4">
            <li>Usamos suas informações pessoais para processar seu pedido, fornecer suporte e comunicações relacionadas ao seu pedido.</li>
            <li>Usamos suas informações para personalizar sua experiência e melhorar nosso site.</li>
            <li>Usamos informações de uso para analisar tendências e entender como nossos clientes interagem com nosso site.</li>
          </ol>
        </li>
        <li className="mb-4">
          <strong className="font-bold">Compartilhamento de informações</strong>
          <p className="mt-2">
            Não vendemos, trocamos ou transferimos suas informações pessoais para terceiros. Isso não inclui terceiros de confiança que nos ajudam a operar nosso site, conduzir nossos negócios ou atender nossos clientes, desde que essas partes concordem em manter essas informações confidenciais.
          </p>
        </li>
      </ol>
    </TermsLayout>
  );
}

export default PrivacyPolicy;