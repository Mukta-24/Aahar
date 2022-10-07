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
            {data.map((item) => {
              const { id ,name, image} = item;
              return (
                <div className="item" key={id}>
                  <div className="image">
                    <img src={image} alt="" srcset="" />
                  </div>
                  <div className="info">
                    <div className="name">
                      <p>{name}</p>
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
