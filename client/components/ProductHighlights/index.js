import React from 'react';

const ProductHighlights = (props) => {

  const createMarkup = (html) => {
    return {__html: html};
  } 

  const highlightList = props.productHighlights.map((item, index) => {
    return (
      <li key={index} className="highlight-list">
        <span dangerouslySetInnerHTML={createMarkup(item)}></span>
      </li>
    );
  });

  return (
    <div className="row">
     <h1>product highlights</h1>
     <ul>
      {highlightList}
     </ul>
    </div>
  );
};

export default ProductHighlights;
