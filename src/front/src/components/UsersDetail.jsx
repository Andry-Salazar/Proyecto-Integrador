import React from 'react';
import Card from 'react-bootstrap/Card';
import { useState, useEffect } from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { useParams } from 'react-router-dom';

const UsersDetail = (props) => {
  let { id } = useParams();
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3000/api/users/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
      });
  }, [id]);

  console.log(users);

  return (
    <Row>
      <Col>
        <Card
          // border="secondary"
          className="m-auto mb-3 px-0 pt-0"
          key={users.id}
          style={{
            width: '20rem',
            maxWidth: '30rem',
            color: '#000',
            background: '#f5f5f5',
            borderRadius: '4px',
            border: "none",
            padding: '20px',
            fontSize: '18px',
            display: 'flex',
          }}
        >
          <Card.Header className='text-center'>
            <b>Perfil de usuario </b>
          </Card.Header>
          <Card.Img variant="top" style={{ maxHeight: '400px', objectFit: 'cover', objectPosition: '0px 0%' }} src={users?.image ? `/images/user/${users.image}` : '/images/user/img_user_default.png'} />
          <Card.Body style={{ color: "#000" }}>
            <Card.Title className='text-center'>{users.first_name} {users.last_name}</Card.Title>
            <Card.Text>
              <p className='m-0'> <b>Email:</b> {users.email}</p>
              <p><b>Tipo:</b> {users.role}</p>
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default UsersDetail;
