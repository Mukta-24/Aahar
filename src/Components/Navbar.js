import React from 'react'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { Navbar, Nav } from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Navbar.css'

export default function NavBar() {
    return (
        <div>
            {/* <Navbar className='mt-1' bg="light" variant="light">
                <Container>

                    <Navbar.Brand href="#home" style={{ padding: 0, margin: 0 }} >
                        <div className='title'>
                            <div className='icon'>
                                <img src='images/aahar_logo-removebg-preview.png' />
                            </div>
                            <div className='heading'>AAHAR
                            </div>
                        </div>
                    </Navbar.Brand>
                    <div className='align-text'>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <Nav className="me-auto navigation mb-2 mb-lg-0">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#add">About Us</Nav.Link>
                            <Nav.Link href="#menu">Menu</Nav.Link>
                            <Nav.Link href="#login">Login</Nav.Link>
                            <Nav.Link href="#signup">Sign Up</Nav.Link>
                            <Nav.Link href="#cart"><i className="fa-sharp fa-solid fa-cart-shopping"></i></Nav.Link>
                        </Nav>
                        </div>
                    </div>
                </Container>
            </Navbar> */}
            <nav className="navbar navbar-expand-lg bg-light nav-start">
                <div className="container-fluid title">
                <div className="icon"><img src='images/aahar_logo-removebg-preview.png'/> </div>
                    <a className="navbar-brand heading" href="#">AAHAR</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse ml-auto" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto mb-2 mb-lg-0 align-text options">
                            <li className="nav-item bo">
                                
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item bo">
                                <a className="nav-link" href="#About">About</a>
                            </li>
                            <li className="nav-item bo">
                                <a className="nav-link" href="#">Menu</a>
                            </li>
                            <li className="nav-item bo">
                                <a className="nav-link" href="#">Login</a>
                            </li>
                            <li className="nav-item bo">
                                <a className="nav-link" href="#">Sign Up</a>
                            </li>
                            <li className="nav-item bo">
                                <a className="nav-link" href="#"><i className="fa-sharp fa-solid fa-cart-shopping"></i></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}
