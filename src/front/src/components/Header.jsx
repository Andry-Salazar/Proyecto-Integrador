import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


function Header() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="info" style={{ height: "6rem",color:'black', fontWeight: "600", background: 'linear-gradient(45deg, #f08dbd, #52cff3)' }}>
      <Container>
        <Navbar.Brand href="/">
          <img src="/logo192.png" style={{ width: "140px" }} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto" style={{	fontSize: "1.1rem" }}>
            <Nav.Link href="/Productos">Products</Nav.Link>
            <Nav.Link href="/Usuarios">Users</Nav.Link>
            <NavDropdown title="Category" id="collasible-nav-dropdown"  style={{	color:'black', fontWeight: "600" }}>
              <NavDropdown.Item href="/Deportes" style={{	color:'black', fontWeight: "500" }}>Sports</NavDropdown.Item>
              <NavDropdown.Item href="/Mujeres" style={{	color:'black', fontWeight: "500" }}>Womens</NavDropdown.Item>
              <NavDropdown.Item href="/Hombres" style={{	color:'black', fontWeight: "500" }}>Men</NavDropdown.Item>
              <NavDropdown.Item href="/Niños" style={{	color:'black', fontWeight: "500" }}>Children</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="/login" style={{ fontSize: "1.1rem", fontWeight: "600" }}>Logout</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
export default Header;