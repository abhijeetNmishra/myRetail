import React, { Component, PropTypes } from 'react';
import { Provider } from 'react-redux';
import createRoutes from './routes';

/* eslint-disable react/prefer-stateless-function */
export default class Root extends Component {
  render() {
    return (
      <Provider store={this.props.store}>
        { createRoutes(this.props.history) }
      </Provider>
    );
  }
}

/* eslint-disable react/forbid-prop-types */
Root.propTypes = {
  store: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
};
