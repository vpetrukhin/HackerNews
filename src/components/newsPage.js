import React from 'react';
import { Col, Container, ListGroup, Row } from 'react-bootstrap';
import { Redirect } from 'react-router-dom';

const NewsPаge = ({ match, newsList }) => {
  const { id } = match.params;
  const card = newsList.find(item => item.id === Number(id))

  return (
    <>
      {card ? (
        <Container className="bg-light p-2" fluid>
          <Row>
            <h1 className="text-center mb-3 text-dark">{card.title}</h1>
          </Row>
          <Row className="">
            <Col>
              <p className="text-center text-secondary">Автор: "{card.by}"</p>
            </Col>
            <Col>
              <p className="text-center text-secondary">{card.time}</p>
            </Col>
          </Row>
          <a href={card.url} className="d-block text-center text-info">
            Cсылка на статью
          </a>

          <p>{card.kids?.length}</p>
          <ListGroup>
            <ListGroup.Item>Cras justo odio</ListGroup.Item>
            <ListGroup.Item>Cras justo odio</ListGroup.Item>
          </ListGroup>
        </Container>
      ) : (
        <Redirect to="/" exact />
      )}
    </>
  );
}
export default NewsPаge;