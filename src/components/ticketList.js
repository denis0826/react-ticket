import React from 'react';
import { connect } from 'react-redux';
import { Col, Row } from 'reactstrap';
import Ticket from './ticketItem';

const TicketList = (props) => {
  return (
    <Row>
      <Col xs="4">
        <h4>In-Progress</h4>
        {props.tickets.map((ticket)=>{
          return <Ticket key={ticket.id} {...ticket}/>
        })}
      </Col>     
      <Col xs="4">
        <h4>Done</h4>
      </Col>
      <Col xs="4">
        <h4>Close</h4>
      </Col>
    </Row>
  );
};

const mapStateToProps = (state) => {
  return {
    tickets: state.tickets
  }
};

export default connect(mapStateToProps)(TicketList);
