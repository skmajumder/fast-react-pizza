import {Link} from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder.jsx";

const Header = () => {
    return (
        <header>
            <Link to={"/"}>Fast React Pizza</Link>
            <SearchOrder/>
            <p>TEST Name</p>
        </header>
    );
};

export default Header;
