import React, { useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import { MdOutlineKeyboardBackspace } from "react-icons/md";
// import { fa-arrow-left } from "react-icons/fa";
import { motion } from "framer-motion";
import "./Navbar.css";
import { useCartContext } from "./Cart_Context";
// import CartAmountToggle from "./CartAmountToggle";

export default function NavBar() {
  const { cart, ClearCart, decrement, increment, remove, total_item, total_amount, shipping_fee} = useCartContext();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <nav className="navbar navbar-expand-lg nav-start">
        <div className="container-fluid title">
          <div className="icon">
            <img src="images/aahar_logo-removebg-preview.png" />{" "}
          </div>
          <a className="navbar-brand heading" href="#">
            AAHAR
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse ml-auto"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav ml-auto mb-2 mb-lg-0 align-text options">
              <li className="nav-item bo">
                <a className="nav-link active" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item bo">
                <a className="nav-link" href="/About">
                  About
                </a>
              </li>
              <li className="nav-item bo">
                <a className="nav-link" href="/MenuPage">
                  Menu
                </a>
              </li>
              <li className="nav-item bo">
                <a className="nav-link" href="/Login">
                  Login
                </a>
              </li>
              <li className="nav-item bo">
                <a className="nav-link" href="/Register">
                  Sign Up
                </a>
              </li>
              <li className="nav-item bo">
                <button className="cartBtn" onClick={handleShow}>
                  <i className="fa-sharp fa-solid fa-cart-shopping cart-trolley"></i>
                  <span className="cart-total-item"><p>{total_item}</p></span>
                </button>
                <Offcanvas
                  placement="end"
                  scroll="true"
                  show={show}
                  onHide={handleClose}
                >
                  <Offcanvas.Header>
                    <motion.div whileTap={{ scale: 0.75 }}>
                      <MdOutlineKeyboardBackspace
                        style={{ fontSize: "30px" }}
                        className="text-textColor"
                        onClick={handleClose}
                      />
                    </motion.div>
                    <Offcanvas.Title>Cart</Offcanvas.Title>
                    <motion.div whileTap={{ scale: 0.75 }}>
                      <button className="clear-btn" onClick={ClearCart}>
                        Clear
                      </button>
                    </motion.div>
                  </Offcanvas.Header>
                  {cart && cart.length > 0 ? (
                    <Offcanvas.Body className="canvas-body">
                      <div className="cart-items">
                        <div className="cart-upper">
                          {cart.map((curElem) => {
                            const { id, name, image, rate, quantity } = curElem;
                            return (
                              <div className="cart-list" key={id}>
                                <div className="list-img">
                                  <img src={image} alt={id} srcSet="" />
                                </div>
                                <div className="list-name">
                                  <p>{name}</p>
                                  <p>₹{rate}</p>
                                  {/* <p>{num}</p> */}
                                </div>
                                <div className="list-counter">
                                  <div className="toggle">
                                    <button className="dec count" onClick={() => decrement(id)}>
                                      -
                                    </button>
                                    <p className="count">{quantity}</p>
                                    <button className="inc count" onClick={() => increment(id)}>
                                      +
                                    </button>
                                  </div>
                                  <div className="remove">
                                    <button onClick={() => remove(id)}>Remove</button>
                                  </div>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                      <div className="cart-lower">
                        <div className="amount">
                          <div className="rupee tax">
                            <p className="text">Sub Total</p>
                            <p className="num">₹{total_amount}</p>
                          </div>
                          <div className="deliver tax">
                            <p className="text">Delivery</p>
                            <p className="num">₹{shipping_fee}</p>
                          </div>
                        </div>
                        <hr />
                        <div className="tot-amount tax">
                          <p className="text">Total</p>
                          <p className="num">₹{shipping_fee + total_amount}</p>
                        </div>
                        <div className="payment-btn">
                          <motion.div whileTap={{ scale: 0.8 }}>
                            <button>Proceed to payment</button>
                          </motion.div>
                        </div>
                      </div>
                    </Offcanvas.Body>
                  ) : (
                    <div className="empty-cart">
                      <div className="empty-cart-image">
                        <img
                          src="https://restaurantapp-c2ed6.web.app/static/media/emptyCart.71ad17e692d71caa77c6c9351f84756b.svg"
                          alt=""
                        />
                      </div>
                      <div className="empty-cart-content">
                        <h4>Add some items to your cart</h4>
                      </div>
                    </div>
                  )}
                </Offcanvas>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
