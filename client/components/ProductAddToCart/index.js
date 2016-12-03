import React from 'react';
const ReactToastr = require("react-toastr");

const ToastContainer = ReactToastr.ToastContainer;
const ToastMessageFactory = React.createFactory(ReactToastr.ToastMessage.animation);

export default class ProductAddToCart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handlePickupInStore = this.handlePickupInStore.bind(this);
    this.handleAddToCart = this.handleAddToCart.bind(this);
  }

  handlePickupInStore() {
    this.refs.container.success(
      "Added to cart as pick up in store item !! ",
      "", {
      timeOut: 2000
    });
  }

  handleAddToCart() {
    this.refs.container.success(
      "Added to cart !! ",
      "", {
      timeOut: 2000
    });
  }

  render() {
    return (
      <div className="row">
        <ToastContainer ref="container"
                          toastMessageFactory={ToastMessageFactory}
                          className="toast-top-right" />
        <div className="col-md-6 col-xs-6 col-xl-6 col-sm-6 col-md-6">
          <button className="btn btn-primary pickupinstore" onClick={this.handlePickupInStore}>PICK UP IN STORE</button>
        </div>
        <div className="col-md-6 col-xs-6 col-xl-6 col-sm-6 col-md-6 start-xs">
          <button className="btn btn-primary" onClick={this.handleAddToCart}>ADD TO CART</button>
        </div>
      </div>
    )
  }
}
