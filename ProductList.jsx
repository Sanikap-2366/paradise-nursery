import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "./CartSlice";

const products = [
  {
    id: 1,
    name: "Aloe Vera",
    price: 15,
    category: "Medicinal",
    image: "https://images.unsplash.com/photo-1509423350716-97f9360b4e09"
  },
  {
    id: 2,
    name: "Snake Plant",
    price: 20,
    category: "Indoor",
    image: "https://images.unsplash.com/photo-1593482892290-f54927ae2fa1"
  },
  {
    id: 3,
    name: "Peace Lily",
    price: 18,
    category: "Flowering",
    image: "https://images.unsplash.com/photo-1593691509543-c55fb32e5cee"
  },
  {
    id: 4,
    name: "Money Plant",
    price: 12,
    category: "Indoor",
    image: "https://images.unsplash.com/photo-1614594975525-e45190c55d0b"
  },
  {
    id: 5,
    name: "Cactus",
    price: 10,
    category: "Succulent",
    image: "https://images.unsplash.com/photo-1459411621453-7b03977f4bfc"
  },
  {
    id: 6,
    name: "Monstera",
    price: 25,
    category: "Indoor",
    image: "https://images.unsplash.com/photo-1614594975525-e45190c55d0b"
  }
];

function ProductList({ onCartClick, totalItems }) {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart?.items || []);

  const handleAddToCart = (product) => {
    dispatch(addItem(product));
  };

  const isInCart = (id) => {
    return cart.some((item) => item.id === id);
  };

  return (
    <div>
      <header>
        <h1>Paradise Nursery</h1>

        <button onClick={onCartClick}>
          🛒 Cart ({totalItems || 0})
        </button>
      </header>

      <h2>Our Plants</h2>

      <div>
        <h3>Indoor Plants</h3>

        {products
          .filter((product) => product.category === "Indoor")
          .map((product) => (
            <div key={product.id}>
              <img
                src={product.image}
                alt={product.name}
                width="180"
                height="180"
              />

              <h3>{product.name}</h3>
              <p>Price: ${product.price}</p>

              <button
                onClick={() => handleAddToCart(product)}
                disabled={isInCart(product.id)}
              >
                {isInCart(product.id) ? "Added to Cart" : "Add to Cart"}
              </button>
            </div>
          ))}
      </div>

      <div>
        <h3>Medicinal Plants</h3>

        {products
          .filter((product) => product.category === "Medicinal")
          .map((product) => (
            <div key={product.id}>
              <img
                src={product.image}
                alt={product.name}
                width="180"
                height="180"
              />

              <h3>{product.name}</h3>
              <p>Price: ${product.price}</p>

              <button
                onClick={() => handleAddToCart(product)}
                disabled={isInCart(product.id)}
              >
                {isInCart(product.id) ? "Added to Cart" : "Add to Cart"}
              </button>
            </div>
          ))}
      </div>

      <div>
        <h3>Flowering Plants</h3>

        {products
          .filter((product) => product.category === "Flowering")
          .map((product) => (
            <div key={product.id}>
              <img
                src={product.image}
                alt={product.name}
                width="180"
                height="180"
              />

              <h3>{product.name}</h3>
              <p>Price: ${product.price}</p>

              <button
                onClick={() => handleAddToCart(product)}
                disabled={isInCart(product.id)}
              >
                {isInCart(product.id) ? "Added to Cart" : "Add to Cart"}
              </button>
            </div>
          ))}
      </div>
    </div>
  );
}

export default ProductList;
