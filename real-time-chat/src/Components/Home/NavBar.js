import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import logo from "./assets/logo-img.png";
import profile from "./assets/profile.jfif";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../../firebase";
import { setDoc, doc, Timestamp } from "firebase/firestore";
import { useNavigate, Link } from "react-router-dom";

const NavBar = () => {
  // ------------------------------Bootstrap states-----------------
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // ---------------------------------------------------------------
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    error: null,
    loading: false,
  });

  const navigate = useNavigate();

  const { name, email, password, error, loading } = data;

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setData({ ...data, error: null, loading: true });
    if (!name || !email || !password) {
      setData({ ...data, error: "All fields are required" });
    }
    try {
      const result = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      await setDoc(doc(db, "users", result.user.uid), {
        uid: result.user.uid,
        name,
        email,
        createdAt: Timestamp.fromDate(new Date()),
        isOnline: true,
      });
      setData({
        name: "",
        email: "",
        password: "",
        error: null,
        loading: false,
      });
      navigate("/signIn");
    } catch (err) {
      setData({ ...data, error: err.message, loading: false });
    }
  };

  //-------------------------------------------------------------------------------------------------------------------------------

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
                <div className="text-center mt-3">
                  <h2>Register</h2>
                </div>
                <Modal.Body className="mx-5">
                  {/* <Form onSubmit={handleSubmit}>
                    <Form.Group
                      className="mb-3 "
                      // controlId="exampleForm.ControlInput1"
                    >
                      <Form.Label>Username</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="username"
                        // autoFocus
                        // value={}
                        onChange={handleChange}
                      />
                    </Form.Group>
                    <Form.Group
                      className="mb-3"
                      // controlId="exampleForm.ControlInput1"
                    >
                      <Form.Label>Email </Form.Label>
                      <Form.Control
                        type="email"
                        placeholder="name@example.com"
                        // autoFocus
                        // value={email}
                        onChange={handleChange}
                      />
                    </Form.Group>
                    <Form.Group
                      className="mb-3"
                      // controlId="exampleForm.ControlInput1"
                    >
                      <Form.Label>Password</Form.Label>
                      <Form.Control
                        type="password"
                        placeholder="Password"
                        // autoFocus
                        // value={password}
                        onChange={handleChange}
                      />
                    </Form.Group>
                    <Form.Group
                      className="mb-3 d-none"
                      // controlId="exampleForm.ControlInput1"
                    >
                      <Form.Label>Add Photo</Form.Label>
                      <Form.Control
                        type="file"
                        placeholder="name@example.com"
                        // autoFocus
                        id="file"
                      />
                    </Form.Group> */}
                  {/* <label htmlFor="file" className="p-up">
                      <img src={profile} alt="image upload" width={50} />
                      <span>Upload Avatar</span>
                    </label> */}
                  {/* {error ? <p className="error">{error}</p> : null}

                    <div className="text-center ">
                      <Button type="submit" className="  btn-submit">
                        Register
                      </Button>
                    </div>
                  </Form> */}

                  {/* ------------------------------------- */}
                  <form className="form" onSubmit={handleSubmit}>
                    <div className="input_container">
                      <label htmlFor="name">Name</label>
                      <input
                        type="text"
                        name="name"
                        value={name}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="input_container">
                      <label htmlFor="email">Email</label>
                      <input
                        type="text"
                        name="email"
                        value={email}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="input_container">
                      <label htmlFor="password">Password</label>
                      <input
                        type="password"
                        name="password"
                        value={password}
                        onChange={handleChange}
                      />
                    </div>
                    {error ? <p className="error">{error}</p> : null}
                    <div className="btn_container">
                      <button className="btn" disabled={loading}>
                        {loading ? "Creating ..." : "Register"}
                      </button>
                    </div>
                  </form>
                </Modal.Body>
                <Form.Label className="text-center mt-3">
                  Already Have an account <Link to="/signIn">Login</Link>
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
