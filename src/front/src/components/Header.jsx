import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="info"
      style={{
        height: '6rem',
        color: 'black',
        fontWeight: '600',
        background: 'linear-gradient(45deg, #f08dbd, #52cff3)',
      }}
    >
      <Container>
        <Navbar.Brand>
          <Link to="/">
            <img src="/logo192.png" style={{ width: '140px' }} />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto" style={{ fontSize: '1.1rem' }}>
            <Nav.Link>
              <Link
                to="/productos"
                style={{
                  textDecoration: 'none',
                  color: 'var(--bs-navbar-color)',
                }}
              >
                Products
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link
                to="/usuarios"
                style={{
                  textDecoration: 'none',
                  color: 'var(--bs-navbar-color)',
                }}
              >
                Users
              </Link>
            </Nav.Link>
            <NavDropdown
              title="Category"
              id="collasible-nav-dropdown"
              style={{ color: 'black', fontWeight: '600' }}
            >
              <NavDropdown.Item>
                <Link
                  to="/productos?category=2"
                  style={{
                    textDecoration: 'none',
                    color: 'var(--bs-navbar-color)',
                    fontWeight: '500',
                  }}
                >
                  Sports
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link
                  to="/productos?category=4"
                  style={{
                    textDecoration: 'none',
                    color: 'var(--bs-navbar-color)',
                    fontWeight: '500',
                  }}
                >
                  Womens
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link
                  to="/productos?category=3"
                  style={{
                    textDecoration: 'none',
                    color: 'var(--bs-navbar-color)',
                    fontWeight: '500',
                  }}
                >
                  Men
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link
                  to="/productos?category=5"
                  style={{
                    textDecoration: 'none',
                    color: 'var(--bs-navbar-color)',
                    fontWeight: '500',
                  }}
                >
                  Children
                </Link>
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link
              href="/"
              style={{ fontSize: '1.1rem', fontWeight: '600' }}
            >
              Logout
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default Header;
