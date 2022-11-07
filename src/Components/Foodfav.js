import React, { useState, useEffect } from "react";

function Foodfav() {
  const [data, setdata] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/db.json")
      .then((response) => response.json())
      .then(setdata);
  }, []);

  if (!data || !data.length) return null;
  return (
    <>
      <section className="special">
        <div className="sunday">
          <div className="logo">
            <h1>Our Best Seller</h1>
          </div>
          <div className="corousel">
            {data.map((items) => {
              const { id ,name, image, size,rate,color} = items;
              return (
                <div className="item" key={id}>
                  <div className= "images">
                    <img style={{width: {size}}} src={image} alt="" srcSet="" />
                  </div>
                  <div className="info">
                    <div className="name">
                      <p className="dish-name">{name}</p>
                      <p>{rate}</p>
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
