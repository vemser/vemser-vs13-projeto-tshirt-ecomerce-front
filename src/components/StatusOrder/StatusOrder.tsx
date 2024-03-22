export default function StatusOrder({ status }: { status: string }) {
  return (
    <div className="flex justify-center items-center">
      <div
        className={`w-32 h-8 rounded-lg flex justify-center items-center ${
          status === 'Entregue'
            ? 'bg-green-300'
            : status === 'Cancelado'
            ? 'bg-red-300'
            : 'bg-yellow-300'
        }`}
      >
        <p
          className={`${
            status === 'Entregue'
              ? 'text-green-800'
              : status === 'Cancelado'
              ? 'text-red-800'
              : 'text-yellow-800'
          }`}
        >
          {status}
        </p>
      </div>
    </div>
  );
}
