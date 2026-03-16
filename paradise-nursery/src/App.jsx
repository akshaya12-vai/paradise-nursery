import { Link } from "react-router-dom";

function App() {
  return (
    <div className="landing">
      <h1>Paradise Nursery</h1>
      <p>Welcome to Paradise Nursery Shopping Application</p>
      <Link to="/plants">
        <button>Get Started</button>
      </Link>
    </div>
  );
}

export default App;