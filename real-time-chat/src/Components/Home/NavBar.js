import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import logo from "./assets/logo-img.png";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

const NavBar = () => {
  // ------------------------------Bootstrap states-----------------
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // ---------------------------------------------------------------
  return (
    <div className="navBar position-sticky top-0 left-0">
      <Navbar className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">
            <img src={logo} alt="home logo" width={200} />
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              {/* --------------------------Login Button---------- */}
              <Button
                variant="primary"
                onClick={handleShow}
                className="px-5 py-2"
              >
                Register
              </Button>

              <Modal show={show} onHide={handleClose} className="mx-4">
                {/* <Modal.Header closeButton>
                  <Modal.Title>Signal</Modal.Title>
                </Modal.Header> */}
                <div closeButton className="text-center mt-3">
                  <h2>Register</h2>
                </div>
                <Modal.Body className="mx-5">
                  <Form>
                    <Form.Group
                      className="mb-3 "
                      controlId="exampleForm.ControlInput1"
                    >
                      <Form.Label>Username</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="username"
                        autoFocus
                      />
                    </Form.Group>
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
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlInput1"
                    >
                      <Form.Label>Add Photo</Form.Label>
                      <Form.Control
                        type="file"
                        placeholder="name@example.com"
                        autoFocus
                      />
                    </Form.Group>
                  </Form>
                </Modal.Body>
                <div className="text-center ">
                  <Button onClick={handleClose} className="  btn-submit">
                    Register
                  </Button>
                </div>
                <Form.Label className="text-center mt-3">
                  Already Have an account Login
                </Form.Label>
              </Modal>

              {/* ---------------------------------------------------------------------------- */}
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
