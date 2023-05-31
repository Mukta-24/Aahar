import React from "react";

function CartAmountToggle({ amount, increment, decrement }) {
  return (
    <div className="cart-button">
      <div className="list-counter">
        <button className="dec count" onClick={() => decrement()}>
          -
        </button>
        <p className="count">{amount}</p>
        <button className="inc count" onClick={() => increment()}>
          +
        </button>
      </div>
    </div>
  );
}

export default CartAmountToggle;
