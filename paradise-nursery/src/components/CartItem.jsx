// CartItem.jsx

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  removeItem,
  updateQuantity,
} from "../redux/CartSlice";
import { Link } from "react-router-dom";

function CartItem() {
  const dispatch = useDispatch();

  const cartItems = useSelector((state) => state.cart.items);

  const increaseQuantity = (item) => {
    dispatch(
      updateQuantity({
        id: item.id,
        quantity: item.quantity + 1,
      })
    );
  };

  const decreaseQuantity = (item) => {
    if (item.quantity > 1) {
      dispatch(
        updateQuantity({
          id: item.id,
          quantity: item.quantity - 1,
        })
      );
    }
  };

  const deleteItem = (id) => {
    dispatch(removeItem(id));
  };

  const totalAmount = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

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

        <div>
          🛒{" "}
          {cartItems.reduce(
            (total, item) => total + item.quantity,
            0
          )}
        </div>
      </nav>

      <h1>Shopping Cart</h1>

      <h2>Total Cart Amount: ${totalAmount}</h2>

      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        cartItems.map((item) => (
          <div
            key={item.id}
            style={{
              border: "1px solid gray",
              margin: "20px",
              padding: "20px",
            }}
          >
            <img
              src={item.image}
              alt={item.name}
              width="120"
              height="120"
            />

            <h3>{item.name}</h3>

            <p>Unit Price: ${item.price}</p>

            <p>
              Total Price: $
              {item.price * item.quantity}
            </p>

            <p>Quantity: {item.quantity}</p>

            <button onClick={() => increaseQuantity(item)}>
              +
            </button>

            <button onClick={() => decreaseQuantity(item)}>
              -
            </button>

            <button onClick={() => deleteItem(item.id)}>
              Delete
            </button>
          </div>
        ))
      )}

      <button
        onClick={() => alert("Coming Soon")}
        style={{ marginRight: "20px" }}
      >
        Checkout
      </button>

      <Link to="/products">
        <button>Continue Shopping</button>
      </Link>
    </div>
  );
}

export default CartItem;