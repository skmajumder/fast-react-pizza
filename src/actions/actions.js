import { redirect } from 'react-router-dom';
import { createOrder } from '../services/apiRestaurant';
import { isValidPhone } from '../utilities/helpers';
import store from '../store';
import { clearCart } from '../features/cart/cartSlice';

export async function createOrderAction({ request }) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  const order = {
    ...data,
    cart: JSON.parse(data.cart),
    priority: data.priority === 'true',
  };

  console.log(order);

  const errors = {};
  if (!isValidPhone(order.phone))
    errors.phone =
      'Please enter a valid phone number. We need it to contact with you';
  if (Object.keys(errors).length > 0) return errors;

  // const newOrder = await createOrder(order);
  // store.dispatch(clearCart());

  // return redirect(`/order/${newOrder.id}`);

  return null;
}
