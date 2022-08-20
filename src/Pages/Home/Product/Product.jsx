import React, { Fragment } from 'react';
import { Container, Row } from 'react-bootstrap';
import watchProduct from '../../../Hooks/watchProduct.jsx';
import Watch from '../Watch/Watch.jsx';
import Loading from "../../../Shared/Loading/Loading.jsx";

const Product = () => {
    const [watchs, setWatch] = watchProduct();
   
    if (watchs.length === 0) {
      return <Loading></Loading>
    } 
    return (
      <Fragment>
        <Container>
          <h2 className="text-center p-5">Top 6 Watch Brand Collection</h2>
          <Row>
            {watchs.slice(0,6).map((watch) => (
              <Watch key={watch.id} watch={watch}></Watch>
            ))}
          </Row>
        </Container>
      </Fragment>
    );
};

export default Product;