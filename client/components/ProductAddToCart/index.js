import React from 'react';

const ProductAddToCart = (props) => {

  const handleClick = () => {
    console.log('added to cart');
  }

  return (
    <div className="row">
      <div className="col-md-6 col-xs-6 col-xl-6 col-sm-6 col-md-6">
        <button className="btn btn-primary pickupinstore">PICK UP IN STORE</button>
      </div>
      <div className="col-md-6 col-xs-6 col-xl-6 col-sm-6 col-md-6 start-xs">
        <button className="btn btn-primary" onClick={handleClick}>ADD TO CART</button>
      </div>
    </div>
  );
};

export default ProductAddToCart;
