import { LuPencil } from "react-icons/lu";
import ProfileNavbar from "../../../components/ProfileNavbar/ProfileNavbar";

const PersonalInfo = () => {
  return (
    <main className="md:px-36 md:py-12 p-6">
      <h2 className="text-primary text-4xl">Meu Perfil</h2>

      <section className="flex gap-8 my-8">
        <ProfileNavbar />
        <section className="flex-auto">
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

            <button className=" bg-primary text-white px-6 py-3 rounded-lg flex gap-2 items-center hover:bg-opacity-90">
              <LuPencil /> Editar Perfil
            </button>
          </div>

          <form>
            <div className="my-6">
              <label htmlFor="name" className="text-primary">
                Nome
              </label>
              <input
                type="text"
                id="name"
                className="w-full border border-primary p-3 rounded-lg"
              />
            </div>

            <div className="md:flex gap-4 my-6">
              <div className="w-full">
                <label htmlFor="email" className="text-primary">
                  E-mail
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full border border-primary p-3 rounded-lg "
                />
              </div>

              <div className="w-full my-6 md:my-0">
                <label htmlFor="phone" className="text-primary ">
                  Telefone
                </label>
                <input
                  type="text"
                  id="phone"
                  className="w-full border border-primary p-3 rounded-lg"
                />
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
                  className="w-full border border-primary p-3 rounded-lg"
                />
              </div>
              <div className="w-full my-6 md:my-0">
                <label htmlFor="cpf" className="text-primary">
                  CPF
                </label>
                <input
                  type="text"
                  id="cpf"
                  className="w-full border border-primary p-3 rounded-lg"
                />
              </div>
            </div>

            <div className="my-6">
              <label htmlFor="password" className="text-primary">
                Senha
              </label>
              <input
                type="password"
                id="password"
                className="w-full border border-primary p-3 rounded-lg"
              />
            </div>
          </form>
        </section>
      </section>
    </main>
  );
};
export default PersonalInfo;
