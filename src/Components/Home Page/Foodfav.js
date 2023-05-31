import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useCartContext } from "./Cart_Context";


function Foodfav() {
  const {addTocart} = useCartContext();
  // function addTocart(id, name, rate){
  //   console.log(id + " " + name + " " + rate )
  // }

  const [data, setdata] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/db.json")
      .then((response) => response.json())
      .then(setdata);
  }, []);

  if (!data || !data.length) return null;

  // const {productItem} = data;
  return (
    <>
      <section className="special">
        <div className="sunday">
          <div className="logo">
            <h1>Our Best Seller</h1>
          </div>
          <div className="corousel">
            {data.map((items) => {
              const { id, name, image, size, rate } = items;
              return (
                <div className="item" key={id}>
                  <div className="images">
                    <img style={{ width: size }} src={image} alt="" srcSet="" />
                  </div>
                  <div className="addCart">
                    <motion.div whileTap={{ scale: 0.75 }}>
                    <button className="cartBtn" onClick={() =>addTocart(id, name, rate, image)}>
                      <i className="fa-sharp fa-solid fa-cart-shopping fa-lg"></i>
                    </button>
                    </motion.div>
                  </div>
                  <div className="info">
                    <div className="name">
                      <p className="dish-name">{name}</p>
                      <p>₹{rate}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

export default Foodfav;
