import React from "react";

const products = [
  {
    id: 1,
    name: "Aloe Vera",
    price: 15,
    category: "Medicinal",
    image:
      "https://images.unsplash.com/photo-1509423350716-97f9360b4e09"
  },
  {
    id: 2,
    name: "Snake Plant",
    price: 20,
    category: "Indoor",
    image:
      "https://images.unsplash.com/photo-1593482892290-f54927ae2fa1"
  },
  {
    id: 3,
    name: "Peace Lily",
    price: 18,
    category: "Flowering",
    image:
      "https://images.unsplash.com/photo-1593691509543-c55fb32e5cee"
  },
  {
    id: 4,
    name: "Money Plant",
    price: 12,
    category: "Indoor",
    image:
      "https://images.unsplash.com/photo-1614594975525-e45190c55d0b"
  },
  {
    id: 5,
    name: "Cactus",
    price: 10,
    category: "Succulent",
    image:
      "https://images.unsplash.com/photo-1459411621453-7b03977f4bfc"
  },
  {
    id: 6,
    name: "Monstera",
    price: 25,
    category: "Indoor",
    image:
      "https://images.unsplash.com/photo-1614594975525-e45190c55d0b"
  }
];

function ProductList() {
  return (
    <div>
      <h1>Paradise Nursery Plants</h1>

      {products.map((product) => (
        <div key={product.id}>
          <img
            src={product.image}
            alt={product.name}
            width="180"
            height="180"
          />

          <h2>{product.name}</h2>
          <p>Category: {product.category}</p>
          <p>Price: ${product.price}</p>

          <button>Add to Cart</button>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
