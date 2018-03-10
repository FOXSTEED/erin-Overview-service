import React from 'react';
import PropTypes from 'prop-types';

import styles from './Map.css';

const { OVERVIEW_GOOGLE_MAPS_API_KEY } = process.env;

const Map = ({ location }) => (
  <iframe
    className={styles.map}
    title="map"
    frameBorder="0"
    src={`https://www.google.com/maps/embed/v1/place?key=${OVERVIEW_GOOGLE_MAPS_API_KEY}&q=${location}`}
  />
);

Map.propTypes = {
  location: PropTypes.string.isRequired,
};

export default Map;
