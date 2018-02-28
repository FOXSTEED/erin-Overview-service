import React from 'react';
import PropTypes from 'prop-types';

import styles from './GeneralInfoColumn.css';

const GeneralInfoColumn = props => (
  <div className={styles.column}>
    <div className={styles.section}>
      <div>
        <span className={styles.clock}>**</span>
        <span className={styles.open}>OPEN?</span>
        <a>All Hours</a>
      </div>
      <div className={styles.hoursToday}>Hours Today: needs updating!</div>
      <div className={styles.duration}>
        <span className={styles.clock}>**</span>
        <span>Suggested Duration: X hours</span>
      </div>
    </div>
    <div className={[styles.section, styles.middle].join(' ')}>
      <div className={styles.title}>LOCATION</div>
      <div className={styles.addContainer}>
        <div className={styles.clock}>**</div>
        <div>Full address will be very long should go here make sure this text is long enough</div>
      </div>
    </div>
    <div className={styles.section}>Contact</div>
  </div>
);

GeneralInfoColumn.propTypes = {};

export default GeneralInfoColumn;
