import React from 'react';

const ProductDisclaimers = (props) => {
  console.log(props)
  const disclaimer = props.returnpolicy[0].legalCopy;

  const createMarkup = (html) => {
    return {__html: html};
  }

  return (
    <div className="row disclaimers">
      <div className="col-xs-3">
        <span>returns </span>
        <span className="disclaimers-shape"></span>
      </div>
      <div className="col-xs-9 disclaimers-text">
        <span>The item must be returned within 30 days of the sip date. See return policy for details.
              Price, Promotions, styles and availability may vary by store and online.
        </span>
      </div>
    </div>
  );
};

export default ProductDisclaimers;
