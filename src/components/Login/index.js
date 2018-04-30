import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

class Login extends React.Component {
  constructor() {
    super();
    this.state = { someKey: 'someValue' };
  }
  handleSubmit(e) {
    const URL = 'http://localhost:3030/api/Clients/login';
    var headers = {
      'Content-Type': 'application/json',
    }
   
    e.preventDefault();
    fetch(URL, {
      headers: headers,
      method: 'POST',
      body: JSON.stringify({email: e.target.email.value, password: e.target.password.value })
    })
    .then((response) => {
      if (!response.ok) throw new Error('Login error ...');
      return response.json();
      
    })
    .then((data) => {
      console.log(data);
      sessionStorage.setItem('access_token', data.id);
      console.log(sessionStorage)
    });
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
        <Button>Login</Button>
      </Form>
    );
  }

  componentDidMount() {
   
  }
}

export default Login;
