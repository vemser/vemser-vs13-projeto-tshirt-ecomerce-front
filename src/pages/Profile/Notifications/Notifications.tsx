import NotificationsCard from "../../../components/Profile/NotificationsCard/NotificationsCard";

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
    <>
      {notifications.map((notification, index) => (
        <NotificationsCard
          key={index}
          title={notification.title}
          message={notification.message}
          date={notification.date}
        />
      ))}
    </>
  );
};

export default Notifications;
