import React from 'react';

const ProductImage = (props) => {
  const image = props.images;
  const primaryImage = image.PrimaryImage[0].image;
  return (
    <div className="row image-container">
      <img src={primaryImage} alt="primary" />
    </div>
  );
};

React.propTypes = {
  images: React.PropTypes.object
};

export default ProductImage;
