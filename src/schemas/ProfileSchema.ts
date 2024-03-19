import * as yup from "yup";

export const profileSchema = yup.object().shape({
  name: yup.string().required("Nome é obrigatório"),
  email: yup.string().email("Email inválido").required("Email é obrigatório"),
  phone: yup.string().required("Telefone é obrigatório"),
  birthdate: yup.string().required("Data de nascimento é obrigatória"),
  cpf: yup.string().required("CPF é obrigatório"),
  password: yup.string().required("Senha é obrigatória"),
});
