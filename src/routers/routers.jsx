import { createBrowserRouter } from 'react-router-dom';
import { menuLoader, orderLoader } from '../loaders/loaderFunction';
import { createOrderAction } from '../actions/actions';

import Home from '../ui/Home';
import Error from '../ui/Error';
import Menu from '../features/menu/Menu';
import Cart from '../features/cart/Cart';
import CreateOrder from '../features/order/CreateOrder';
import Order from '../features/order/Order';
import AppLayout from '../ui/AppLayout';

const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/menu',
        element: <Menu />,
        loader: menuLoader,
        errorElement: <Error />,
      },
      {
        path: '/cart',
        element: <Cart />,
      },
      {
        path: '/order/new',
        element: <CreateOrder />,
        action: createOrderAction,
      },
      {
        path: '/order/:orderID',
        element: <Order />,
        loader: orderLoader,
        errorElement: <Error />,
      },
    ],
  },
]);

export default router;
