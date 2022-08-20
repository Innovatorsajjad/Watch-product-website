import React, { Fragment } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './BestProduct.css'
import img1 from "../../../assets/best/best (1).jpeg";
import img2 from "../../../assets/best/best (2).jpeg";
import img3 from "../../../assets/best/best (3).jpeg";
import img4 from "../../../assets/best/best (4).jpeg";
const BestProduct = () => {
    return (
      <Fragment>
        <Container className="text-center text-md-start text-lg-start">
          <h2 className="my-5 text-center">Best Product </h2>
          <Row>
            <Col lg={6} md={12} sm={12}>
              <Row>
                <Col lg={6} md={12} sm={12} className="p-2">
                  <img className="bestImg" src={img1} alt="" />
                </Col>
                <Col lg={6} md={12} sm={12} className="p-2">
                  <h5>Montblanc</h5>
                  <p className="text-justify">
                    Fine state-of-the-art and especially timepiece, in the
                    Montblanc 1858 collection, which is a reinterpretation of
                    1920s and '30s Minerva watches used for military
                    exploration.
                  </p>

                  <a className="myButton" href="">
                    details
                  </a>
                </Col>
              </Row>
            </Col>
            <Col lg={6} md={12} sm={12}>
              <Row>
                <Col lg={6} md={12} sm={12} className="p-2">
                  <img className="bestImg" src={img2} alt="" />
                </Col>
                <Col lg={6} md={12} sm={12} className="p-2">
                  <h5>Van Cleef & Arpels</h5>
                  <p className="text-justify">
                    Van Cleef & Arpels' Alhambra motif has been a coveted status
                    symbol since its invention in 1968. This watch is the best
                    of both worlds: an elegant timepiece and stunning piece of
                    jewelry,
                  </p>

                  <a className="myButton" href="">
                    details
                  </a>
                </Col>
              </Row>
            </Col>
          </Row>

          {/* second cart design */}

          <Row>
            <Col lg={6} md={12} sm={12}>
              <Row>
                <Col lg={6} md={12} sm={12} className="p-2">
                  <img className="bestImg" src={img3} alt="" />
                </Col>
                <Col lg={6} md={12} sm={12} className="p-2">
                  <h5>Jaeger-LeCoultre</h5>
                  <p className="text-justify">
                    Established in 1833 in the Swiss Jura Mountains,
                    Jaeger-LeCoultre is known for its clever designs. One of its
                    most notable—and coveted—styles, the Reverso, features a
                    face that flips over to protect 
                    casing.
                  </p>

                  <a className="myButton" href="">
                    details
                  </a>
                </Col>
              </Row>
            </Col>
            <Col lg={6} md={12} sm={12}>
              <Row>
                <Col lg={6} md={12} sm={12} className="p-2">
                  <img className="bestImg" src={img4} alt="" />
                </Col>
                <Col lg={6} md={12} sm={12} className="p-2">
                  <h5>Audemars Piguet</h5>
                  <p className="text-justify">
                    Founded by childhood friends Jules-Louis Audemars and
                    Edward-Auguste Piguet in 1875, Audemars Piguet is most
                    collection, which since its debut in 1972, has become an
                    
                  </p>

                  <a className="myButton" href="">
                    details
                  </a>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
};

export default BestProduct;