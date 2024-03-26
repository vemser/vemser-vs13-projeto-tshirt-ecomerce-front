import TermsLayout from "../../layout/TermsLayout";

function CookiePolicy() {
  return (
    <TermsLayout title="Política de Cookies - IShirts">
      <p className="text-gray-700">
        <strong className="block mb-4">Bem-vindo à Política de Cookies da IShirts!</strong>
        Obrigado por escolher nossa plataforma para suas necessidades de moda casual. Esta Política de Cookies destina-se a informá-lo sobre o uso de cookies e tecnologias semelhantes em nosso site. Ao acessar ou usar o site da IShirts, você concorda com o uso de cookies de acordo com esta política.
      </p>
      <ol className="list-decimal list-inside mt-4">
        <li className="mb-4">
          <strong className="font-bold">O que são cookies?</strong>
          <p className="mt-2">
            Cookies são pequenos arquivos de texto que são armazenados em seu dispositivo quando você visita um site. Eles são amplamente utilizados para fazer com que os sites funcionem ou funcionem de maneira mais eficiente, bem como para fornecer informações aos proprietários do site.
          </p>
        </li>
        <li className="mb-4">
          <strong className="font-bold">Como usamos cookies?</strong>
          <p className="mt-2">
            Utilizamos cookies para melhorar a experiência do usuário em nosso site, bem como para analisar o tráfego e entender como nossos clientes interagem com nosso site. Isso nos ajuda a melhorar o design e o conteúdo do site para atender às necessidades de nossos clientes.
          </p>
        </li>
        <li className="mb-4">
          <strong className="font-bold">Tipos de cookies que usamos</strong>
          <p className="mt-2">
            Utilizamos cookies de sessão e cookies persistentes em nosso site. Os cookies de sessão são armazenados temporariamente e são excluídos quando você fecha o navegador. Os cookies persistentes são armazenados em seu dispositivo por um período mais longo.
          </p>
        </li>
      </ol>
    </TermsLayout>
  );
}

export default CookiePolicy;