import React, { Fragment } from 'react';
import { Container, Row } from 'react-bootstrap';
import WatchProduct from '../../Hooks/watchProduct.jsx';
import Expo from './Expo.jsx';

const Explore = () => {
    const [watchs, setWatch] = WatchProduct() 
    console.log(watchs);
    return (
      <Fragment>
        <Container>
          <h2 className="text-center p-5">Top 6 Watch Brand Collection</h2>
          <Row>
            {watchs.map((watch) => (
              <Expo key={watch.id} watch={watch}></Expo>
            ))}
          </Row>
        </Container>
      </Fragment>
    );
};

export default Explore;