import React, { Fragment } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Footer.css'
const Footer = () => {
    return (
      <Fragment>
        <Container
          fluid={true}
          className="text-md-start text-lg-start footerSection"
        >
          <Row>
            <Col lg={3} md={6} sm={12} className="p-5 text-justify">
              <h5>Follow Me</h5>
              <a href="">Facebook</a>
              <br />
              <a href="">Youtube</a>
            </Col>
            <Col lg={3} md={6} sm={12} className="p-5 text-justify">
              <h5>Address</h5>
              <p className="text-sm-left">
                #9/6 comilla kandirpar new market 3rd flor fort side Comilla
                Dhaka
              </p>
              <p>nxshipon@gmail.com</p>
              <p>+8801703059461</p>
            </Col>
            <Col lg={3} md={6} sm={12} className="p-5 text-justify">
              <h5>Information</h5>
              <a href="">About Me</a>
              <br />
              <a href="">My Resume</a>
              <br />
              <a href="">Contact info</a>
            </Col>
            <Col lg={3} md={6} sm={12} className="p-5 text-justify">
              <h6>Legal</h6>
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
};

export default Footer;