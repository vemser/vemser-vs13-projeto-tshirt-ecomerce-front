import Orders from '../Orders/Orders';

export type Product = {
  id: number;
  name: string;
  price: number;
  quantity: number;
};

export type Order = {
  id: number;
  date: string;
  total: number;
  status: string;
  products: Product[];
};

export default function ClientOrders() {
  const ordersClient: Order[] = [
    {
      id: 1,
      date: '10/10/2021',
      total: 100,
      status: 'Entregue',
      products: [
        {
          id: 1,
          name: 'Produto 1',
          price: 50,
          quantity: 2,
        },
      ],
    },
    {
      id: 2,
      date: '10/10/2021',
      total: 200,
      status: 'Cancelado',
      products: [
        {
          id: 1,
          name: 'Produto 2',
          price: 50,
          quantity: 3,
        },
        {
          id: 2,
          name: 'Produto 1',
          price: 50,
          quantity: 1,
        },
      ],
    },
    {
      id: 3,
      date: '10/10/2021',
      total: 300,
      status: 'Em progresso',
      products: [
        {
          id: 1,
          name: 'Produto 3',
          price: 50,
          quantity: 4,
        },
        {
          id: 2,
          name: 'Produto 2',
          price: 50,
          quantity: 2,
        },
      ],
    },
  ];

  return (
    <>
      {ordersClient.map((order: Order) => (
        <Orders key={order.id} order={order} />
      ))}
    </>
  );
}
