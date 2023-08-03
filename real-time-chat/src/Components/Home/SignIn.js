import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const SignIn = () => {
  return (
    <div className="signIn d-flex justify-content-center">
      <div className="signIn-box ">
        <Card>
          <Card.Body>
            <div className="text-center mt-1">
              <h2>Login</h2>
            </div>
            <div className="mx-5">
              <Form>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>Email </Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="name@example.com"
                    autoFocus
                  />
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="name@example.com"
                    autoFocus
                  />
                </Form.Group>
              </Form>
              <div className="text-center ">
                <Button className="  btn-submit-sign">Sign In</Button>
              </div>
              <Form.Label className="text-center mt-3 ms-5  ">
                Don't have an account Register
              </Form.Label>
            </div>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default SignIn;
