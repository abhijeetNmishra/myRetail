import React from 'react';

const ProductPrice = (props) => {
  return (
    <div className="row">
      <span className="online-price-value">{props.price}</span>
      <span className="online-price">online price</span>
    </div>
  );
};

ProductPrice.propTypes = {
  price: React.PropTypes.string
};

export default ProductPrice;
