import * as yup from 'yup';

export const schema = yup.object().shape({
    name: yup.string().required("Nome é obrigatório").min(3, "Nome deve ter pelo menos 3 caracteres"),
    email: yup.string().required('Email é obrigatório').email('Digite um email válido'),
    password: yup.string().required('Senha é obrigatória').min(4, 'Sua senha deve ter no mínimo 4 carateres')
})