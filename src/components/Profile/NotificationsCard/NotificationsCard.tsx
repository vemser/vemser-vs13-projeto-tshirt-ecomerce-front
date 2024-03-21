interface NotificationsCardProps {
  title: string;
  message: string;
  date: string;
}

const NotificationsCard = ({
  title,
  message,
  date,
}: NotificationsCardProps) => {
  return (
    <div className="border-b-2 p-4  flex flex-col justify-between">
      <div className="flex gap-4 items-center">
        <img
          src="https://via.placeholder.com/150"
          alt="Imagem do Status da notificação"
          className="w-16 h-16 rounded-full"
        />
        <div className="flex justify-between w-full">
          <div className="flex flex-col gap-1 ">
            <h3 className="text-primary text-lg md:text-xl font-bold">
              {title}
            </h3>
            <p className="text-gray-500 text-xs md:text-base ">{message}</p>
          </div>
          <div className="self-end">
            <p className="text-gray-400 text-xs md:text-base">
              {new Date(date).toLocaleDateString()}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotificationsCard;
