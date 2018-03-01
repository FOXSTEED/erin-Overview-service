import React from 'react';
import PropTypes from 'prop-types';

import styles from './Body.css';
import RatingsColumn from './RatingsColumn/RatingsColumn.jsx';
import GeneralInfoColumn from './GeneralInfoColumn/GeneralInfoColumn.jsx';
import Map from './Map/Map.jsx';


const Body = ({ attr, rating }) => (
  <div className={styles.mainContainer}>

    <div className={styles.infoContainer}>
      <div className={styles.desc}>{attr.description} NOTE: MAKE THESE LONGER</div>
      <div className={styles.colContainer}>
        <RatingsColumn
          rating={rating}
          reviews={attr.reviews}
          ratings={attr.ratingBreakdowns}
          talkAbout={attr.pplTalkAbout}
        />
        <GeneralInfoColumn
          duration={attr.duration}
          address={attr.address}
          phone={attr.phone}
          opens={attr.opens}
          closes={attr.closes}
        />
      </div>
    </div>

    <div className={styles.mapContainer}>
      <Map />
    </div>

  </div>
);

Body.propTypes = {
  attr: PropTypes.object.isRequired,
  rating: PropTypes.number.isRequired,
};

export default Body;
