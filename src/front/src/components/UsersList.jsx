import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Link } from 'react-router-dom';

const UsersList = (props) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/api/users')
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
      });
  }, []);


  return (
    <div>
      <h1 className='text-center mb-5' style={{	color: "	#808080" }} >Registered Users</h1>
      <Row xs={3} className="col-m-12">
        {users.map((user, idx) => (
          <Col key={idx}>
            <Card
              // border="secondary"
              className="m-auto mb-3 px-0 pt-0"
              key={user.id}
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
              <Card.Header className='text-center' style={{	color: "	#808080", fontSize: "1.4rem"}} >
                <b>{user.first_name} {user.last_name}</b>
              </Card.Header>
              <Card.Img variant="top" style={{ maxHeight: '200px', objectFit: 'cover', objectPosition: '0px 0%' }} src={user?.image ? `/images/user/${user.image}` : '/images/user/img_user_default.png'} />
              <Card.Body style={{ color: "#000" }}>
                <Card.Text>
                  <p className='m-0'> <b style={{	color: "	#808080" }}>Email:</b> {user.email}</p>
                  <p><b style={{	color: "	#808080" }}>Type:</b> {user.role}</p>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default UsersList;
