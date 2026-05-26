import { Link } from "react-router-dom";

function App() {
  return (
    <div className="landing-page">
      <h1>Paradise Nursery</h1>

      <p>Welcome to Paradise Nursery Plant Shop</p>

      <Link to="/products">
        <button>Get Started</button>
      </Link>
    </div>
  );
}

export default App;