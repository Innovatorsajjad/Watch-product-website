import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Typical from "react-typical";
import "./Banner.css";
import BannerAnimation from "../BannerAnimation/BannerAnimation.jsx";
const Banner = () => {
  return (
    <Container>
      <Row className="align-items-center justify-content-center">
        <Col sm={12} md={6}>
          <h4 className="fw-bold Parent-container p-4">
            <Typical
              steps={[
                "Best Whatch house",
                1000,
                "Bangladesh Limited",
                1000,
                "Import from Japan,Dubai,India",
                1000,
                "Pakistan,Russia,China,Canada",
                1000,
                "Cross Platform business policy",
              ]}
              loop={Infinity}
              wrapper="p"
            />
          </h4>
          <p className="content">
            We are squarely in the age of the smartphone, but even though our
            mobile devices are inextricable for our daily lives, there is no
            reason to abandon a practical and efficient—and
            mechanical—time-telling tool. Yes, we are talking about watches. And
            not just any watches, but the best luxury watches from the biggest
            watch brands in the world. Not
          </p>
          <br />
          <button id="btn-hero">
            {" "}
            <a
              href="http://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Get Now
            </a>
          </button>
        </Col>
        <Col sm={12} md={6}>
          <div className="ms-5" style={{ width: "400px" }}>
            <BannerAnimation></BannerAnimation>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Banner;
