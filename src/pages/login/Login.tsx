import { yupResolver } from "@hookform/resolvers/yup";
import { Button } from "@mui/material";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import womanImage from "../../../src/assets/foto-mulher-jovem.svg";

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

          <p className="mb-8 text-right cursor-pointer">Esqueceu a senha?</p>

          <Button
            type="submit"
            variant="contained"
            fullWidth
            sx={{
              background: "#121212",
              "&:hover": { backgroundColor: "#0e0e0e" },
            }}
          >
            Login
          </Button>
        </form>
      </section>
    </main>
  );
};
