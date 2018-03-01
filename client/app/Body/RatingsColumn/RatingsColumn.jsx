import React from 'react';
import PropTypes from 'prop-types';

import RatingsChart from './RatingsChart/RatingsChart.jsx';
import TalkAbout from './TalkAbout/TalkAbout.jsx';
import styles from './RatingsColumn.css';

const RatingsColumn = ({ ratings, rating, reviews, talkAbout }) => (
  <div className={[styles.column, styles.c1].join(' ')}>
    <div className={styles.ratingContainer}>
      <span className={styles.rating}>{rating}</span>
      <span>*Bubbles*</span>
      <a className={styles.reviews}>{reviews}</a>
    </div>
    <RatingsChart ratings={ratings} reviews={reviews} />
    <TalkAbout talkAbout={talkAbout} />
  </div>
);

RatingsColumn.propTypes = {
  ratings: PropTypes.array.isRequired,
  rating: PropTypes.number.isRequired,
  reviews: PropTypes.number.isRequired,
  talkAbout: PropTypes.array.isRequired,
};

export default RatingsColumn;
