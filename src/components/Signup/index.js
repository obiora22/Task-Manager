import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import "./signup.css";

class Signup extends React.Component {

  handleSubmit(e) {
    const URL  = 'http://localhost:3030/api/Clients';
    var headers = {
      'Content-Type': 'application/json',
    }

    e.preventDefault();
    var email = e.target.email.value;
    var password = e.target.password.value;

    fetch(URL, {
      headers: headers,
      method: "POST",
      body: JSON.stringify({email: email, password: password})
    })
    .then((response) => {
      if (!response.ok) throw new Error('Request Error ...')
      console.log('User has been created ...')
      e.target.reset();
    }).catch((err) => console.log(err.message));
    
  }
  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <FormGroup>
          <Label for="exampleEmail">Email</Label>
          <Input type="email" name="email" id="exampleEmail" placeholder="email" />
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">Password</Label>
          <Input type="password" name="password" id="examplePassword" placeholder="password" />
        </FormGroup>
        <Button>Submit</Button>
      </Form>
    );
  }

}

export default Signup;
