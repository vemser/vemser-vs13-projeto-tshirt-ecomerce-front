import { yupResolver } from "@hookform/resolvers/yup";
import { Button } from "@mui/material";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import womanImage from "../../../src/assets/foto-mulher-jovem.svg";
import { NavLink } from "react-router-dom";
import { ChevronLeft } from "lucide-react";

interface FormInputs {
  email: string;
}

const schema = yup.object().shape({
  email: yup.string().required("Email é obrigatório"),
});

export const ForgotPassword = () => {
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
            <NavLink to="/login" className="self-start mb-4 flex items-center">
              <ChevronLeft className="mr-1" />
              <span className="cursor-pointer text-base">Voltar</span>
            </NavLink>
            <h1 className="font-extrabold text-3xl ">Esqueceu sua Senha?</h1>
            <p className="text-base text-gray-400 mb-7">
              Digite o endereço de email cadastrado.{" "}
              <u>Enviaremos um código para redefinir a sua senha.</u>
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
              className="w-full px-3 py-2 border-black border rounded-md mb-7"
            />
            {errors.email && (
              <p className="text-red-500">{errors.email.message}</p>
            )}
          </div>

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
            Enviar
          </Button>
        </form>
      </section>
    </main>
  );
};
