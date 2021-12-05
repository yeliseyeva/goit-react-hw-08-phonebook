import React from "react";
import { Form, Col, Row, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import authOperations from '../redux/auth/auth-operations';

const s = {
  form: {
    width: 320,
    padding: 30,
  },
};

function RegisterPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return setName(value);
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(authOperations.register({ name, email, password }));
    console.log('Зарегистрировали')
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <Form onSubmit={handleSubmit} style={s.form}>
      <Form.Group as={Row} className="mb-3" controlId="formHorizontalName">
        <Form.Label column sm={3}>
          Name
        </Form.Label>
        <Col sm={10}>
          <Form.Control 
          type="text" 
          placeholder="Name"
          name="name" 
          value={name} 
          onChange={handleChange} />
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
        <Form.Label column sm={3}>
          Email
        </Form.Label>
        <Col sm={10}>
          <Form.Control 
          type="email" 
          placeholder="Email"
          name="email" 
          value={email} 
          onChange={handleChange} />
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
        <Form.Label column sm={3}>
          Password
        </Form.Label>
        <Col sm={10}>
          <Form.Control 
          type="password" 
          placeholder="Password"
          name="password" 
          value={password} 
          onChange={handleChange} />
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3">
        <Col sm={{ span: 10, offset: 2 }}>
          <Button type="submit">Sign in</Button>
        </Col>
      </Form.Group>
    </Form>
  );
}

export default RegisterPage;
