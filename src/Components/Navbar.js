import React from 'react'
// import { Navbar, Nav } from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function NavBar() {
    return (
        <div className='mt-2'>
            <Navbar bg="light" variant="light">
                <Container>
                    <Navbar.Brand href="#home">
                    <span className='icon'><img src='box.png'/></span> DabbeWALA</Navbar.Brand>
                    <div className='align-text'>
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#add">Add Tiffin Center</Nav.Link>
                        <Nav.Link href="#menu">Menu</Nav.Link>
                        <Nav.Link href="#login">Login</Nav.Link>
                        <Nav.Link href="#signup">Sign Up</Nav.Link>
                    </Nav>
                    </div>
                </Container>
            </Navbar>
        </div>
    )
}
