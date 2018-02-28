import React from 'react';
import PropTypes from 'prop-types';

import styles from './GeneralInfoColumn.css';

const GeneralInfoColumn = ({ duration, address, phone }) => (
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
        <span>Suggested Duration: {duration}</span>
      </div>
    </div>
    <div className={[styles.section, styles.middle].join(' ')}>
      <div className={styles.title}>LOCATION</div>
      <div className={styles.addContainer}>
        <div className={styles.clock}>**</div>
        <div>{address}</div>
      </div>
    </div>
    <div className={styles.section}>
      <div className={styles.title}>CONTACT</div>
      <div className={styles.addContainer}>
        <div className={styles.clock}>**</div>
        <a className={styles.websiteBuff}>Website</a>
        <div className={styles.clock}>**</div>
        <div>{phone}</div>
      </div>
      <div className={styles.improve}>
        <a>Improve This Listing</a>
      </div>
    </div>
  </div>
);

GeneralInfoColumn.propTypes = {
  duration: PropTypes.string,
  address: PropTypes.string,
  phone: PropTypes.string,
};

export default GeneralInfoColumn;
