import React from "react";
import { Button, Card, Col } from "react-bootstrap";
const Expo = (props) => {
  const { name, img, description, price, like, quantity } = props.watch;

  console.log(name);
  return (
    <Col sm={12} md={6} lg={4} className="p-2">
      <Card>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <div className="d-flex">
            <span>Price:${price}</span>
            <span className="ps-3">
              <strong>Stoke:</strong>
              {like}
            </span>
            <span className="ms-3">{like}</span>
          </div>
          <Card.Text>{description}</Card.Text>
        </Card.Body>
        <Button id="hero-btn" variant="dark">
          <a id="link-bnt" href="">
            Buy Now
          </a>
        </Button>
      </Card>
    </Col>
  );
};

export default Expo;
