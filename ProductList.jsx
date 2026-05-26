import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/CartSlice";

const plants = [
  { id: 1, name: "Snake Plant", price: 250, category: "Indoor" },
  { id: 2, name: "Peace Lily", price: 300, category: "Indoor" },
  { id: 3, name: "Aloe Vera", price: 150, category: "Medicinal" },
  { id: 4, name: "Tulsi", price: 100, category: "Medicinal" },
  { id: 5, name: "Rose", price: 200, category: "Flowering" },
  { id: 6, name: "Jasmine", price: 180, category: "Flowering" },
];

export default function ProductList() {
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart.items);

  const added = id => cart.some(item => item.id === id);

  return (
    <div className="page">
      <h1>Our Plants</h1>
      <div className="grid">
        {plants.map(p => (
          <div className="card" key={p.id}>
            <h3>{p.name}</h3>
            <p>₹{p.price}</p>
            <button
              disabled={added(p.id)}
              onClick={() => dispatch(addToCart(p))}
            >
              {added(p.id) ? "Added" : "Add to Cart"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}