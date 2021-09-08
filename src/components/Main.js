import React from 'react';
import { Col, ListGroup, Row, Spinner } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import NewsCard from './NewsCard';

const Main = ({ newsList }) => {
  const isLoading = useSelector(state => state.newsReducer.isLoading);

  return (
    <main>
      <ListGroup>
        {isLoading ? (
          <Row>
            <Col className="d-flex">
              <Spinner className="m-auto mt-3" animation="grow" variant="danger" />
            </Col>
          </Row>
        ) : (
          <Row xs={1} md={2} lg={3}>
            {newsList.map((item) => {
              return (
                <Col>
                  <ListGroup.Item className="m-2 h-100">
                    <NewsCard card={item} key={item.id.toString()} />
                  </ListGroup.Item>
                </Col>
              );
            })}
          </Row>
        )}
      </ListGroup>
    </main>
  );
}
export default Main;