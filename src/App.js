import React, { Component } from 'react';
import { Button, Input, InputGroup, Container, Row, Col } from 'reactstrap';
import Ticket from './components/ticketItem';

class App extends Component {

  wait = (ms) => {
    return new Promise((resolve) => {
      setTimeout(resolve, ms);
    });
  }

  render() {
    return (
      <div className="App">
        <Container>
          <Row>
            <Col>
              <InputGroup className="group-btn clearfix">
                <Input placeholder="Add ticket" />
                <Button color="danger">Submit</Button>
              </InputGroup>
            </Col>
          </Row>
          <Row>
            <Col xs="4">
              <h4>In-Progress</h4>
              <Ticket />
            </Col>
            <Col xs="4">
              <h4>Done</h4>
              <Ticket />
            </Col>
            <Col xs="4">
              <h4>Close</h4>
              <Ticket />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
