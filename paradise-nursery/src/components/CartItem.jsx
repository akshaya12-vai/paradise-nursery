import { useDispatch, useSelector } from "react-redux";
import { increaseQty, decreaseQty, removeItem } from "../redux/CartSlice";
import { Link } from "react-router-dom";

export default function CartItem() {
  const dispatch = useDispatch();
  const items = useSelector(state => state.cart.items);

  const total = items.reduce(
    (sum, i) => sum + i.price * i.quantity,
    0
  );

  return (
    <div className="page">
      <h1>Your Cart</h1>

      {items.map(i => (
        <div key={i.id} className="cart-row">
          <h3>{i.name}</h3>
          <p>₹{i.price * i.quantity}</p>
          <button onClick={() => dispatch(decreaseQty(i.id))}>-</button>
          <span>{i.quantity}</span>
          <button onClick={() => dispatch(increaseQty(i.id))}>+</button>
          <button onClick={() => dispatch(removeItem(i.id))}>Delete</button>
        </div>
      ))}

      <h2>Total: ₹{total}</h2>

      <button onClick={() => alert("Coming Soon")}>Checkout</button>
      <br /><br />
      <Link to="/plants">Continue Shopping</Link>
    </div>
  );
}