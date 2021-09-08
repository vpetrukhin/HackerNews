import React from 'react';
import { Button, Col, Row } from 'react-bootstrap';

const Header = () => {
  
  return (
    <>
      <Row className="pt-3 bg-dark">
        <Col>
          <h2 className="text-center text-white mb-3">Hacker News</h2>
        </Col>
      </Row>
      <Row className="pb-3 bg-dark">
        <Col>
          <Button>Обновить</Button>
        </Col>
      </Row>
    </>
  );
}
export default Header;