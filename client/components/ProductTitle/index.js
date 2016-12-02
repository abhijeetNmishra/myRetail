import React from 'react';

const ProductTitle = (props) => {
  return (
    <div className="row h-text-center">
      <h2 className="title-product">
        <span>{props.title}</span>
        <span className="h-sr-only" aria-hidden="true">{props.title}</span>
      </h2>
    </div>
  );
};

React.propTypes = {
  title: React.PropTypes.string
};

export default ProductTitle;
