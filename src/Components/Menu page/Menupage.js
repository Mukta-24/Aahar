import React from 'react'
import { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap'
import "./Menupage.css"
import Search from './Search';

function Menupage() {
    const [mdata, setmData] = useState([]);
    useEffect(() => {
        fetch("http://localhost:3000/db_menu.json")
            .then((response) => response.json())
            .then(setmData);
    }, []);

      if (!mdata || mdata.length===0) return null;
    return (
        <>
            <div className='main'>
                <div >
                 <Search/>
                </div>
                <div className="banner">
                    <p className='menu-word'>Menu</p>
                    <img src="https://demo.themewinter.com/wp/gloreya/wp-content/themes/gloreya/assets/images/banner/banner_image.png" alt="" />
                </div>
                {/* adding combos list */}
                <div className="M-head">
                    <div className="M-heads">
                        <div className="M-name"> Menu</div>
                        <div className="M-combos">Breakfast</div>
                    </div>
                </div>
                <div className="M-list">
                    <div className="M-component">
                        <div className="combine-main">
                            {/* {console.log(mdata)} */}
                            {mdata[0].items.map((curElement) => {
                                {console.log("data",curElement ) }
                                const { id, name, price, description, image } = curElement;
                                
                                    return (
                                        <>
                                            <div className="M-item" key={id}>    
                                                <div className="M-image">
                                                    <img src={image} alt="image" />
                                                </div>
                                                <div className="M-combine">
                                                    <div className="name-price">
                                                        <div className="combo-name">{name}</div>
                                                        <div className="M-price">₹{price}</div>
                                                    </div>
                                                        <div className="combo-description">{description}</div>
                                                </div>
                                            </div>
                                        </>    
                                    )
                            })}
  
                        </div>
                        {/* <Col className="combine-main">
                        <div className="M-image"> 
                            <img src="images/combo1.jpg" alt="" />
                        </div>
                        <div className="M-combine">
                            <div className="combo-name"> Pepsi + burger</div>
                            <div className="combo-description"> 1 coco-cola, Masala cheese burger </div>

                        </div>
                    </Col>
                    </Row>
                    <Row>
                    <Col className="combine-main">
                        <div className="M-image"> 
                            <img src="images/combo1.jpg" alt="" />
                        </div>
                        <div className="M-combine">
                            <div className="combo-name"> Pepsi + burger</div>
                            <div className="combo-description"> 1 coco-cola, Masala cheese burger </div>

                        </div>
                    </Col>
                    <Col className="combine-main">
                        <div className="M-image"> 
                            <img src="images/combo1.jpg" alt="" />
                        </div>
                        <div className="M-combine">
                            <div className="combo-name"> Pepsi + burger</div>
                            <div className="combo-description"> 1 coco-cola, Masala cheese burger </div>

                        </div>
                    </Col> */}
                    </div>

                </div>
                <div className="cart-function">
                    <Row className="carts">
                        <Col className="cart1">
                            <div className="cart-detail">
                                <div className="cart-description">
                                    <p className='special-heading'> <strong>Friday Offer</strong> </p>
                                    <p> The Japanese Oishiii Burgirrrr</p>

                                </div>
                                <div className="cart-image">
                                    <img src="images/combo1.jpg" alt="" />
                                </div>
                            </div>
                        </Col>
                        <Col className="cart2">
                            <div className="cart-detail">
                                <div className="cart-description">
                                    <p className='special-heading'>  this month special </p>
                                    <p> The Japanese Oishiii Burgirrrr</p>

                                </div>
                                <div className="cart-image">
                                    <img src="images/combo1.jpg" alt="" />
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
                {/* adding breakfast list */}
                <div className="M-head">
                    <div className="M-heads">
                        <div className="M-name"> Menu</div>
                        <div className="M-combos">Chinese</div>
                    </div>
                </div>
                <div className="M-list">
                    <div className="M-component">

                        <div className="combine-main">
                        {mdata[2].items.map((curElement) => {
                                {console.log("data",curElement ) }
                                const { id, name, price, description } = curElement;
                                
                                    return (
                                        <>
                                            <div className="M-item" key={id}>    
                                                <div className="M-image">
                                                    <img src="images/combo1.jpg" alt="" />
                                                </div>
                                                <div className="M-combine">
                                                    <div className="name-price">
                                                        <div className="combo-name">{name}</div>
                                                        <div className="M-price">₹{price}</div>
                                                    </div>
                                                        <div className="combo-description">{description}</div>
                                                </div>
                                            </div>
                                        </>    
                                    )
                            })}

                            
                        </div>
                    
                    </div>

                </div>
                <div className="cart-function">
                    <Row className="carts">
                        <Col className="cart1">
                            <div className="cart-detail">
                            <div className="cart-description">
                                <p className='special-heading'>  this month special </p>
                                <p> The Japanese Oishiii Burgirrrr</p>

                            </div>
                            <div className="cart-image">
                                <img src="images/combo1.jpg" alt="" />
                            </div>
                            </div>
                        </Col>
                        <Col className="cart2">
                        <div className="cart-detail">
                            <div className="cart-description">
                                <p className='special-heading'>  this month special </p>
                                <p> The Japanese Oishiii Burgirrrr</p>

                            </div>
                            <div className="cart-image">
                                <img src="images/combo1.jpg" alt="" />
                            </div>
                            </div>
                        </Col>
                    </Row>
                </div>


            </div>
        </>
    )
}

export default Menupage