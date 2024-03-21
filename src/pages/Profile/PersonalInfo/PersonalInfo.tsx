import ProfileNavbar from "../../../components/ProfileNavbar/ProfileNavbar";
import InfoForm from "../../../components/Profile/InfoForm/InfoForm";

const fakeUser = {
  name: "John Doe",
  email: "johndoe@gmail.com",
  phone: "123456789",
  birthdate: "1990-01-01",
  cpf: "123456789",
  password: "123456",
  profilePicture: "https://via.placeholder.com/150",
};

const PersonalInfo = () => {
  return (
    <main className="md:px-36 md:py-12 p-6">
      <h2 className="text-primary text-4xl">Meu Perfil</h2>

      <section className="sm:flex gap-8 my-8">
        <ProfileNavbar />
        <section className="flex-auto my-4 md:my-0">
          <InfoForm fakeUser={fakeUser} />
        </section>
      </section>
    </main>
  );
};
export default PersonalInfo;
