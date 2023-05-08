import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import {
  faGift,
  faGifts,
  faUser,
  faUsers,
} from '@fortawesome/free-solid-svg-icons';
import EntityCount from './EntityCount/EntityCount';
import s from './Home.module.css';
import { useState, useEffect } from 'react';

function Home() {
  const [products, setProducts] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/api/products')
      .then((response) => response.json())
      .then((data) => {
        setProducts(data.products);
      });

      fetch('http://localhost:3000/api/users')
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
      });
  }, []);

  console.log(products);
  console.log(users);

  
  return (
    <div className={s.messageBar}>
      <nav>
        <ul
          className="d-flex"
          style={{
            fontFamily: 'CentraNo2',
            color: '#fff',
            fontSize: '1.2rem',
            fontWeight: '600',
            listStyle: 'none',
          }}
        >
          <a href="/" style={{ textDecoration: 'none', color: '#fff' }}>
            <span>Home</span>
          </a>
        </ul>
      </nav>
      <Container>
        <Row>
          <Col sm="3">
            <EntityCount
              color="blue"
              title="Products"
              icon={faGifts}
              text={products.length}
              link="productos"
            />
          </Col>
          <Col sm="3">
            <EntityCount
              color="blue"
              title="Last Product"
              icon={faGift}
              text={products[products.length-1]?.name}
              link={`productos/${products[products.length-1]?.id}`}
            />
          </Col>
          <Col sm="3">
            <EntityCount
              color="pink"
              title="Users"
              icon={faUsers}
              text={users.length}
              link="usuarios"
            />
          </Col>
          <Col sm="3">
            <EntityCount
              color="pink"
              title="Last User"
              icon={faUser}
              text={users[users.length-1]?.first_name}
              link={`usuarios/${users[users.length-1]?.id}`}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
export default Home;
