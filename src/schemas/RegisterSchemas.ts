import * as yup from "yup";

export const schema = yup.object().shape({
  email: yup
    .string()
    .required("Email é obrigatório")
    .email("Digite um email válido"),
  senha: yup
    .string()
    .required("Obrigatório")
    .min(8, "A senha deve ter pelo menos 8 caracteres")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/,
      "A senha deve conter pelo menos uma letra maiúscula, uma letra minúscula, um número e um caractere especial"
    ),
});
