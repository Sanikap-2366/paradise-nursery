import React, { useState } from "react";
import { Provider, useSelector } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./CartSlice";
import ProductList from "./ProductList";
import CartItem from "./CartItem";
import "./App.css";

const store = configureStore({
  reducer: {
    cart: cartReducer
  }
});

function NurseryApp() {
  const [page, setPage] = useState("home");

  const cartItems = useSelector((state) => state.cart.items);

  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  if (page === "products") {
    return (
      <div className="app">
        <ProductList
          onCartClick={() => setPage("cart")}
          totalItems={totalItems}
        />

        <button onClick={() => setPage("home")}>
          Back to Home
        </button>
      </div>
    );
  }

  if (page === "cart") {
    return (
      <div className="app">
        <h1>Shopping Cart</h1>

        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <>
            {cartItems.map((item) => (
              <CartItem key={item.id} item={item} />
            ))}

            <h2>Total: ${totalPrice}</h2>

            <button onClick={() => alert("Thank you for your purchase!")}>
              Checkout
            </button>
          </>
        )}

        <br />
        <button onClick={() => setPage("products")}>
          Continue Shopping
        </button>
      </div>
    );
  }

  return (
    <div className="app">
      <section className="hero">
        <h1>Paradise Nursery</h1>

        <p>Bring Nature Home</p>

        <p>
          Discover beautiful plants for your home and garden.
        </p>

        <button onClick={() => setPage("products")}>
          Get Started
        </button>
      </section>
    </div>
  );
}

function App() {
  return (
    <Provider store={store}>
      <NurseryApp />
    </Provider>
  );
}

export default App;
