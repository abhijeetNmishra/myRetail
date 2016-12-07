import React from 'react';

const ProductPromo = (props) => {
  const promos = props.promos;
  const promosElem = promos.map((promo, index) => {
    return (
      <div key={index} className="promo promo-PDP">
        <span className="promo--text h-text-red">{promo.promotionType}</span>
      </div>
    );
  });
  return (
    <div className="row">
      {promosElem}
    </div>
  );
};

ProductPromo.propTypes = {
  promos: React.PropTypes.Array
};

export default ProductPromo;
