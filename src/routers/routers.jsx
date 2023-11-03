import { createBrowserRouter } from "react-router-dom";

import Home from "../ui/Home";
import NotFound from "../ui/Error";
import Menu from "../features/menu/Menu";
import Cart from "../features/cart/Cart";
import CreateOrder from "../features/order/CreateOrder";
import Order from "../features/order/Order";
import AppLayout from "../ui/AppLayout";
import { menuLoader } from "../loaders/loaderFunction";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
        errorElement: <NotFound />,
      },
      {
        path: "/menu",
        element: <Menu />,
        loader: menuLoader,
        errorElement: <NotFound />,
      },
      {
        path: "/cart",
        element: <Cart />,
        errorElement: <NotFound />,
      },
      {
        path: "/order/new",
        element: <CreateOrder />,
        errorElement: <NotFound />,
      },
      {
        path: "/order/:orderID",
        element: <Order />,
        errorElement: <NotFound />,
      },
    ],
  },
]);

export default router;
