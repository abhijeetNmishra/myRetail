import React from 'react';
import StarRating from './ReactStarRating';

const formatDate = (date) => {
  const options = {
    weekday: 'long', year: 'numeric', month: 'short',
    day: 'numeric'
  };

  const d1 = new Date(date);
  return d1.toLocaleTimeString("en-us", options);
}

const RatingReviews = (props) => {
  const reviews = props.reviews;
  const pro = reviews.Pro[0];
  const con = reviews.Con[0];
  const proDate = formatDate(pro.datePosted);
  const conDate = formatDate(con.datePosted);
  return (
    <div className="row">
      <div className="col-xs-6">
        <StarRating name={"target star rating"} size={20} totalStars={5} rating={Number(reviews.consolidatedOverallRating)} />
        <span className="online-price"> overall</span>
        <div className="rating-review-box">
          <h2>PRO</h2>
          <span>most helpful 4-5 star review</span>
          <hr />
          <StarRating name={"target star rating"} size={10} totalStars={5} rating={Number(pro.overallRating)} />
          <h3>{pro.title}</h3> 
          <span>{pro.review}</span>
          <div className="row">
           <p>{pro.screenName} {proDate}</p>
          </div>
        </div>
      </div>
      <div className="col-xs-6">
        <span className="online-price"> view all {reviews.totalReviews} reviews</span>
        <div className="rating-review-box rating-review-box-right">
          <h2>CON</h2>
          <span>least helpful 1-2 star review</span>
          <hr />
          <div className="col-xs">
            <StarRating name={"target star rating"} size={10} totalStars={5} rating={Number(con.overallRating)} />
            <h3>{con.title}</h3>
            <span>{con.review}</span>
            <div className="row">
              <p>{con.screenName} {conDate}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RatingReviews;