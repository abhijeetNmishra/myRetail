import React from 'react';
const ReactToastr = require("react-toastr");

const ToastContainer = ReactToastr.ToastContainer;
const ToastMessageFactory = React.createFactory(ReactToastr.ToastMessage.animation);

export default class RegistryListShare extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleRegistryClick = this.handleRegistryClick.bind(this);
    this.handleShareClick = this.handleShareClick.bind(this);
    this.handleAddToListClick = this.handleAddToListClick.bind(this);
  }

  handleRegistryClick() {
    this.refs.container.success(
      "Added to registry !! ",
      "", {
      timeOut: 2000
    });
  }

  handleShareClick() {
    this.refs.container.success(
      "shared on Facebook and twitter !! ",
      "", {
      timeOut: 2000
    });
  }

  handleAddToListClick() {
    this.refs.container.success(
      "Added to List !! ",
      "", {
      timeOut: 2000
    });
  }

  render() {
    return (
      <div className="row registry-list-share">
      <ToastContainer ref="container"
                          toastMessageFactory={ToastMessageFactory}
                          className="toast-top-right" />
     <button className="btn btn-secondary btn-sm" onClick={this.handleRegistryClick}>ADD TO REGISTRY</button>
     <button className="btn btn-secondary btn-sm" onClick={this.handleAddToListClick}>ADD TO LIST</button>
     <button className="btn btn-secondary btn-sm" onClick={this.handleShareClick}>SHARE</button>
    </div>
    )
  }
}
