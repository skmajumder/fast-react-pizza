import {Link} from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder.jsx";

const Header = () => {
    return (
        <header className="bg-yellow-500">
            <Link to={"/"}>Fast React Pizza</Link>
            <SearchOrder/>
            <p>TEST Name</p>
        </header>
    );
};

export default Header;
