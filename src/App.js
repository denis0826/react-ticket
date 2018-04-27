import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import TicketList from './components/ticketList';
import TicketForm from './components/ticketForm';

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
              <TicketForm />
            </Col>
          </Row>
          <TicketList />
        </Container>
      </div>
    );
  }
}

export default App;
