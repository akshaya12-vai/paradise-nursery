// ProductList.jsx

import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../redux/CartSlice";
import { Link } from "react-router-dom";

const plants = [
  {
    id: 1,
    name: "Snake Plant",
    price: 20,
    category: "Indoor Plants",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 2,
    name: "Peace Lily",
    price: 25,
    category: "Indoor Plants",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 3,
    name: "Aloe Vera",
    price: 15,
    category: "Succulents",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 4,
    name: "Cactus",
    price: 18,
    category: "Succulents",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 5,
    name: "Spider Plant",
    price: 22,
    category: "Air Purifying Plants",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 6,
    name: "Areca Palm",
    price: 30,
    category: "Air Purifying Plants",
    image: "https://via.placeholder.com/150",
  },
];

function ProductList() {
  const dispatch = useDispatch();

  const cartItems = useSelector((state) => state.cart.items);

  const [addedItems, setAddedItems] = useState({});

  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));

    setAddedItems({
      ...addedItems,
      [plant.id]: true,
    });
  };

  const totalCartItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const categories = [...new Set(plants.map((plant) => plant.category))];

  return (
    <div>
      {/* Navbar */}
      <nav
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "20px",
          backgroundColor: "green",
          color: "white",
        }}
      >
        <div>
          <Link to="/" style={{ color: "white", marginRight: "20px" }}>
            Home
          </Link>

          <Link
            to="/products"
            style={{ color: "white", marginRight: "20px" }}
          >
            Plants
          </Link>

          <Link to="/cart" style={{ color: "white" }}>
            Cart
          </Link>
        </div>

        <div>🛒 {totalCartItems}</div>
      </nav>

      <h1>Paradise Nursery Plants</h1>

      {categories.map((category) => (
        <div key={category}>
          <h2>{category}</h2>

          <div
            style={{
              display: "flex",
              gap: "20px",
              flexWrap: "wrap",
            }}
          >
            {plants
              .filter((plant) => plant.category === category)
              .map((plant) => (
                <div
                  key={plant.id}
                  style={{
                    border: "1px solid gray",
                    padding: "15px",
                    width: "200px",
                  }}
                >
                  <img
                    src={plant.image}
                    alt={plant.name}
                    width="150"
                    height="150"
                  />

                  <h3>{plant.name}</h3>

                  <p>Price: ${plant.price}</p>

                  <button
                    onClick={() => handleAddToCart(plant)}
                    disabled={addedItems[plant.id]}
                  >
                    {addedItems[plant.id] ? "Added" : "Add to Cart"}
                  </button>
                </div>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductList;