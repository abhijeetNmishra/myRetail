import React from 'react';

const QuantityPicker = (props) => {
  return (
    <div className="row">
      <div className="col-xs-8 col-xl-8 col-md-8 col-sm-8 reactangular-row center-xs">
        <span className="qty-text">quantity: </span>
        <div className="quantitySelect">

          <button aria-label="decrease quantity (1)" className="btn btn-sm qty-btn btn-icon-only btn-round btn-quant js-cart-qty-decrease" disabled="">
            <svg className="icon-quant-minus" xmlns="http://www.w3.org/2000/svg" viewBox="-8 784 16 16"><path className="icon-fill" fill="#333" d="M-8 791H8v2H-8z" /></svg>
          </button>

          <div className="quantityDropdown quantityDropdown-cartItem">
            <select className="cart-quantity-picker">
              <option value="1" selected="selected"> 1 </option>
              <option value="2"> 2 </option>
              <option value="3"> 3 </option>
              <option value="4"> 4 </option>
              <option value="5"> 5 </option>
            </select>
            <label className="quantityDropdown--label" htmlFor="cart-quantity-picker">
              <span className="quantityDropdown--value h-text-bold js-quantityDropdown-cartUpdate js-quantitySelect-value" id="qty-1a9e3661-b531-11e6-8b01-4bcc7db3e5bc" catid="" data-quantity="1" data-maxqty="99" aria-hidden="true">1</span>
              <svg className="quantityDropdown--arrow" xmlns="http://www.w3.org/2000/svg" fill="#333" viewBox="0 0 32 32"><path d="M16 25L0 9l2-2 14 14.063L30 7l2 2z" /></svg>
              <div className="quantityDropdown--text" aria-hidden="true">qty</div>
              <div className="h-sr-only">quantity is <div className="js-quantityDropdown-cartUpdate" aria-hidden="true">1</div></div>
            </label>
          </div>

          <button aria-label="increase quantity (1)" className="btn btn-sm qty-btn btn-icon-only btn-round btn-quant js-cart-qty-increase">
            <svg className="icon-quant-plus" xmlns="http://www.w3.org/2000/svg" viewBox="-8 784 16 16"><g className="icon-fill" fill="#333"><path d="M-8 791H8v2H-8z" /><path d="M-1 784h2v16h-2z" /></g></svg>
          </button>
        </div>
      </div>
      <div className="col-xs-4 col-xl-4 col-md-4 col-sm-4" />
    </div>
  );
};

export default QuantityPicker;
