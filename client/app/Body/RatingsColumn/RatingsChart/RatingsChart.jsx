import React from 'react';
import PropTypes from 'prop-types';

import styles from './RatingsChart.css';

const RatingsChart = ({ ratings, reviews }) => (
  <ul className={styles.chart}>
    <li className={styles.chartRow}>
      <span className={[styles.cell, styles.word].join(' ')} >Excellent</span>
      <span className={[styles.cell, styles.bar].join(' ')} ><span className={styles.fill} /></span>
      <span className={[styles.cell, styles.num].join(' ')}>{Math.floor((ratings[0] / reviews) * 100)}%</span>
    </li>
    <li className={styles.chartRow}>
      <span className={[styles.cell, styles.word].join(' ')}>Very Good</span>
      <span className={[styles.cell, styles.bar].join(' ')} ><span className={styles.fill} /></span>
      <span className={[styles.cell, styles.num].join(' ')}>{Math.floor((ratings[1] / reviews) * 100)}%</span>
    </li>
    <li className={styles.chartRow}>
      <span className={[styles.cell, styles.word].join(' ')}>Average</span>
      <span className={[styles.cell, styles.bar].join(' ')} ><span className={styles.fill} /></span>
      <span className={[styles.cell, styles.num].join(' ')}>{Math.floor((ratings[2] / reviews) * 100)}%</span>
    </li>
    <li className={styles.chartRow}>
      <span className={[styles.cell, styles.word].join(' ')}>Poor</span>
      <span className={[styles.cell, styles.bar].join(' ')} ><span className={styles.fill} /></span>
      <span className={[styles.cell, styles.num].join(' ')}>{Math.floor((ratings[3] / reviews) * 100)}%</span>
    </li>
    <li className={styles.chartRow}>
      <span className={[styles.cell, styles.word].join(' ')}>Terrible</span>
      <span className={[styles.cell, styles.bar].join(' ')} ><span className={styles.fill} /></span>
      <span className={[styles.cell, styles.num].join(' ')}>{Math.floor((ratings[4] / reviews) * 100)}%</span>
    </li>
  </ul>
);

RatingsChart.propTypes = {
  ratings: PropTypes.array.isRequired,
  reviews: PropTypes.number.isRequired,
};

export default RatingsChart;
  