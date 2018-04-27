import React from 'react';
import { connect } from 'react-redux';
import { Container, Row, Col } from 'reactstrap';
import TicketList from './components/ticketList';
import TicketForm from './components/ticketForm';

import { addTicket } from './actions/tickets';

const App = (props) => (

  // wait = (ms) => {
  //   return new Promise((resolve) => {
  //     setTimeout(resolve, ms);
  //   });
  // }
  <div className="App">
    <Container>
      <Row>
        <Col>
          <TicketForm  
            onSubmit={(ticket) => {
              props.dispatch(addTicket(ticket))
            }}
          />
        </Col>
      </Row>
      <TicketList />
    </Container>
  </div>
);

export default connect()(App)
