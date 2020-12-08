import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./Login.css";
import { useAppContext } from "../libs/contextLib";

/*
We are introducing a couple of new concepts in this.

1.Right at the top of our component, 
we are using the useState hook to store what the user enters in the form. 
The useState hook just gives you the current value of the variable you want to store in the state 
and a function to set the new value. 
If you are transitioning from Class components to using React Hooks, 
we¡¯ve added a chapter to help you understand how Hooks work.

2.We then connect the state to our two fields in the form 
using the setEmail and setPassword functions to store what the user types in ? e.target.value. 
Once we set the new state, our component gets re-rendered. 
The variables email and password now have the new values.

3.We are setting the form controls to show the value of our two state variables email and password. 
In React, this pattern of displaying the current form value as a state variable and setting the new one when a user types something, 
is called a Controlled Component.

4.We are setting the autoFocus flag for our email field, 
so that when our form loads, it sets focus to this field.

5.We also link up our submit button with our state by using a validate function called validateForm. 
This simply checks if our fields are non-empty, 
but can easily do something more complicated.

6.Finally, we trigger our callback handleSubmit when the form is submitted. 
For now we are simply suppressing the browser¡¯s default behavior on submit 
but we¡¯ll do more here later.
*/

export default function Login() {
  const { userHasAuthenticated } = useAppContext();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
    alert('Logged in');
    userHasAuthenticated(true);
  }

  return (
    <div className="Login">
      <Form onSubmit={handleSubmit}>
        <Form.Group size="lg" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            autoFocus
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Button block size="lg" type="submit" disabled={!validateForm()}>
          Login
        </Button>
      </Form>
    </div>
  );
}