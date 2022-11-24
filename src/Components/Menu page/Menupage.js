import React from 'react'
import { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap'
import "./Menupage.css"

function Menupage() {
    const [mdata, setmData] = useState([]);
    useEffect(() => {
        fetch("http://localhost:3000/db_menu.json")
            .then((response) => response.json())
            .then(setmData);
    }, []);

    //  if (!mdata || mdata.length>0) return null;
    return (
        <>
            <div>

                <nav className="navbar navbar-expand-lg bg-light nav-start">
                    <div className="container-fluid title">
                        <div className="icon"><img src='images/aahar_logo-removebg-preview.png' /> </div>
                        <a className="navbar-brand heading" href="#">AAHAR</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse ml-auto" id="navbarSupportedContent">
                            <ul className="navbar-nav ml-auto mb-2 mb-lg-0 align-text options">
                                <li className="nav-item bo">

                                    <a className="nav-link active" aria-current="page" href="/">Home</a>
                                </li>
                                <li className="nav-item bo">
                                    <a className="nav-link" href="/About">About</a>
                                </li>
                                <li className="nav-item bo">
                                    <a className="nav-link" href="/menu">Menu</a>
                                </li>
                                <li className="nav-item bo">
                                    <a className="nav-link" href="/login">Login</a>
                                </li>
                                <li className="nav-item bo">
                                    <a className="nav-link" href="/register">Sign Up</a>
                                </li>
                                <li className="nav-item bo">
                                    <a className="nav-link" href="#"><i className="fa-sharp fa-solid fa-cart-shopping"></i></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
            <div className='main'>
                <div className="banner">
                    <p className='menu-word'>Menu</p>
                    <img src="https://demo.themewinter.com/wp/gloreya/wp-content/themes/gloreya/assets/images/banner/banner_image.png" alt="" />
                </div>
{/* adding combos list */}
                <div className="M-head">
                    <div className="M-heads">
                        <div className="M-name"> Menu</div>
                        <div className="M-combos">Combos</div>
                    </div>
                </div>
                <div className="M-list">
                    <div className="M-component">

                        <div className="combine-main">

                            {mdata.map((items) => {
                                const { id, name, price, description } = items;
                                return (
                                    <>

                                        <div className="M-item" key={id}>
                                            {/* <div className='name-price-description'> */}
                                            <div className="M-image">
                                                <img src="images/combo1.jpg" alt="" />
                                            </div>
                                            <div className="M-combine">
                                                <div className="name-price">
                                                    <div className="combo-name">{name}</div>
                                                    <div className="M-price"><i class="fa-solid fa-dollar-sign"></i> {price}</div>
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
{/* adding breakfast list */}
                <div className="M-head">
                    <div className="M-heads">
                        <div className="M-name"> Menu</div>
                        <div className="M-combos">Breakfast</div>
                    </div>
                </div>
                <div className="M-list">
                    <div className="M-component">

                        <div className="combine-main">

                            {mdata.map((items) => {
                                const { id, name, price, description } = items;
                                return (
                                    <>

                                        <div className="M-item" key={id}>
                                            {/* <div className='name-price-description'> */}
                                            <div className="M-image">
                                                <img src="images/combo1.jpg" alt="" />
                                            </div>
                                            <div className="M-combine">
                                                <div className="name-price">
                                                    <div className="combo-name">{name}</div>
                                                    <div className="M-price"><i class="fa-solid fa-dollar-sign"></i> {price}</div>
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