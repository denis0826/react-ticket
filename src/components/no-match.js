import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';

export default () => (
  <div>
    <Container>
      <Row>
        <Col xs={{ size: 6, offset: 2 }}>
          <br />
          404 - <Link to="/">Go Home</Link>
        </Col>
      </Row>
    </Container>
  </div>
);