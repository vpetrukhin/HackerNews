import React from 'react';
import { Button, Col, Row } from 'react-bootstrap';

const Header = ({ updateHandler }) => {
  return (
    <>
      <Row className="pt-3 bg-dark">
        <Col>
          <h2 className="text-center text-white mb-3">Hacker News</h2>
        </Col>
      </Row>
      <Row className="pb-3 bg-dark">
        <Col>
          <Button className="w-100" onClick={updateHandler}>Обновить</Button>
        </Col>
      </Row>
    </>
  );
};
export default Header;