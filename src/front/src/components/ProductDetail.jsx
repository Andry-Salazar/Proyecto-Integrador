import React from 'react';
import Container from 'react-bootstrap/Container';
import Carousel from 'react-bootstrap/Carousel';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function ProductDetail(props) {
  let { id } = useParams();
  const [product, setProduct] = useState();

  const categories = {
    1: 'Destacado',
    2: 'Deporte',
    3: 'Hombre',
    4: 'Mujer',
    5: 'Niño'
  }

  useEffect(() => {
    fetch(`http://localhost:3000/api/products/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setProduct(data);
      });
  }, []);

  return (
    <Container className='pt-3 mx-6' >
      <h1 className='text-center mb-5'>{product?.name}</h1>
      <Row >
        <Col>
          <Carousel variant="dark">
            {product?.images.map(image => <Carousel.Item>
              <img
                style={{ maxHeight: '700px', objectFit: 'cover', width: '100%' }}
                src={'/images/products/' + image.image_route}
                alt="First slide"
              />
            </Carousel.Item>)}
          </Carousel>
        </Col>
        <Col style={{ fontSize: "1.3rem", paddingTop: "1.3rem", padding: "2.5em" }}>
          <div>
            <p style={{ textAlign: 'justify', marginTop: "1rem" }}>
              {product?.description}
            </p>
            <p>
            <b>CATEGORY:</b> {categories[product?.category]}
            </p>
            <p>
              <b>PRICE:</b> ${product?.price.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default ProductDetail;
