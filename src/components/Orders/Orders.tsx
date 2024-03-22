import { Link } from 'react-router-dom';
import { Order } from '../ClientOrders/ClientOrders';
import StatusOrder from '../StatusOrder/StatusOrder';

export default function Orders({ order }: { order: Order }) {
  return (
    <div className="width-1/2 flex justify-between items-center border-b-2 border-gray-200 py-4">
      <div className="width-1/2">
        <div className="flex gap-4 items-center">
          <div>
            <img src="https://placehold.co/79x79" alt="" />
          </div>
          <div>
            <h2 className="text-lg font-semibold ps-3">
              {order.products[0].name}
            </h2>
            <p className="text-sm ps-3">Preço: {order.products[0].price}</p>
            <p className="text-sm ps-3">
              Quantidade: {order.products[0].quantity}
            </p>
          </div>
        </div>
        <div className="mt-4 flex gap-4 items-center">
          <StatusOrder status={order.status} />
        </div>
      </div>
      <div className="text-lg font-semibold">
        R$:{' '}
        {order.products.reduce(
          (acc, product) => acc + product.price * product.quantity,
          0
        )}
      </div>
      <div className="grid gap-4 width-1/5">
        <Link
          to="#"
          className="hidden box-border md:block border-2 border-primary bg-transparent text-primary font-medium px-4 lg:px-9 py-2  rounded-lg transition-colors hover:bg-primary hover:text-white ml-5"
        >
          Ver pedido
        </Link>
        {order.status === 'Entregue' ? (
          <Link
            to="#"
            className="hidden md:block border-2 border-transparent bg-black text-secondary font-medium px-4 lg:px-4 py-2 rounded-lg transition-opacity hover:opacity-80 ml-5"
          >
            Avalie o produto
          </Link>
        ) : order.status === 'Em progresso' ? (
          <Link
            to="#"
            className="hidden md:block border-2 border-transparent bg-red-300 text-red-800 font-medium px-4 lg:px-4 py-2 rounded-lg transition-opacity hover:opacity-80 ml-5"
          >
            Cancelar Pedido
          </Link>
        ) : null}
      </div>
    </div>
  );
}
