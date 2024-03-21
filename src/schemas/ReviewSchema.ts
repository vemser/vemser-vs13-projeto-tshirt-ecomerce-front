import { number, object, string } from "yup";
import { IReviewProduct } from "../types/Review";

export const reviewSchema = object<IReviewProduct>().shape({
  name: string().required("Nome é obrigatório").min(3, "Nome deve ser valido"),
  email: string()
    .required("Email é obrigatório")
    .email("Digite um email válido"),
  review: string().required("Texto de avaliação é obrigatório"),
  rating: number().required("Avaliação é obrigatória").min(0).max(5),
});
