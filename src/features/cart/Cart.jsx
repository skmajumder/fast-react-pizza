import LinkButton from '../../ui/LinkButton';
import Button from '../../ui/Button';
import CartItem from './CartItem';
import { useSelector } from 'react-redux';
import { getCart } from './cartSlice';

function Cart() {
  const username = useSelector((state) => state.user.userName);
  const cart = useSelector(getCart);

  if (cart.length === 0) {
    return (
      <div className="px-4 py-3">
        <LinkButton to="/menu">&larr; Back to menu</LinkButton>
        <p className="mt-7 font-semibold">
          Your cart is still empty. Start adding some pizzas :)
        </p>
      </div>
    );
  }

  return (
    <div className="px-4 py-3">
      <LinkButton to="/menu">&larr; Back to menu</LinkButton>

      <h2 className="mt-7 text-xl font-semibold">Your cart, {username}</h2>

      <ul className="mt-3 divide-y divide-stone-200 border-b">
        {cart.map((item) => (
          <CartItem key={item.name} item={item} />
        ))}
      </ul>

      {cart.length !== 0 && (
        <div className="mt-6 space-x-2">
          <Button type="primary" to="/order/new">
            Order pizzas
          </Button>
          <Button type="secondary">Clear cart</Button>
        </div>
      )}
    </div>
  );
}

export default Cart;
