import React from 'react';
import PropTypes from 'prop-types';

import styles from './RatingsChart.css';

const RatingsChart = ({ ratings }) => (
  <ul className={styles.chart}>
    <li className={styles.chartRow}>
      <span className={[styles.cell, styles.word].join(' ')} >Excellent</span>
      <span className={[styles.cell, styles.bar].join(' ')}>__centerbar__</span>
      <span className={[styles.cell, styles.num].join(' ')}>{ratings[0]}</span>
    </li>
    <li className={styles.chartRow}>
      <span className={[styles.cell, styles.word].join(' ')}>Very Good</span>
      <span className={[styles.cell, styles.bar].join(' ')}>__centerbar__</span>
      <span className={[styles.cell, styles.num].join(' ')}>{ratings[1]}</span>
    </li>
    <li className={styles.chartRow}>
      <span className={[styles.cell, styles.word].join(' ')}>Average</span>
      <span className={[styles.cell, styles.bar].join(' ')}>__centerbar__</span>
      <span className={[styles.cell, styles.num].join(' ')}>{ratings[2]}</span>
    </li>
    <li className={styles.chartRow}>
      <span className={[styles.cell, styles.word].join(' ')}>Poor</span>
      <span className={[styles.cell, styles.bar].join(' ')}>__centerbar__</span>
      <span className={[styles.cell, styles.num].join(' ')}>{ratings[3]}</span>
    </li>
    <li className={styles.chartRow}>
      <span className={[styles.cell, styles.word].join(' ')}>Terrible</span>
      <span className={[styles.cell, styles.bar].join(' ')}>__centerbar__</span>
      <span className={[styles.cell, styles.num].join(' ')}>{ratings[4]}</span>
    </li>
  </ul>
);

RatingsChart.propTypes = {
  ratings: PropTypes.array.isRequired,
};

export default RatingsChart;
  