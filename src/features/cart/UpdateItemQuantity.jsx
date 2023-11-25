import { useDispatch, useSelector } from 'react-redux';
import Button from '../../ui/Button.jsx';
import {
  decreaseItemQuantity,
  getCurrentItemQuantityById,
  increaseItemQuantity,
} from './cartSlice.js';

const UpdateItemQuantity = ({ pizzaId }) => {
  const dispatch = useDispatch();
  const currntItemQuantity = useSelector(getCurrentItemQuantityById(pizzaId));

  const handleIncreaseItemQuantity = () => {
    dispatch(increaseItemQuantity(pizzaId));
  };

  const handleDecreaseItemQuantity = () => {
    dispatch(decreaseItemQuantity(pizzaId));
  };

  return (
    <div className="flex items-center gap-2">
      <Button onClick={handleDecreaseItemQuantity} type="round">
        -
      </Button>
      <span className="text-sm font-medium">{currntItemQuantity}</span>
      <Button onClick={handleIncreaseItemQuantity} type="round">
        +
      </Button>
    </div>
  );
};

export default UpdateItemQuantity;
