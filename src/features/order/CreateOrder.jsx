import { Form, useActionData, useNavigation } from 'react-router-dom';

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
          <label htmlFor="priority">Want to yo give your order priority?</label>
        </div>

        <div>
          <input type="hidden" name="cart" value={JSON.stringify(cart)} />
          <button
            disabled={isSubmitting}
            className="inline-block rounded-full bg-yellow-400 px-4 py-3 text-sm font-semibold uppercase tracking-wide text-stone-800 transition-colors delay-150 duration-300 ease-in-out hover:bg-yellow-300 focus:bg-yellow-300 focus:outline-none focus:ring-2 focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed"
          >
            {isSubmitting ? 'Placing Order...' : 'Order now'}
          </button>
        </div>
      </Form>
    </div>
  );
}

export default CreateOrder;