import React from 'react';

import styles from './Photos.css';

const Photos = ({ photos }) => (
  <div className={styles.photos}>
    <div className={styles.main}>
      <img src={photos[0].url} alt="main" />
    </div>
    <div className={styles.column}>
      <div className={styles.sidePhoto}>
        <img src={photos[1].url} alt="main" />
      </div>
      <div className={[styles.sidePhoto, styles.mid].join(' ')}>
        <img src={photos[2].url} alt="main" />
      </div>
      <div className={styles.sidePhoto}>
        <img src={photos[3].url} alt="main" />
      </div>
    </div>
  </div>
);

export default Photos;
