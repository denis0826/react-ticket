import React, { Component } from 'react';
import { Button, Input, InputGroup, Container, Row, Col } from 'reactstrap';
import TicketList from './components/ticketList';

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
          <TicketList />
        </Container>
      </div>
    );
  }
}

export default App;
