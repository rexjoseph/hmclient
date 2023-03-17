import React from "react";
import "./ReviewItem.css"

const ReviewItem = ({ firstName, lastName, comment, rating, header, date }) => {
  return (
    <div className="p-reviewlist">
      <div className="p-review">
        <div className="p-review__1">
          <h3>{header}</h3>
          <div className="p-review__1-stars">
            <div className="rating">
              <span>
                <i className={rating >= 1 ? 'fa fa-star' : rating >= 0.5 ? 'fa fa-star-half-o' : 'fa fa-star-o'}></i>
              </span>
              <span>
                <i className={rating >= 2 ? 'fa fa-star' : rating >= 1.5 ? 'fa fa-star-half-o' : 'fa fa-star-o'}></i>
              </span>
              <span>
                <i className={rating >= 3 ? 'fa fa-star' : rating >= 2.5 ? 'fa fa-star-half-o' : 'fa fa-star-o'}></i>
              </span>
              <span>
                <i className={rating >= 4 ? 'fa fa-star' : rating >= 3.5 ? 'fa fa-star-half-o' : 'fa fa-star-o'}></i>
              </span>
              <span>
                <i className={rating >= 5 ? 'fa fa-star' : rating >= 4.5 ? 'fa fa-star-half-o' : 'fa fa-star-o'}></i>
              </span>
            </div>
          </div>
          <div className="p-review-comment">
            <p>{comment}</p>
          </div>
          <p className="review-date">
            {date}
          </p>
        </div>
        <div className="p-review__2">
          <div className="p-reviewcus">
            <div className="p-reviewcus__author">
              <p className="p-reviewcus__author-name">
                {firstName}&nbsp;{lastName}
              </p>
              <p className="p-reviewcus__author-verified">Verified Buyer</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewItem;
