import React from 'react';
import { Button, Input, InputGroup } from 'reactstrap';

class TicketForm extends React.Component {
  state = {
    title : '',
    subtitle:'',
  };
  onTitleChange = (e) => {
    const title = e.target.value;
    this.setState(() => ({ title }));
  };
  onSubmit = (e) => {
    e.preventDefault();

    this.props.onSubmit({
      title: this.state.title,
    })

    console.log('submitted');
  }

  render() {
    return ( 
      <form onSubmit={this.onSubmit}>
        <InputGroup className="group-btn clearfix">
          <Input 
            placeholder="Add ticket title"
            value={this.state.title}
            onChange = {this.onTitleChange}
          />
          <Button color="danger">Submit</Button>
        </InputGroup>
      </form>
    )
  }
}

export default TicketForm