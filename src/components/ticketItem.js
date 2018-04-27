import React from 'react';
import { connect } from 'react-redux';
import { removeTicket } from '../actions/tickets';
import { Card, CardImg, CardBody,
  CardSubtitle, Button } from 'reactstrap';



const Ticket = (props, dispatch, id) => {
  return (
    <div>
      <Card>
        <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=Card%20Title&w=318&h=180" alt="Card image cap" />
        <CardBody>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <Button color="success">Done</Button>
          <Button 
            color="danger" 
            onClick={() => {
              dispatch(removeTicket({ id }))
            }
          }>Close</Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default connect()(Ticket);
