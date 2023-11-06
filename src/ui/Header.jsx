import { Link } from 'react-router-dom';
import SearchOrder from '../features/order/SearchOrder.jsx';
import User from '../features/user/User.jsx';

const Header = () => {
  return (
    <header className="flex items-center justify-between border-b border-stone-200 bg-yellow-400 px-4 py-3 uppercase sm:px-6">
      <Link to={'/'} className="tracking-widest">
        Fast React Pizza
      </Link>
      <SearchOrder />
      <User />
    </header>
  );
};

export default Header;
