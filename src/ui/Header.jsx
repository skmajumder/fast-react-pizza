import { Link } from 'react-router-dom';
import SearchOrder from '../features/order/SearchOrder.jsx';
import User from '../features/user/User.jsx';

const Header = () => {
  return (
    <header className="border-b border-stone-200 bg-yellow-500 px-4 py-3 uppercase">
      <Link to={'/'} className="tracking-widest">
        Fast React Pizza
      </Link>
      <SearchOrder />
      <User />
    </header>
  );
};

export default Header;
