import React from "react";

const Tour = ({
  country,
  title,
  length,
  guests,
  guides,
  feature,
  featurette,
  price,
}) => {
  return (
    <div className="card">
      <div className="card__side card__side--front">
        <div className={`card__picture card__picture--${country}`}>&nbsp;</div>
        <h4 className="card__heading">
          <span className={`card__heading-span card__heading-span--${country}`}>
            {title}
          </span>
        </h4>
        <div className="card__details">
          <ul>
            <li>{length}</li>
            <li>{guests}</li>
            <li>{guides}</li>
            <li>{feature}</li>
            <li>{featurette}</li>
          </ul>
        </div>
      </div>
      <div
        className={`card__side card__side--back card__side--back-${country}`}
      >
        <div className="card__cta">
          <div className="card__price-box">
            <p className="card__price-only">Only</p>
            <p className="card__price-value">${price}*</p>
          </div>
          <a href="#popup" className="btn btn--white">
            Book now!
          </a>
        </div>
      </div>
    </div>
  );
};

export default Tour;
