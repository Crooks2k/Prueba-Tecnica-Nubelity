import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import React from 'react'
import { Link } from 'react-router-dom';

const Header = () => {
    const handleRedirect = (e) =>{
        e.preventDefault();
        window.open("https://github.com/Crooks2k", '_blank');
    }
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand as={Link} to={"/"}>NUBELITY</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to={"/"} >Home</Nav.Link>
                        <Nav.Link as={Link} to={"/users"}>User List</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link>Prueba Tecnica</Nav.Link>
                        <Nav.Link eventKey={2} onClick={handleRedirect}>
                            @Crooks2k | On GitHub
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header