import { useState, useEffect } from 'react';
import { Accordion, AccordionDetails, AccordionSummary, Typography } from "@mui/material";
import { LuArrowLeft, LuArrowRight, LuChevronDown } from "react-icons/lu";
import CategoryMenu from '../../components/CategoryMenu/CategoryMenu';
import { faqData } from './FaqData';
import SearchInput from '../../components/SearchInput/SearchInput';
import { Pagination, PaginationItem } from '@mui/material';

function Faq() {
  const [category, setCategory] = useState('Todos');
  const [searchTerm, setSearchTerm] = useState('');
  const [answersVisible, setAnswersVisible] = useState<boolean[]>([]);
  const [page, setPage] = useState(1);
  const itemsPerPage = 5;

  useEffect(() => {
    setPage(1); 
    setAnswersVisible([]); 
  }, [category, searchTerm]);

  const toggleAnswer = (index: number) => {
    setAnswersVisible(prevState => {
      const newState = [...prevState];
      newState[index] = !newState[index];
      return newState;
    });
  };

  const handlePageChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
    setAnswersVisible([]); 
  };

  const categories = ['Todos', ...new Set(faqData.map(item => item.category))];

  const filteredFaqByCategory = category === 'Todos' ? faqData : faqData.filter(item => item.category === category);

  const filteredFaq = filteredFaqByCategory
    .filter(item => item.question.toLowerCase().includes(searchTerm.toLowerCase()))
    .slice((page - 1) * itemsPerPage, page * itemsPerPage);

  const pageCount = Math.ceil(filteredFaqByCategory.length / itemsPerPage);

  return (
    <div className="max-w-4xl mx-auto px-4">
      <div className="flex flex-col lg:flex-row gap-5">
        <div>
          <CategoryMenu setCategory={setCategory} categories={categories} />
          <SearchInput value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
        </div>  
        <div className="w-full">
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
          <div className="mt-10 w-full flex justify-center">
            <Pagination
              count={pageCount}
              page={page}
              onChange={handlePageChange}
              variant="outlined"
              shape="rounded"
              siblingCount={0}
              boundaryCount={1}
              renderItem={(item) => (
                <PaginationItem
                  sx={{
                    backgroundColor: "white",
                    borderColor: "black",
                    "&:hover": {
                      backgroundColor: "black",
                      color: "white",
                    },
                    "&.Mui-selected": {
                      backgroundColor: "black",
                      color: "white",
                    },
                    "&.Mui-selected:hover": {
                      color: "black",
                      backgroundColor: "white",
                    },
                  }}
                  slots={{ previous: LuArrowLeft, next: LuArrowRight }}
                  {...item} 
                />
              )}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Faq;
