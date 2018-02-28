import React from 'react';
import PropTypes from 'prop-types';

import styles from './RatingsChart.css';

const RatingsChart = props => (
  <ul className={styles.chart}>
    <li className={styles.chartRow}>
      <span className={[styles.cell, styles.word].join(' ')} >Excellent</span>
      <span className={[styles.cell, styles.bar].join(' ')}>__centerbar__</span>
      <span className={[styles.cell, styles.num].join(' ')}>Num</span>
    </li>
    <li className={styles.chartRow}>
      <span className={[styles.cell, styles.word].join(' ')}>Very Good</span>
      <span className={[styles.cell, styles.bar].join(' ')}>__centerbar__</span>
      <span className={[styles.cell, styles.num].join(' ')}>Num</span>
    </li>
    <li className={styles.chartRow}>
      <span className={[styles.cell, styles.word].join(' ')}>Average</span>
      <span className={[styles.cell, styles.bar].join(' ')}>__centerbar__</span>
      <span className={[styles.cell, styles.num].join(' ')}>Num</span>
    </li>
    <li className={styles.chartRow}>
      <span className={[styles.cell, styles.word].join(' ')}>Poor</span>
      <span className={[styles.cell, styles.bar].join(' ')}>__centerbar__</span>
      <span className={[styles.cell, styles.num].join(' ')}>Num</span>
    </li>
    <li className={styles.chartRow}>
      <span className={[styles.cell, styles.word].join(' ')}>Terrible</span>
      <span className={[styles.cell, styles.bar].join(' ')}>__centerbar__</span>
      <span className={[styles.cell, styles.num].join(' ')}>Num</span>
    </li>
  </ul>
);

RatingsChart.propTypes = {};

export default RatingsChart;
  