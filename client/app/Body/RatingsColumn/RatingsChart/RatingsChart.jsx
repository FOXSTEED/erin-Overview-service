import React from 'react';
import PropTypes from 'prop-types';

import styles from './RatingsChart.css';

const RatingsChart = ({ ratings, reviews }) => {
  const ratingWords = ['Excellent', 'Very Good', 'Average', 'Poor', 'Terrible'];

  return (
    <ul className={styles.chart}>
      {ratings.map((rating, index) => (
        <ChartRow
          percentage={Math.floor((rating / reviews) * 100)}
          ratingWord={ratingWords[index]}
        />
      ))}
    </ul>
  );
};

const ChartRow = ({ percentage, ratingWord }) => (
  <li className={styles.chartRow}>
    <span className={[styles.cell, styles.word].join(' ')} >{ratingWord}</span>
    <span className={[styles.cell, styles.bar].join(' ')} ><span className={styles.fill} style={{ width: `${percentage}%` }} /></span>
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
};

export default RatingsChart;
