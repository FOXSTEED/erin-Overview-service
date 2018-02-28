import React from 'react';
import PropTypes from 'prop-types';

import styles from './Body.css';

const Body = ({ attr, rating }) => (
  <div className={styles.mainContainer}>
    <div className={styles.infoContainer}>
      <div className={styles.desc}>{attr.description} NOTE: MAKE THESE LONGER</div>
      <div className={styles.subContainer}>

        <div className={styles.column}>
          <div>
            <span>{rating}</span><span>Bubbles</span><span>{attr.reviews}</span>
          </div>
        </div>

        <div className={styles.column}>Text</div>
      </div>
    </div>
    <div className={styles.mapContainer}>Map</div>
  </div>
);

Body.propTypes = {
  attr: PropTypes.object.isRequired,
  rating: PropTypes.number.isRequired,
};

export default Body;
