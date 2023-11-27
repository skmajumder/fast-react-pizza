import { formatCurrency } from '../../utilities/helpers';

function OrderItem({ item, isLoadingIngredients, ingredients }) {
  const { quantity, name, totalPrice } = item;

  return (
    <li className="space-y-1 py-3">
      <div className="flex items-center justify-between text-sm">
        <p>
          <span>{quantity} &times;</span> {name}
        </p>
        <p className="font-bold">{formatCurrency(totalPrice)}</p>
      </div>
      <p className="text-xs capitalize italic text-stone-500">
        {isLoadingIngredients ? 'Loading...' : ingredients.join(', ')}
      </p>
    </li>
  );
}

export default OrderItem;
