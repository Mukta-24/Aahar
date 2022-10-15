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
            <Navbar className='mt-1' bg="light" variant="light">
                <Container>
                    <Navbar.Brand href="#home" style={{padding:0, margin:0}} >
                        <div className='title'>
                            <div className='icon'>
                                <img src='images/aahar_logo-removebg-preview.png' />
                            </div>
                            <div className='heading'>AAHAR
                            </div>
                        </div>
                    </Navbar.Brand>
                    <div className='align-text'>
                        <Nav className="me-auto navigation">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#add">About Us</Nav.Link>
                            <Nav.Link href="#menu">Menu</Nav.Link>
                            <Nav.Link href="#login">Login</Nav.Link>
                            <Nav.Link href="#signup">Sign Up</Nav.Link>
                            <Nav.Link href="#cart"><i className="fa-sharp fa-solid fa-cart-shopping"></i></Nav.Link>
                        </Nav>
                    </div>
                </Container>
            </Navbar>
        </div>
    )
}
