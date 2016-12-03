import React from 'react';
import ProductTitle from '../ProductTitle';
import ProductImage from '../ProductImage';
import ProductPrice from '../ProductPrice';
import ProductPromo from '../ProductPromo';
import QuantityPicker from '../QuantityPicker';
import ProductAddToCart from '../ProductAddToCart';
import ProductDisclaimers from '../ProductDisclaimers';
import RegistryListShare from '../RegistryListShare';
import ProductHighlights from '../ProductHighlights';
import ProductFilmStrip from '../ProductFilmStrip';
import RatingReviews from '../RatingReviews';

const Layout = (props) => {
  return (
    <div className="row row-margin">
      <div className="col-xs-12 col-md-6 col-lg-8 col-xl-8 middle-xs">
        <ProductTitle title={props.title} />
        <ProductImage images={props.images}/>
        <br />
        <ProductFilmStrip increment="350" images={props.images} />
        <br />
        <RatingReviews reviews={props.reviews} />
      </div>
      <div className="col-xs-12 col-md-6 col-lg-4 col-xl-4">
        <ProductPrice price={props.price} />
        <hr />
        <ProductPromo promos={props.promos} />
        <hr />
        <QuantityPicker />
        <br />
        <ProductAddToCart />
        <br />
        <ProductDisclaimers returnpolicy={props.returnPolicy} />
        <br />
        <RegistryListShare />
        <br />
        <ProductHighlights productHighlights={props.productHighlights} />
      </div>
    </div>
  );
};

React.propTypes = {
  title: React.PropTypes.string,
  price: React.PropTypes.string,
  promos: React.PropTypes.object,
  images: React.PropTypes.object
};

export default Layout;
