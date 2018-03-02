import React from 'react';
import PropTypes from 'prop-types';

import styles from './GeneralInfoColumn.css';

const GeneralInfoColumn = ({ duration, address, phone, opens, closes, open }) => (
  <div className={styles.column}>
    <div className={styles.section}>
      <div>
        {open ? <span className={['glyphicon glyphicon-time', styles.icon].join(' ')} />
        : <span className={['glyphicon glyphicon-time', styles.icon, styles.closed].join(' ')} />}
        {open ? <span className={styles.open}>Open</span>
        : <span className={styles.open}>Closed</span>}
        <a>All Hours</a>
      </div>
      <div className={styles.hoursToday}>Hours Today: {opens}am - {closes}pm</div>
      <div className={styles.duration}>
        <span className={['glyphicon glyphicon-refresh', styles.icon].join(' ')} />
        <span>Suggested Duration: {duration}</span>
      </div>
    </div>
    <div className={[styles.section, styles.middle].join(' ')}>
      <div className={styles.title}>LOCATION</div>
      <div className={styles.addContainer}>
        <span className={['glyphicon glyphicon-map-marker', styles.icon].join(' ')} />
        <div>{address}</div>
      </div>
    </div>
    <div className={styles.section}>
      <div className={styles.title}>CONTACT</div>
      <div className={styles.addContainer}>
        <span className={['glyphicon glyphicon-globe', styles.icon].join(' ')} />
        <a className={styles.websiteBuff}>Website</a>
        <span className={['glyphicon glyphicon-earphone', styles.icon].join(' ')} />
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
  opens: PropTypes.number,
  closes: PropTypes.number,
};

export default GeneralInfoColumn;
