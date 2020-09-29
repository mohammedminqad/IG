import React from 'react';
import PropTypes from 'prop-types';

import { Col, Panel } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Product(props) {
  let {
    product
  } = props;

  return (
    <Col
      lg={3}
      md={4}
      sm={6}>
      <Panel className="product">
        <div className="product-img-wrapper">
          <a href="#">
            <img
              alt={product.download_url}
              className="img-responsive product-img"
              src={product.download_url} />
          </a>
        </div>

        <h4
          className="ellipsis"
          title={product.author}>
            {product.author}
        </h4>

        <h5
          className="ellipsis product-brand-name"
          title={product.brand_name}>
          {`${product.width}x${product.height}`}
        </h5>

        <div>{product.download_url}</div>
      </Panel>
    </Col>
  );
}

Product.propTypes = {
  product: PropTypes.object.isRequired
};

export default Product;