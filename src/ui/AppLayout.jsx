import { Outlet } from "react-router-dom";
import CartOverview from "../features/cart/CartOverview";
import Header from "./Header";
import Main from "./Main";

const AppLayout = () => {
  return (
    <div>
      <Header />
      <Main>
        <Outlet />
      </Main>
      <CartOverview />
    </div>
  );
};

export default AppLayout;
