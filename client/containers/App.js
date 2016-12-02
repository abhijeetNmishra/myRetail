import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Layout from '../components/Layout';

const App = (props) => {
  const browse = props.browse;
  const images = browse.Images[0];
  const promos = browse.Promotions;
  const price = browse.Offers[0].OfferPrice[0].formattedPriceValue;
  const title = browse.title;
  const returnPolicy = browse.ReturnPolicy;
  return (
    <Layout images={images} promos={promos} price={price} title={title} returnPolicy={returnPolicy} />
  );
};

function mapStateToProps(state) {
  return {
    browse: state.browse.browseData.CatalogEntryView[0]
  };
}

React.propTypes = {
  browse: React.PropTypes.object
};

export default connect(mapStateToProps)(App);
