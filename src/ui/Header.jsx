import { Link } from 'react-router-dom';
import SearchOrder from '../features/order/SearchOrder.jsx';
import User from '../features/user/User.jsx';

const Header = () => {
  return (
    <header className="bg-yellow-500 uppercase">
      <Link to={'/'} className="tracking-widest">
        Fast React Pizza
      </Link>
      <SearchOrder />
      <User />
    </header>
  );
};

export default Header;
