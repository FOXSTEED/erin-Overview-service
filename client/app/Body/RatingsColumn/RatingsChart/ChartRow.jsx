import React from 'react';
import PropTypes from 'prop-types';

import styles from './ChartRow.css';

const ChartRow = ({ percentage, ratingWord, max }) => (
  <li className={styles.chartRow}>
    <span className={[styles.cell, styles.word].join(' ')} style={max ? { color: '#00a680' } : {}}>{ratingWord}</span>
    <span className={[styles.cell, styles.bar].join(' ')}><span className={[styles.fill, percentage].join(' ')} style={{ width: `${percentage}%` }} /></span>
    <span className={[styles.cell, styles.num].join(' ')}>{percentage}%</span>
  </li>
);

ChartRow.propTypes = {
  percentage: PropTypes.number.isRequired,
  ratingWord: PropTypes.string.isRequired,
  max: PropTypes.bool,
};

export default ChartRow;
