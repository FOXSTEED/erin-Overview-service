import React from 'react';
import PropTypes from 'prop-types';

import RatingsChart from './RatingsChart/RatingsChart.jsx';
import TalkAbout from './TalkAbout/TalkAbout.jsx';
import styles from './RatingsColumn.css';

const RatingsColumn = props => (
  <div className={[styles.column, styles.c1].join(' ')}>
    <div className={styles.ratingContainer}>
      <span className={styles.rating}>rating</span>
      <span>*Bubbles*</span>
      <a className={styles.reviews}>reviews num</a>
    </div>
    <RatingsChart />
    <TalkAbout />
  </div>
);

RatingsColumn.propTypes = {};

export default RatingsColumn;
