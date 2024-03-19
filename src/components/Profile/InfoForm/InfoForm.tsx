import { LuEye, LuEyeOff, LuPencil } from "react-icons/lu";
import { SubmitHandler, useForm } from "react-hook-form";
import { IProfile } from "../../../types/Profile";
import { yupResolver } from "@hookform/resolvers/yup";
import { profileSchema } from "../../../schemas/ProfileSchema";
import { useState } from "react";

interface InfoFormProps {
  fakeUser: IProfile;
}

const InfoForm = ({ fakeUser }: InfoFormProps) => {
  const [editProfile, setEditProfile] = useState(false);
  const [type, setType] = useState("password");

  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm<IProfile>({ resolver: yupResolver(profileSchema) });

  const onSubmit: SubmitHandler<IProfile> = (data) => {
    console.log(data);
  };

  const handleEditProfile = () => {
    setEditProfile(!editProfile);
  };

  const handleToggle = () => {
    setType(type === "text" ? "password" : "text");
  };

  return (
    <>
      <div className="flex justify-between items-center ">
        <div className="relative">
          <img
            src="https://via.placeholder.com/150"
            alt="Profile Picture"
            className="w-16 h-16 rounded-full"
          />
          <button
            aria-label="Editar Foto"
            className="absolute bg-primary text-white rounded-md p-0.5 bottom-0 right-0 hover:bg-opacity-90"
          >
            <LuPencil fontSize={16} />
          </button>
        </div>

        <button
          className=" bg-primary text-white px-6 py-3 rounded-lg flex gap-2 items-center hover:bg-opacity-90"
          onClick={handleEditProfile}
        >
          <LuPencil /> Editar Perfil
        </button>
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="my-6">
          <label htmlFor="name" className="text-primary">
            Nome
          </label>
          <input
            type="text"
            id="name"
            defaultValue={fakeUser.name}
            disabled={!editProfile}
            {...register("name")}
            className="w-full border border-primary p-3 rounded-lg disabled:opacity-50 invalid:border-red-500  "
          />
          {errors.name && <p className="text-red-500">{errors.name.message}</p>}
        </div>

        <div className="md:flex gap-4 my-6">
          <div className="w-full">
            <label htmlFor="email" className="text-primary">
              E-mail
            </label>
            <input
              type="email"
              id="email"
              defaultValue={fakeUser.email}
              disabled={!editProfile}
              {...register("email")}
              className="w-full border border-primary p-3 rounded-lg disabled:opacity-50 invalid:border-red-500  "
            />
            {errors.email && (
              <p className="text-red-500">{errors.email.message}</p>
            )}
          </div>

          <div className="w-full my-6 md:my-0">
            <label htmlFor="phone" className="text-primary ">
              Telefone
            </label>
            <input
              type="text"
              id="phone"
              defaultValue={fakeUser.phone}
              disabled={!editProfile}
              {...register("phone")}
              className="w-full border border-primary p-3 rounded-lg disabled:opacity-50 invalid:border-red-500 "
            />
            {errors.phone && (
              <p className="text-red-500">{errors.phone.message}</p>
            )}
          </div>
        </div>

        <div className="md:flex gap-4 my-6 ">
          <div className="w-full">
            <label htmlFor="birthdate" className="text-primary ">
              Data de Nascimento
            </label>
            <input
              type="date"
              id="birthdate"
              defaultValue={fakeUser.birthdate}
              disabled={!editProfile}
              {...register("birthdate")}
              className="w-full border border-primary p-3 rounded-lg disabled:opacity-50 invalid:border-red-500 "
            />
            {errors.birthdate && (
              <p className="text-red-500">{errors.birthdate.message}</p>
            )}
          </div>

          <div className="w-full my-6 md:my-0">
            <label htmlFor="cpf" className="text-primary">
              CPF
            </label>
            <input
              type="text"
              id="cpf"
              defaultValue={fakeUser.cpf}
              disabled={!editProfile}
              {...register("cpf")}
              className="w-full border border-primary p-3 rounded-lg disabled:opacity-50 invalid:border-red-500 "
            />
            {errors.cpf && <p className="text-red-500">{errors.cpf.message}</p>}
          </div>
        </div>

        <div className="my-6">
          <label htmlFor="password" className="text-primary">
            Senha
          </label>
          <div className="relative flex flex-col">
            <input
              type={type}
              id="password"
              defaultValue={fakeUser.password}
              disabled={!editProfile}
              {...register("password")}
              className="w-full border  border-primary p-3 rounded-lg disabled:opacity-50 invalid:border-red-500 pl-10" // Adicionamos um padding-left para o ícone não ficar em cima do texto
            />
            {type === "password" ? (
              <LuEye
                className="absolute top-3 right-4 cursor-pointer hover:bg-gray-100 rounded-full p-1"
                fontSize={24}
                aria-label="Mostrar Senha"
                onClick={handleToggle}
              />
            ) : (
              <LuEyeOff
                className="absolute  top-3 right-4 cursor-pointer hover:bg-gray-100 rounded-full p-1"
                fontSize={24}
                aria-label="Esconder Senha"
                onClick={handleToggle}
              />
            )}

            {errors.password && (
              <p className="text-red-500">{errors.password.message}</p>
            )}
          </div>
        </div>
        {editProfile && (
          <button
            type="submit"
            className="bg-primary text-white px-6 py-3 rounded-lg flex gap-2 items-center hover:bg-opacity-90"
          >
            <LuPencil /> Salvar
          </button>
        )}
      </form>
    </>
  );
};

export default InfoForm;
