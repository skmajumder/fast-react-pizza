import { Form, useActionData, useNavigation } from 'react-router-dom';
import Button from '../../ui/Button';

//   P5LHT3, P4YG1Q, C21H70
const fakeCart = [
  {
    pizzaId: 12,
    name: 'Mediterranean',
    quantity: 2,
    unitPrice: 16,
    totalPrice: 32,
  },
  {
    pizzaId: 6,
    name: 'Vegetale',
    quantity: 1,
    unitPrice: 13,
    totalPrice: 13,
  },
  {
    pizzaId: 11,
    name: 'Spinach and Mushroom',
    quantity: 1,
    unitPrice: 15,
    totalPrice: 15,
  },
];

function CreateOrder() {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === 'submitting';
  const formError = useActionData();

  // const [withPriority, setWithPriority] = useState(false);
  const cart = fakeCart;

  return (
    <div>
      <h2>Ready to order? Let&apos;s go!</h2>

      <Form method="POST">
        <div>
          <label htmlFor="customer">First Name</label>
          <input
            type="text"
            name="customer"
            className="input"
            id="customer"
            required
          />
        </div>

        <div>
          <label htmlFor="phone">Phone number</label>
          <div>
            <input
              type="tel"
              name="phone"
              className="input"
              id="phone"
              required
            />
          </div>

          {formError?.phone && <p className="error">{formError.phone}</p>}
        </div>

        <div>
          <label htmlFor="address">Address</label>
          <div>
            <input
              type="text"
              name="address"
              className="input"
              id="address"
              required
            />
          </div>
        </div>

        <div>
          <input
            type="checkbox"
            name="priority"
            id="priority"
            className="checkbox"
            // value={withPriority}
            // onChange={(e) => setWithPriority(e.target.checked)}
          />
          <label htmlFor="priority" className="cursor-pointer">
            Want to yo give your order priority?
          </label>
        </div>

        <div>
          <input type="hidden" name="cart" value={JSON.stringify(cart)} />
          <Button type="primary" disabled={isSubmitting}>
            {isSubmitting ? 'Placing Order...' : 'Order now'}
          </Button>
        </div>
      </Form>
    </div>
  );
}

export default CreateOrder;
