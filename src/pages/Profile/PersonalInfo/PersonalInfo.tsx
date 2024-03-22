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
  return <InfoForm fakeUser={fakeUser} />;
};
export default PersonalInfo;
