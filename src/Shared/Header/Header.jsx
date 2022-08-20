import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import "./Header.css";
import { Link } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";
import auth from "../../firebase.init.jsx";

const Header = () => {
  const [user] = useAuthState(auth);

  const handleSignOut = () => {
    signOut(auth);
  };

  return (
    <Navbar className="navbar" bg="" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img
            src="https://i.ibb.co/gwrQ8SP/d23b51dd08a77d21cf07f8bca5299c80-removebg-preview.png"
            height="70"
            alt=""
            srcset=""
          />{" "}
          Watch
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="nav-color" />
        <Navbar.Collapse id="basic-navbar-nav ">
          <Nav className="me-auto"></Nav>
          <Nav>
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/blog">
              Blog
            </Nav.Link>
            <Nav.Link as={Link} to="/about">
              About
            </Nav.Link>
            <Nav.Link as={Link} to="/contact">
              Contact
            </Nav.Link>
            {user && (
              <>
                <Nav.Link as={Link} to="/explore">
                 Explore
                </Nav.Link>
              </>
            )}
            {user ? (
              <button className="btn-hero" onClick={handleSignOut}>
                SignOut
              </button>
            ) : (
              <Nav.Link className="fw-bold" as={Link} to="/login">
                Login
              </Nav.Link>
            )}
            <Nav.Link>{user?.email}</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
