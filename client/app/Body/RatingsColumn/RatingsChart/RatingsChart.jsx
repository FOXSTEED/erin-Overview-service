import React from 'react';
import PropTypes from 'prop-types';

import styles from './RatingsChart.css';
import ChartRow from './ChartRow.jsx';

const RatingsChart = ({ ratings, reviews }) => {
  const ratingWords = ['Excellent', 'Very Good', 'Average', 'Poor', 'Terrible'];
  let max = 0;
  let indexOfMax = null;

  ratings.forEach((rating, i) => {
    if (rating > max) {
      max = rating;
      indexOfMax = i;
    }
  });

  return (
    <ul className={styles.chart}>
      {ratings.map((rating, index) => (
        <ChartRow
          percentage={Math.floor((rating / reviews) * 100)}
          ratingWord={ratingWords[index]}
          max={index === indexOfMax}
          key={ratingWords[index]}
        />
      ))}
    </ul>
  );
};

RatingsChart.propTypes = {
  ratings: PropTypes.array.isRequired,
  reviews: PropTypes.number.isRequired,
};

export default RatingsChart;
