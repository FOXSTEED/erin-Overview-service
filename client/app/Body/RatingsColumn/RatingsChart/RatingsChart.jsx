import React from 'react';
import PropTypes from 'prop-types';

import styles from './RatingsChart.css';

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
        />
      ))}
    </ul>
  );
};

const ChartRow = ({ percentage, ratingWord, max }) => (
  <li className={styles.chartRow}>
    <span className={[styles.cell, styles.word].join(' ')} style={max ? { color: '#00a680' } : {}}>{ratingWord}</span>
    <span className={[styles.cell, styles.bar].join(' ')}><span className={styles.fill} style={{ width: `${percentage}%` }} /></span>
    <span className={[styles.cell, styles.num].join(' ')}>{percentage}%</span>
  </li>
);

RatingsChart.propTypes = {
  ratings: PropTypes.array.isRequired,
  reviews: PropTypes.number.isRequired,
};

ChartRow.propTypes = {
  percentage: PropTypes.number.isRequired,
  ratingWord: PropTypes.string.isRequired,
  max: PropTypes.bool,
};

export default RatingsChart;
