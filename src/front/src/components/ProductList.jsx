import React from 'react';
import Card from 'react-bootstrap/Card';
import { Button } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';

const ProductList = (props) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/api/products')
      .then((response) => response.json())
      .then((data) => {
        setProducts(data.products);
      });
  }, []);

  console.log(products);

  return (
    <div className='mx-5'>
      <h1 className='text-center mb-5'>Listado de productos</h1>
      <Table className='text-center' striped bordered hover size="sm" variant="light">
        <thead>
          <tr>
            <th>#</th>
            <th>Nombre</th>
            <th>Imagen</th>
            <th>Descripción</th>
            <th>Precio</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, idx) => (
            <tr key={idx}>
              <td style={{ minWidth: '50px', verticalAlign: 'middle' }}>{product.id}</td>
              <td style={{ minWidth: '200px', verticalAlign: 'middle' }}>{product.name}</td>
              <td className='p-3'>
                <img
                  src={'/images/products/' + product.images[1].image_route}
                  style={{ width: '10rem' }}
                />
              </td>
              <td className='p-3' style={{ fontSize: '0.9rem', verticalAlign: 'middle', textAlign: 'justify' }}>{product.description}</td>
              <td style={{ minWidth: '150px', verticalAlign: 'middle' }}>${product.price.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}</td>
              <td style={{ minWidth: '150px', verticalAlign: 'middle' }}><Link to={`/productos/${product.id}`}>Ver detalle</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>

    // <Row xs={3} className="col-m-12">
    //   {products.map((product, idx) => (
    //     <Col key={idx}>
    //       <Card
    //         // border="secondary"
    //         className="m-auto mb-3 px-0 pt-0"
    //         key={product.id}
    //         style={{
    //           width: '20rem',
    //           height: '26rem',
    //           maxWidth: '30rem',
    //           color: '#000',
    //           background: '#f5f5f5',
    //           borderRadius: '4px',
    //           border: "none",
    //           padding: '20px',
    //           fontSize: '18px',
    //           display: 'flex',
    //         }}
    //       >
    //         <Card.Header className='p-0' style={{ maxHeight: '18rem', overflow: 'hidden',  border: 'none'}}>
    //           <Card.Img
    //             variant="top"
    //             src={'/images/products/' + product.images[1].image_route}
    //             style={{ maxHeight: '14rem', border: "none"}}
    //           />
    //         </Card.Header>
    //         <Card.Body>
    //           <Card.Title style={{ fontFamily: "CentraNo2", fontSize: '1.5rem', fontWeight: "bold"}}>{product.name}</Card.Title>
    //           <Card.Text>{"$ "+ product.price}</Card.Text>
    //         </Card.Body>
    //         <Button
    //           variant="info"
    //           className="m-auto"
    //           onClick={() =>
    //             console.log(
    //               `El cliente agregó el Producto ${product.id} agregado al carrito`
    //             )
    //           }
    //           style={{
    //            fontWeight: "bold",
    //             width: '16rem',
    //             borderRadius: '4rem',
    //             fontSize: '1.2rem',}}
    //         >
    //           Agregar al Carrito
    //         </Button>
    //       </Card>
    //     </Col>
    //   ))}
    // </Row>
  );
};

export default ProductList;
