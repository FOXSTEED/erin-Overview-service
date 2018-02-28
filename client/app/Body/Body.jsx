import React from 'react';
import PropTypes from 'prop-types';

import styles from './Body.css';
import RatingsChart from '../RatingsChart/RatingsChart.jsx';

const Body = ({ attr, rating }) => (
  <div className={styles.mainContainer}>
    <div className={styles.infoContainer}>
      <div className={styles.desc}>{attr.description} NOTE: MAKE THESE LONGER</div>
      <div className={styles.subContainer}>

        <div className={[styles.column, styles.c1].join(' ')}>
          <div className={styles.ratingContainer}>
            <span className={styles.rating}>{rating}</span>
            <span>*Bubbles*</span>
            <a className={styles.reviews}>{attr.reviews}</a>
          </div>

          <RatingsChart />

          <div className={styles.talkAbout}>TRAVELERS TALK ABOUT</div>
          <div className={styles.keywords}>
            <div className={styles.keywordRow}>
              <div>image__</div>
              <div>
                <a>keyword1</a><span># of mentions</span>
              </div>
            </div>
            <div className={styles.keywordRow}>
              <div>image__</div>
              <div>
                <a>keyword2</a><span># of mentions</span>
              </div>
            </div>
            <div className={styles.keywordRow}>
              <div>image__</div>
              <div>
                <a>keyword3</a><span># of mentions</span>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.column}>
          <div className={styles.section}>Hours</div>
          <div className={styles.section}>Location</div>
          <div className={styles.section}>Contact</div>
        </div>
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
