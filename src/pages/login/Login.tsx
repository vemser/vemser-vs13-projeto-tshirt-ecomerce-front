import { yupResolver } from "@hookform/resolvers/yup";
import { Alert, Button, Snackbar } from "@mui/material";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import womanImage from "../../../src/assets/foto-mulher-jovem.svg";
import { NavLink } from "react-router-dom";
import { LuChevronLeft } from "react-icons/lu";
import { useEffect, useState } from "react";

interface FormInputs {
  email: string;
  password: string;
}

const schema = yup.object().shape({
  email: yup.string().required("Email é obrigatório"),
  password: yup.string().required("Senha é obrigatória"),
});

export const Login = () => {
  const [open, setOpen] = useState(false);

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

  useEffect(() => {
    const registerSuccess = localStorage.getItem("registerSuccess");

    if (registerSuccess !== null) {
      setOpen(true);
      localStorage.removeItem("registerSuccess");
    }
  }, []);

  const handleClose = (
    event: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  return (
    <main className="flex md:flex-row flex-col">
      <figure className="md:w-2/4 w-full md:h-screen h-5/6 bg-tertiary flex justify-center items-end">
        <img
          className="w-4/6 h-4/6"
          src={womanImage}
          alt={"Imagem mulher ruiva jovem"}
        />
      </figure>

      <section className="w-full md:w-2/4 flex flex-col h-screen p-4 justify-center items-center">
        <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-md">
          <div className="flex flex-col gap-1">
            <NavLink to="/" className="self-start mb-4 flex items-center">
              <LuChevronLeft className="mr-1" />
              <span className="cursor-pointer text-base">Voltar</span>
            </NavLink>
            <h1 className="text-3xl font-bold">Bem vindo</h1>
            <p className="text-base text-gray-400 mb-7">
              Por favor, insira suas credenciais
            </p>
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block">
              Endereço de e-mail
            </label>
            <input
              {...register("email")}
              type="email"
              name="email"
              placeholder="exemplo@email.com"
              className="w-full px-3 py-2 border-black border rounded-md"
            />
            {errors.email && (
              <p className="text-red-500">{errors.email.message}</p>
            )}
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
              className="w-full px-3 py-2 border-black border rounded-md"
            />
            {errors.password && (
              <p className="text-red-500">{errors.password.message}</p>
            )}
          </div>

          <NavLink
            to="/recover-password"
            className="mb-8 text-right cursor-pointer"
          >
            <p className="mb-8 text-right cursor-pointer">Esqueceu a senha?</p>
          </NavLink>

          <Button
            type="submit"
            variant="contained"
            fullWidth
            sx={{
              background: "#121212",
              "&:hover": { backgroundColor: "#0e0e0e" },
              borderRadius: "10px",
            }}
          >
            Login
          </Button>
        </form>
        <div className="flex justify-end mt-7 items-center ">
          <p className="text-base text-gray-400">Não tem uma conta?</p>
          <NavLink to="/register" className="self-start flex items-center ml-1">
            Cadastre-se agora
          </NavLink>
        </div>
      </section>
      <Snackbar open={open} autoHideDuration={5000} onClose={handleClose}>
        <Alert
          onClose={handleClose}
          severity="success"
          variant="filled"
          sx={{ width: "100%" }}
        >
          Cadastro realizado com sucesso!
        </Alert>
      </Snackbar>
    </main>
  );
};
