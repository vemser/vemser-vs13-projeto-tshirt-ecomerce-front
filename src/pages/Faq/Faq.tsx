import React, { useState } from 'react';
import { Accordion, AccordionDetails, AccordionSummary, Typography } from "@mui/material";
import { LuChevronDown } from "react-icons/lu";
import CategoryMenu from '../../components/CategoryMenu/CategoryMenu';

function Faq() {
  const [category, setCategory] = useState('Todos'); // Estado para controlar a categoria selecionada
  const [answersVisible, setAnswersVisible] = useState([]);

  // Função para alternar a visibilidade da resposta
  const toggleAnswer = (index) => {
    setAnswersVisible(prevState => {
      const newState = [...prevState];
      newState[index] = !newState[index];
      return newState;
    });
  };

  const faqData = [
    {
      category: 'Pagamento',
      question: "Quais são as opções de pagamento disponíveis?",
      answer: "Atualmente aceitamos cartões de crédito, débito e PayPal como formas de pagamento."
    },
    {
      category: 'Entrega',
      question: "Quanto tempo leva para receber meu pedido?",
      answer: "O prazo de entrega varia dependendo da sua localização e do método de envio selecionado. Geralmente, os pedidos são entregues dentro de 5-7 dias úteis."
    },
    {
      category: 'Devolução',
      question: "Posso devolver um item se não estiver satisfeito?",
      answer: "Sim, aceitamos devoluções dentro de 30 dias após a entrega. Por favor, certifique-se de que o item está em condições originais e com etiquetas intactas."
    },
    // Adicione mais perguntas e respostas conforme necessário
  ];

  // Lista de categorias únicas
  const categories = ['Todos', ...new Set(faqData.map(item => item.category))];

  // Função para filtrar as perguntas com base na categoria selecionada
  const filteredFaq = category === 'Todos' ? faqData : faqData.filter(item => item.category === category);

  return (
    <div className="max-w-4xl mx-auto">
      
      <div className="flex gap-5">
        <div className="ml-8">
          <CategoryMenu setCategory={setCategory} categories={categories} />
        </div>
        
        <div>
          <h2 className="text-2xl font-semibold mb-4">Perguntas Frequentes</h2>
          <div className="space-y-4">
            {filteredFaq.map((item, index) => (
              <Accordion key={index} expanded={answersVisible[index]} onChange={() => toggleAnswer(index)}>
                <AccordionSummary expandIcon={<LuChevronDown />}>
                  <Typography>{item.question}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>{item.answer}</Typography>
                </AccordionDetails>
              </Accordion>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Faq;
