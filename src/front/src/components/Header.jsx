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
          <Nav className="me-auto">
            <Nav.Link href="/Productos">Productos</Nav.Link>
            <Nav.Link href="/Usuarios">Usuarios</Nav.Link>
            <NavDropdown title="Categorias" id="collasible-nav-dropdown">
              <NavDropdown.Item href="/Deportes">Deportes</NavDropdown.Item>
              <NavDropdown.Item href="/Mujeres">Mujeres</NavDropdown.Item>
              <NavDropdown.Item href="/Hombres">Hombres</NavDropdown.Item>
              <NavDropdown.Item href="/Niños">Niños</NavDropdown.Item>
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