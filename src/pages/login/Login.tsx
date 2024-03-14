import { yupResolver } from "@hookform/resolvers/yup";
import { Button, TextField, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import backgroundImage from "../../../public/login.jpg";

interface FormInputs {
  email: string;
  password: string;
}

const schema = yup.object().shape({
  email: yup.string().required("Email é obrigatório"),
  password: yup.string().required("Senha é obrigatória"),
});

export const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputs>({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: FormInputs) => {
    console.log(data);
  };

  return (
    <main className="h-screen flex mx-auto justify-center">
      <div
        className="hidden md:block  h-full bg-cover bg-center sm:max-w-xl w-full"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />

      {/* <section className="w-1/2 flex items-center justify-center p-10 max-w-xl"> */}
      <section className="w-full md:w-1/2 flex items-center justify-center p-10 max-w-xl">

        <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-md">

          <h1 className="font-extrabold text-3xl ">Bem vindo</h1>
          <p className="text-base mb-8">Por favor, insira suas credenciais</p>

          <div className="mb-4">
            <label htmlFor="email" className="block">
              Endereço de e-mail
            </label>
            <input
            {...register("email")}
              type="email"
              name="email"
              placeholder="exemplo@email.com"
              className="w-full px-3 py-2 border rounded-md"
            />
            {errors.email && <p className="text-red-500">{errors.email.message}</p>}
          </div>

          <div className="mb-4">
            <label htmlFor="password" className="block">
              Senha
            </label>
            <input
            {...register("password")}
              type="password"
              name="password"
              placeholder="Digite sua senha"
              className="w-full px-3 py-2 border rounded-md"
            />
            {errors.password && <p className="text-red-500">{errors.password.message}</p>}
          </div>

          {/* <TextField
            {...register("email")}
            error={!!errors.email}
            helperText={errors.email?.message}
            label="Email"
            InputLabelProps={{ shrink: true }}
            variant="outlined"
            fullWidth
            sx={{ marginBottom: "1rem" }}
          /> */}

          {/* <TextField
            {...register("password")}
            error={!!errors.password}
            helperText={errors.password?.message}
            label="Senha"
            type="password"
            variant="outlined"
            fullWidth
            className="mb-4"
          /> */}
          {/* <Typography variant="h6" className="mb-8 text-right">
            Esqueceu a senha?
          </Typography> */}
          <p className="mb-8 text-right cursor-pointer">Esqueceu a senha?</p>

          <Button
            type="submit"
            variant="contained"
            fullWidth
            sx={{
              background: "#121212",
              "&:hover": { backgroundColor: "#0e0e0e" },
              mt: 2,
            }}
          >
            Login
          </Button>
        </form>
      </section>
    </main>
  );
};
