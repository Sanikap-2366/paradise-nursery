import React, { useState } from "react";
import { Provider, useSelector } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./CartSlice";
import ProductList from "./ProductList";
import CartItem from "./CartItem";
import AboutUs from "./AboutUs";
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

  if (page === "products") {
    return (
      <div className="app">
        <ProductList
          onCartClick={() => setPage("cart")}
          onHomeClick={() => setPage("home")}
          totalItems={totalItems}
        />
      </div>
    );
  }

  if (page === "cart") {
    return (
      <div className="app">
        <CartItem
          onContinueShopping={() => setPage("products")}
          onHomeClick={() => setPage("home")}
        />
      </div>
    );
  }

  return (
    <div className="app">
      <section className="hero">
        <h1>Welcome To Paradise Nursery</h1>

        <p>Where Green Meets Serenity</p>

        <button onClick={() => setPage("products")}>
          Get Started
        </button>

        <AboutUs />
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
