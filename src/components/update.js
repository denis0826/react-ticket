import React from 'react';
import { Card, CardImg, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';

const Ticket = (props) => {
  return (
    <Card>
      <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
      <CardBody>
        <CardTitle>Card title</CardTitle>
        <CardSubtitle>Card subtitle</CardSubtitle>
        <Button color="success">Done</Button>
        <Button color="danger">Close</Button>
      </CardBody>
    </Card>
  );
};

export default Ticket;