import { yupResolver } from '@hookform/resolvers/yup';
import { Button, TextField, Typography } from '@mui/material';
import { useForm } from "react-hook-form";
import * as yup from "yup";
import backgroundImage from '../../../public/login.jpg'; 

interface FormInputs {
  email: string;
  password: string;
}

const schema = yup.object().shape({
  email: yup.string().required("Email é obrigatório"),
  password: yup.string().required("Senha é obrigatória"),
});

export const Login = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<FormInputs>({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: FormInputs) => {
    console.log(data);
    
  };

  return (
    <main className="h-screen flex">
      
      <div className="w-1/2 h-full bg-cover bg-center" style={{ backgroundImage: `url(${backgroundImage})` }} />
      
      
      <section className='w-1/2 flex items-center justify-center p-10'>
        <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-md">
          <Typography variant="h4" className='mb-8 text-center'>
              Bem-vindo 👋
          </Typography>
          <Typography variant="h5" className='mb-8 text-center'>
              Por favor, insira suas credenciais
          </Typography>
          
          <TextField
            {...register("email")}
            error={!!errors.email}
            helperText={errors.email?.message}
            label="Email"
            variant="outlined"
            fullWidth
            className="mb-4"
          />
          
          <TextField
            {...register("password")}
            error={!!errors.password}
            helperText={errors.password?.message}
            label="Senha"
            type="password"
            variant="outlined"
            fullWidth
            className="mb-4"
          />
          <Typography variant="h6" className='mb-8 text-right'>
              Esqueceu a senha?
          </Typography>
          
          <Button
            type="submit"
            variant="contained"
            fullWidth
            sx={{background: "#121212", '&:hover': { backgroundColor: '#0e0e0e' }, mt:2}}
          >
            Login
          </Button>
        </form>
      </section>
    </main>
  );
};
