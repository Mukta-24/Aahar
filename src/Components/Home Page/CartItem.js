import React from "react";
// import { motion } from "framer-motion";
import "./Navbar.css"

const CartItem = (id, name, image, rate) => {
  return (
    <>
      <div className="cart-upper">
        <div className="cart-list">
          <div className="list-img">
            <img src={image} alt={id} srcSet="" />
          </div>
          <div className="list-name">
            <p>{name}</p>
            <p>{rate}</p>
          </div>
          <div className="list-counter">
            <button className="dec count" >-</button>
            <p className="count">0</p>
            <button className="inc count">+</button>
          </div>
        </div>
      </div>
      {/* <div className="cart-lower">
        <div className="amount">
          <div className="rupee tax">
            <p className="text">Sub Total</p>
            <p className="num">$52</p>
          </div>
          <div className="deliver tax">
            <p className="text">Delivery</p>
            <p className="num">$6</p>
          </div>
        </div>
        <hr />
        <div className="tot-amount tax">
          <p className="text">Total</p>
          <p className="num">$58</p>
        </div>
        <div className="payment-btn">
          <motion.div whileTap={{ scale: 0.8 }}>
            <button>Proceed to payment</button>
          </motion.div>
        </div> */}
      {/* </div> */}
    </>
  );
};

export default CartItem;
