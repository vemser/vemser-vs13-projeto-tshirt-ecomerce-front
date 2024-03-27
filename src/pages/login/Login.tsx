import { yupResolver } from "@hookform/resolvers/yup";
import { Alert, Button, Snackbar } from "@mui/material";
import { useForm } from "react-hook-form";
import womanImage from "../../../src/assets/foto-mulher-jovem.svg";
import { NavLink } from "react-router-dom";
import { LuChevronLeft } from "react-icons/lu";
import { loginSchema } from "../../schemas/LoginSchema";
import { ILogin } from "../../types/Login";
import useAuth from "../../feature/hooks/useAuth";
import { SyntheticEvent, useEffect, useState } from "react";

export const Login = () => {
  const { loginUser, loginError } = useAuth();
  const [open, setOpen] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILogin>({
    resolver: yupResolver(loginSchema),
  });

  const onSubmit = (data: ILogin) => {
    loginUser(data.email, data.senha);
  };

  const handleClose = (event: SyntheticEvent | Event, reason?: string) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  useEffect(() => {
    if (loginError) {
      setOpen(true);
    }
  }, [loginError]);

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
            <label htmlFor="senha" className="block">
              Senha
            </label>
            <input
              {...register("senha")}
              type="password"
              name="senha"
              placeholder="Digite sua senha"
              className="w-full px-3 py-2 border-black border rounded-md"
            />
            {errors.senha && (
              <p className="text-red-500">{errors.senha.message}</p>
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
      <div>
        {loginError && (
          <Snackbar open={open} autoHideDuration={1200} onClose={handleClose}>
            <Alert severity="error">
              {JSON.parse(loginError.data).message}
            </Alert>
          </Snackbar>
        )}
      </div>
    </main>
  );
};
