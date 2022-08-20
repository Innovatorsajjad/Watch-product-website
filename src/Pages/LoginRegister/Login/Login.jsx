import React, { useRef } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import GoogleSign from "../GoogleSign/GoogleSign.jsx";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loading from "../../../Shared/Loading/Loading.jsx";

const Login = () => {
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const navigate = useNavigate();
  const location = useLocation();

  let from = location.state?.from?.pathname || "/";
  let errorElement;
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

  if (loading || sending) {
    return <Loading></Loading>
  }

  if (user) {
    navigate(from, { replace: true });
  }

  if (error) {
    errorElement = <p className="text-danger">Error: {error?.message}</p>;
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    signInWithEmailAndPassword(email, password);
  };

  const navigateRegister = (event) => {
    navigate("/register");
  };

  const resetPassword = async () => {
    const email = emailRef.current.value;
    if (email) {
      await sendPasswordResetEmail(email);
      toast("Sent email");
    } else {
      toast("please enter your email address");
    }
  };

  return (
    <div className="container">
      <Container>
        <Row className="d-flex align-items-center my-5 ">
          <Col md={6} xs={12}>
           
          </Col>
          <Col md={6} xs={12} className="">
            <div className="mx-auto w-75">
              <h1 className="text-primary mt-5">Please Login</h1>
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    ref={emailRef}
                    type="email"
                    placeholder="Enter email"
                    required
                  />
                  <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                  </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    ref={passwordRef}
                    type="password"
                    placeholder="Password"
                    required
                  />
                </Form.Group>
                <p style={{ color: "red" }}>{error?.message}</p>
                {loading && <p>Loading .....</p>}
                <Button variant="primary" type="submit">
                  Login
                </Button>
              </Form>
              <p>
                New to learner{" "}
                <Link
                  onClick={navigateRegister}
                  to="/register"
                  className="text-danger pe-auto text-decoration-none"
                >
                  Please Register
                </Link>
              </p>
              <p>
                Forget Password?{" "}
                <button
                  className="btn btn-link text-primary pe-auto text-decoration-none"
                  onClick={resetPassword}
                >
                  Reset Password
                </button>{" "}
              </p>
              <ToastContainer />
              <div>
                <GoogleSign from={from}></GoogleSign>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Login;
