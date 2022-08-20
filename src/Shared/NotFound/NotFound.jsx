import React from 'react';
import ErrorPage from './ErrorPage.jsx';

const NotFound = () => {
    return (
      <div style={{ width: "350px", margin: "20px auto" }}>
        <ErrorPage></ErrorPage>
        <p style={{ color: "purple" }} className="text-center fw-bold">
          Oops!! page not found 404!!
        </p>
      </div>
    );
};

export default NotFound;