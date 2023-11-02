import { createBrowserRouter } from "react-router-dom";

import Home from "../ui/Home";
import NotFound from "../ui/Error";
import Menu from "../features/menu/Menu";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <NotFound />,
  },
  {
    path: "/menu",
    element: <Menu />,
    errorElement: <NotFound />,
  },
]);

export default router;
