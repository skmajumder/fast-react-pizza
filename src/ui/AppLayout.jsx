import {Outlet, useNavigation} from "react-router-dom";
import CartOverview from "../features/cart/CartOverview";
import Header from "./Header";
import Main from "./Main";
import Loader from "./Loader.jsx";

const AppLayout = () => {
    const navigation = useNavigation();
    const isLoading = navigation.state === "loading"

    return (
        <div className={'layout'}>
            {isLoading && <Loader/>}
            <Header/>
            <Main>
                <Outlet/>
            </Main>
            <CartOverview/>
        </div>
    );
};

export default AppLayout;
