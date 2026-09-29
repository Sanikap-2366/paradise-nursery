import React from "react";
import { useDispatch } from "react-redux";
import { removeItem, updateQuantity } from "./CartSlice";

function CartItem({ item }) {
  const dispatch = useDispatch();

  const increaseQuantity = () => {
    dispatch(
      updateQuantity({
        id: item.id,
        quantity: item.quantity + 1
      })
    );
  };

  const decreaseQuantity = () => {
    if (item.quantity > 1) {
      dispatch(
        updateQuantity({
          id: item.id,
          quantity: item.quantity - 1
        })
      );
    }
  };

  const deleteItem = () => {
    dispatch(removeItem(item.id));
  };

  const itemTotal = item.price * item.quantity;

  return (
    <div>
      <img
        src={item.image}
        alt={item.name}
        width="150"
        height="150"
      />

      <h2>{item.name}</h2>

      <p>Price: ${item.price}</p>

      <div>
        <button onClick={decreaseQuantity}>−</button>

        <span> {item.quantity} </span>

        <button onClick={increaseQuantity}>+</button>
      </div>

      <p>
        Item Total: ${itemTotal}
      </p>

      <button onClick={deleteItem}>
        Delete
      </button>
    </div>
  );
}

export default CartItem;
