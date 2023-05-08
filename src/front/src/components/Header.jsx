import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


function Header() {
    return(
        <Navbar collapseOnSelect expand="lg" bg="info" style={{height:"4rem" , fontWeight: "600"}}>
        <Container>
          <Navbar.Brand href="/">
             <img src="/logo192.png" style={{width:"5rem"}}/>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/Productos">PRODUCTS</Nav.Link>
              <Nav.Link href="/Usuarios">USERS</Nav.Link>
              <NavDropdown title="CATEGORY" id="collasible-nav-dropdown">
              <NavDropdown.Item href="/Deportes">SPORTS</NavDropdown.Item>
                <NavDropdown.Item href="/Mujeres">WOMEN</NavDropdown.Item>
                <NavDropdown.Item href="/Hombres">MEN</NavDropdown.Item>
                <NavDropdown.Item href="/Niños">CHILDREN</NavDropdown.Item>  
              </NavDropdown>
            </Nav>
            <Nav>
              <Nav.Link href="/">Logout</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
}
export default Header;