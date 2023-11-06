import { redirect } from 'react-router-dom';
import { createOrder } from '../services/apiRestaurant';
import { isValidPhone } from '../utilities/helpers';

export async function createOrderAction({ request }) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  const order = {
    ...data,
    cart: JSON.parse(data.cart),
    priority: data.priority === 'on',
  };

  const errors = {};
  if (!isValidPhone(order.phone))
    errors.phone =
      'Please enter a valid phone number. We need it to contact with you';

  if (Object.keys(errors).length > 0) return errors;

  // const newOrder = await createOrder(order);

  // return redirect(`/order/${newOrder.id}`);
  console.log(order);
  return null;
}
