import React, { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init.jsx";
import GoogleSign from "../GoogleSign/GoogleSign.jsx";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [createUserWithEmailAndPassword, user, loading] =
    useCreateUserWithEmailAndPassword(auth);
  const navigate = useNavigate();

  const handleEmailBlur = (event) => {
    setEmail(event.target.value);
  };

  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleConfirmPassword = (event) => {
    setConfirmPassword(event.target.value);
  };

  if (user) {
    navigate("/home");
  }
  const handelCarateSubmit = (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      setError("Password not match");
      return;
    }
    if (password.length < 6) {
      setError("Password must be 6 characters  ");
      return;
    }
    createUserWithEmailAndPassword(email, password);
  };
  return (
    <div className="container">
      <Container>
        <Row className="d-flex align-items-center my-5 ">
          <Col md={6} xs={12}>
            <div className="mx-auto w-75">
              <h1 className="text-primary mt-5">Please Register</h1>
              <Form onSubmit={handelCarateSubmit}>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Enter Your Email</Form.Label>
                  <Form.Control
                    onBlur={handleEmailBlur}
                    type="email"
                    placeholder="Enter Your Email"
                    required
                  />
                  <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                  </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    onBlur={handlePassword}
                    type="password"
                    placeholder="Password"
                    required
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Confirm Password</Form.Label>
                  <Form.Control
                    onBlur={handleConfirmPassword}
                    type="password"
                    placeholder="Confirm Password"
                    required
                  />
                </Form.Group>
                <p className="text-error">{error}</p>
                <Button variant="primary" type="submit">
                  Register
                </Button>
              </Form>
              <p>
                New to learner{" "}
                <Link
                  to="/login"
                  className="text-danger pe-auto text-decoration-none"
                >
                  Please Login
                </Link>
              </p>
              <div>
                <GoogleSign></GoogleSign>
              </div>
            </div>
          </Col>
          <Col md={6} xs={12} className="">
           
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Register;
