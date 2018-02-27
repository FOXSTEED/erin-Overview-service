import React from 'react';

import styles from './Body.css';

const Body = props => (
  <div className={styles.mainContainer}>
    <div className={styles.infoContainer}>Text</div>
    <div className={styles.mapContainer}>Map</div>
  </div>
);

export default Body;