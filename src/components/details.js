import React from 'react';
import { Card, CardImg, CardBody,
  CardSubtitle, Button,
  Container, Row, Col } from 'reactstrap';

const Details = (props) => {
  // console.log(props);
  return (
    <Container>
      <Row>
        <Col xs={{ size: 4, offset: 4 }}>
          <br />
          Editing the Ticket with ID of { props.match.params.id } 
        </Col>
      </Row>
      <Row>
      <Col xs={{ size: 4, offset: 4 }}>
          <Card className="clearfix">
            <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=Card%20Title&w=318&h=180" alt="Card image cap" />
            <CardBody>
              <CardSubtitle>Card subtitle</CardSubtitle>
              <Button color="success">Done</Button>
              <Button color="danger">Close</Button>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default Details
