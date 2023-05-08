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
    <Row xs={3} className="col-m-12">
        <Col>
          <Card
            // border="secondary"
            className="m-auto mb-3 px-0 pt-0"
            key={users.id}
            style={{
              width: '20rem',
              height: '26rem',
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
            <Card.Header className='p-0' style={{ maxHeight: '18rem', overflow: 'hidden',  border: 'none'}}>
             Perfil Usuario
            </Card.Header>
            <Card.Body style={{color: "#000"}}>
              <Card.Title style={{ fontFamily: "CentraNo2", fontSize: '1.5rem', fontWeight: "bold"}}>{users?.first_name} {users?.last_name}</Card.Title>
              <Card.Text></Card.Text>
            </Card.Body>
          </Card>
        </Col>
    </Row>
  );
};

export default UsersDetail;
