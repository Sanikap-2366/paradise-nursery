import React from "react";

function CartItem({ item, onRemove, onUpdateQuantity }) {
  const total = item.price * item.quantity;

  return (
    <div>
      <h2>{item.name}</h2>

      <p>Price: ${item.price}</p>
      <p>Quantity: {item.quantity}</p>

      <button
        onClick={() =>
          onUpdateQuantity(item.id, item.quantity + 1)
        }
      >
        +
      </button>

      <button
        onClick={() =>
          onUpdateQuantity(
            item.id,
            Math.max(1, item.quantity - 1)
          )
        }
      >
        -
      </button>

      <p>Total: ${total}</p>

      <button onClick={() => onRemove(item.id)}>
        Remove
      </button>
    </div>
  );
}

export default CartItem;
