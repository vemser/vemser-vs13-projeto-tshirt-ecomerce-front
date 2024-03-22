import * as yup from "yup";

export const addressSchema = yup.object().shape({
  logradouro: yup.string().required("Logradouro é obrigatório"),
  numero: yup
    .number()
    .required("Número é obrigatório")
    .transform((value) => (isNaN(value) ? undefined : value)),
  complemento: yup.string().required("Complemento é obrigatório"),
  bairro: yup.string().required("Bairro é obrigatório"),
  referencia: yup.string().required("Referência é obrigatória"),
  cidade: yup.string().required("Cidade é obrigatória"),
  estado: yup.string().required("Estado é obrigatório"),
  cep: yup.string().required("CEP é obrigatório"),
  pais: yup.string().required("País é obrigatório"),
});
