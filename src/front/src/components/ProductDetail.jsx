import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function ProductDetail(props) {
  let { id } = useParams();
  const [product, setProduct] = useState();

  useEffect(() => {
    fetch(`http://localhost:3000/api/products/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setProduct(data);
      });
  }, []);

  console.log(product);

  return (
    <Container className='pt-3 mx-6' >
      <Row >
        <Col md="auto">
          <img
            src={'/images/products/' + product?.images[0].image_route}
            style={{ maxHeight: '350px' }}
          />
        </Col>
        <Col style={{ fontSize: "1.3rem", paddingTop: "1.3rem", paddingLeft: "2.5em"}}>
          <div>
            <p >
              <b>NOMBRE:</b> "{product?.name}"
            </p>
            <p>
              <b>DESCRIPCIÓN:</b> {product?.description}
            </p>
            {/* <p>
              <b>CATEGORÍA:</b> {product?.category}
            </p> */}
            <p>
              <b>PRECIO:</b> ${product?.price}
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default ProductDetail;
