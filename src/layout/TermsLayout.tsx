import { iTerms } from "../types/Terms";

function TermsLayout({ title, children }: iTerms) {
  return (
    <article className="max-w-3xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">{title}</h1>
      <div className="bg-white p-6 rounded-md shadow-md">
        {children}
        <p className="mt-8 text-sm text-gray-500">Estes Termos de Serviço foram atualizados pela última vez em 26/03/2024. Obrigado por escolher a IShirts!</p>
      </div>
    </article>
  );
}

export default TermsLayout;