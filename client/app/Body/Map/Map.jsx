import React from 'react';
import PropTypes from 'prop-types';

import map from './maps_api_key.js';
import styles from './Map.css';

const Map = ({ location }) => (
  <iframe
    className={styles.map}
    title="map"
    frameBorder="0"
    src={`https://www.google.com/maps/embed/v1/place?key=${map.key}&q=${location}`}
  />
);

Map.propTypes = {
  location: PropTypes.string.isRequired,
};

export default Map;
