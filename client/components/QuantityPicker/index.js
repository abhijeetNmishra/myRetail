import React from 'react';

export default class QuantityPicker extends React.Component {
  constructor(props) {
    super(props);
    this.state = { selectedValue: '1', decreaseBtn: true, increaseBtn: false };
    this.decreaseQty = this.decreaseQty.bind(this);
    this.increaseQty = this.increaseQty.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  decreaseQty() {
    const currentValue = Number(this.refs.qtyPicker.value);
    const newValue = currentValue - 1;
    if (newValue == 1) {
      this.setState({ selectedValue: newValue.toString(), increaseBtn: false, decreaseBtn: true });
    } else if (newValue > 1 && newValue <= 5) {
      this.setState({ selectedValue: newValue.toString(), increaseBtn: false, decreaseBtn: false });
    }
  }

  increaseQty() {
    const currentValue = Number(this.refs.qtyPicker.value);
    const newValue = currentValue + 1;
    if (newValue < 5 && newValue >= 2) {
      this.setState({ selectedValue: newValue.toString(), increaseBtn: false, decreaseBtn: false });
    } else if (newValue == 5) {
      this.setState({ selectedValue: newValue.toString(), increaseBtn: true, decreaseBtn: false });
    }
  }

  handleChange(e) {
    const dBtnState = Number(e.target.value) > 1 ? true : false;
    const iBtnState = Number(e.target.value) < 5 ? true : false;
    this.setState({ selectedValue: e.target.value, decreaseBtn: dBtnState, increaseBtn: iBtnState });
  }

  render() {
    return (
        <div className="row">
        <div className="col-xs-8 col-xl-8 col-md-8 col-sm-8 reactangular-row center-xs">
          <span className="qty-text">quantity: </span>
          <div className="quantitySelect">

            <button aria-label="decrease quantity (1)" ref="decreaseBtn" className="btn btn-sm qty-btn btn-icon-only btn-round btn-quant js-cart-qty-decrease" disabled={this.state.decreaseBtn} onClick={this.decreaseQty}>
              <svg className="icon-quant-minus" xmlns="http://www.w3.org/2000/svg" viewBox="-8 784 16 16"><path className="icon-fill" fill="#333" d="M-8 791H8v2H-8z" /></svg>
            </button>

            <div className="quantityDropdown quantityDropdown-cartItem">
              <select className="cart-quantity-picker" defaultValue={this.state.selectedValue} value={this.state.selectedValue} onChange={this.handleChange} ref="qtyPicker">
                <option value="1"> 1 </option>
                <option value="2"> 2 </option>
                <option value="3"> 3 </option>
                <option value="4"> 4 </option>
                <option value="5"> 5 </option>
              </select>
              <label className="quantityDropdown--label" htmlFor="cart-quantity-picker">
                <span className="quantityDropdown--value h-text-bold js-quantityDropdown-cartUpdate js-quantitySelect-value" id="qty-1a9e3661-b531-11e6-8b01-4bcc7db3e5bc" catid="" data-quantity="1" data-maxqty="99" aria-hidden="true">{this.state.selectedValue}</span>
                <svg className="quantityDropdown--arrow" xmlns="http://www.w3.org/2000/svg" fill="#333" viewBox="0 0 32 32"><path d="M16 25L0 9l2-2 14 14.063L30 7l2 2z" /></svg>
                <div className="quantityDropdown--text" aria-hidden="true">qty</div>
                <div className="h-sr-only">quantity is <div className="js-quantityDropdown-cartUpdate" aria-hidden="true">{this.state.selectedValue}</div></div>
              </label>
            </div>

            <button aria-label="increase quantity (1)" ref="increaseBtn" className="btn btn-sm qty-btn btn-icon-only btn-round btn-quant js-cart-qty-increase" disabled={this.state.increaseBtn} onClick={this.increaseQty}>
              <svg className="icon-quant-plus" xmlns="http://www.w3.org/2000/svg" viewBox="-8 784 16 16"><g className="icon-fill" fill="#333"><path d="M-8 791H8v2H-8z" /><path d="M-1 784h2v16h-2z" /></g></svg>
            </button>
          </div>
        </div>
        <div className="col-xs-4 col-xl-4 col-md-4 col-sm-4" />
      </div>
    )
  }
}
