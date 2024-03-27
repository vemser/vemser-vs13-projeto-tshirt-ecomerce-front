import * as yup from "yup";

export const loginSchema = yup.object().shape({
  email: yup.string().required("Email é obrigatório"),
  senha: yup.string().required("Senha é obrigatória"),
});
