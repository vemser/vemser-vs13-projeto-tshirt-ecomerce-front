import { useForm } from "react-hook-form";
import womanImage from "../../assets/foto-mulher-jovem.svg";
import { yupResolver } from "@hookform/resolvers/yup";
import { LuChevronLeft } from "react-icons/lu";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { schema } from "../../schemas/RegisterSchemas";
import { useRegisterMutation } from "../../services/register";
import * as React from "react";
import Snackbar from "@mui/material/Snackbar";
import { useEffect, useState } from "react";
import { Alert } from "@mui/material";

export function Register(): JSX.Element {
  const [registerUser, { isSuccess, isError }] =
    useRegisterMutation();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IRegister>({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: IRegister) => {
    try {
      await registerUser(data);
    } catch (error) {
      console.error("Erro ao efetuar cadastro:", error);
    }
  };

  useEffect(() => {
    if (isSuccess) {
        navigate("/login");
        localStorage.setItem("registerSuccess", "");
    };
    if (isError) setOpen(true);
  }, [isSuccess, isError]);

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
    <>
      <main className="flex md:flex-row flex-col">
        <figure className="md:w-2/4 w-full md:h-screen h-5/6 bg-tertiary flex justify-center items-end">
          <img
            className="w-4/6 h-4/6"
            src={womanImage}
            alt={"Imagem mulher ruiva jovem"}
          />
        </figure>

        <section className="md:w-2/4 w-full flex flex-col h-screen p-4 justify-center items-center">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col w-full max-w-sm"
          >
            <NavLink to="/" className="self-start mb-4 flex items-center">
              <LuChevronLeft className="mr-1" />
              <span className="cursor-pointer text-base">Voltar</span>
            </NavLink>

            <div className="flex flex-col gap-1">
              <h1 className="text-3xl font-bold">Crie sua conta </h1>
              <h2 className="text-xl text-gray-400">
                Por favor insira suas informações aqui
              </h2>
            </div>

            <div className="my-2 flex flex-col gap-1">
              <label htmlFor="email">Digite seu email:</label>
              <input
                className="border rounded-md border-black p-2 h-14"
                type="email"
                id="email"
                placeholder="E-mail..."
                {...register("email")}
              />
              {errors.email && (
                <span className="text-red-500">{errors.email.message}</span>
              )}
            </div>

            <div className="my-2 flex flex-col gap-1">
              <label htmlFor="password">Digite sua senha:</label>
              <input
                className="border rounded-md border-black p-2 h-14"
                type="password"
                id="password"
                placeholder="Senha..."
                {...register("senha")}
              />
              {errors.senha && (
                <span className="text-red-500">{errors.senha.message}</span>
              )}
            </div>

            <button className="bg-primary h-14 text-secondary rounded-xl my-4">
              Cadastrar
            </button>

            <p className="text-gray-400 text-center flex justify-center gap-1">
              <span>Já tem uma conta?</span>
              <Link className="text-primary" to={"/login"}>
                Faça login aqui
              </Link>
            </p>
          </form>
        </section>
        <Snackbar open={open} autoHideDuration={5000} onClose={handleClose}>
          <Alert
            onClose={handleClose}
            severity="error"
            variant="filled"
            sx={{ width: "100%" }}
          >
            Erro ao realizar cadastro.
          </Alert>
        </Snackbar>
      </main>
    </>
  );
}
