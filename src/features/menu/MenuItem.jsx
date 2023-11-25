import { useDispatch, useSelector } from 'react-redux';
import Button from '../../ui/Button';
import { formatCurrency } from '../../utilities/helpers';
import { addItem, getCurrentItemQuantityById } from '../cart/cartSlice';
import DeleteItem from '../cart/DeleteItem';
import UpdateItemQuantity from '../cart/UpdateItemQuantity';

function MenuItem({ pizza }) {
  const {
    id: pizzaId,
    name,
    unitPrice,
    ingredients,
    soldOut,
    imageUrl,
  } = pizza;

  const dispatch = useDispatch();
  const currentItemQuantity = useSelector(getCurrentItemQuantityById(pizzaId));

  const handleAddToCart = function () {
    const newItem = {
      pizzaId,
      name,
      quantity: 1,
      unitPrice,
      totalPrice: unitPrice * 1,
    };

    dispatch(addItem(newItem));
  };

  return (
    <li className="flex gap-4 py-2">
      <img
        src={imageUrl}
        className={`h-24 ${soldOut ? 'opacity-70 grayscale' : ''}`}
        alt={`${name} Pizza`}
      />
      <div className="flex grow flex-col pt-0.5">
        <p className="font-medium">{name}</p>
        <p className="text-sm capitalize italic text-stone-500">
          {ingredients.join(', ')}
        </p>
        <div className="mt-auto flex items-center justify-between">
          {!soldOut ? (
            <p className="text-sm">{formatCurrency(unitPrice)}</p>
          ) : (
            <p className="text-sm font-semibold uppercase text-stone-500">
              Sold out
            </p>
          )}

          {currentItemQuantity ? (
            <div className="flex items-center gap-3 sm:gap-8">
              <UpdateItemQuantity pizzaId={pizzaId} />
              <DeleteItem pizzaId={pizzaId} />
            </div>
          ) : (
            <Button type="small" disabled={soldOut} onClick={handleAddToCart}>
              {soldOut ? 'Not available' : 'Add to cart'}
            </Button>
          )}
        </div>
      </div>
    </li>
  );
}

export default MenuItem;
