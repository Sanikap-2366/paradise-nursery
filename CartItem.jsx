import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeItem, updateQuantity } from "./CartSlice";

function CartItem({ onContinueShopping, onHomeClick }) {
  const cart = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const totalPlants = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const totalCost = cart.reduce(
    (total, item) =>
      total + Number(item.price || item.cost || 0) * item.quantity,
    0
  );

  const getPrice = (item) => Number(item.price || item.cost || 0);

  const handleIncrease = (item) => {
    dispatch(
      updateQuantity({
        id: item.id,
        quantity: item.quantity + 1
      })
    );
  };

  const handleDecrease = (item) => {
    if (item.quantity > 1) {
      dispatch(
        updateQuantity({
          id: item.id,
          quantity: item.quantity - 1
        })
      );
    } else {
      dispatch(removeItem(item.id));
    }
  };

  const handleDelete = (item) => {
    dispatch(removeItem(item.id));
  };

  return (
    <div className="cart-container">
      <h1>Shopping Cart</h1>

      <h2>Total Plants in Cart: {totalPlants}</h2>

      <h2>Total Cost: ${totalCost}</h2>

      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cart.map((item) => (
          <div className="cart-item" key={item.id}>
            <img
              src={item.image}
              alt={item.name}
              width="150"
              height="150"
            />

            <h3>{item.name}</h3>

            <p>Unit Price: ${getPrice(item)}</p>

            <div>
              <button onClick={() => handleDecrease(item)}>
                -
              </button>

              <span> {item.quantity} </span>

              <button onClick={() => handleIncrease(item)}>
                +
              </button>
            </div>

            <p>
              Total: ${getPrice(item) * item.quantity}
            </p>

            <button onClick={() => handleDelete(item)}>
              Delete
            </button>
          </div>
        ))
      )}

      <br />

      <button onClick={onContinueShopping}>
        Continue Shopping
      </button>

      <button onClick={() => alert("Coming Soon")}>
        Checkout
      </button>

      <br />

      <button onClick={onHomeClick}>
        Home
      </button>
    </div>
  );
}

export default CartItem;
