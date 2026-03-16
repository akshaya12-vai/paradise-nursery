import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Navbar() {
  const count = useSelector(
    state => state.cart.items.reduce((a, b) => a + b.quantity, 0)
  );

  return (
    <nav className="nav">
      <h2>Paradise Nursery</h2>
      <div>
        <Link to="/">Home</Link>
        <Link to="/plants">Plants</Link>
        <Link to="/cart">Cart ({count})</Link>
      </div>
    </nav>
  );
}