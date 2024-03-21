import NotificationsCard from "../../../components/Profile/NotificationsCard/NotificationsCard";
import ProfileNavbar from "../../../components/ProfileNavbar/ProfileNavbar";

const notifications = [
  {
    title: "Pedido enviado",
    message: "Seu pedido foi enviado para o endereço de entrega",
    date: "2023-08-01T12:00:00Z",
  },
  {
    title: "Pedido entregue",
    message: "Seu pedido foi entregue com sucesso",
    date: "2023-08-02T12:00:00Z",
  },
  {
    title: "Pedido cancelado",
    message: "Seu pedido foi cancelado",
    date: "2023-08-03T12:00:00Z",
  },
];

const Notifications = () => {
  return (
    <main className="md:px-36 md:py-12 p-6">
      <h2 className="text-primary text-4xl">Meu Perfil</h2>
      <section className="sm:flex gap-8 my-8">
        <ProfileNavbar />
        <section className="flex-auto my-4 md:my-0">
          {notifications.map((notification, index) => (
            <NotificationsCard
              key={index}
              title={notification.title}
              message={notification.message}
              date={notification.date}
            />
          ))}
        </section>
      </section>
    </main>
  );
};

export default Notifications;
