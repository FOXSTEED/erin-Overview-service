import React from 'react';
import PropTypes from 'prop-types';

import bubble from './bubble.jsx';
import halfbubble from './halfbubble.jsx';
import emptybubble from './emptybubble.jsx';

const Bubbles = ({ rating }) => {
  const bubbles = [];


  return (
    <span>{bubbles}</span>
  );
};

Bubbles.propTypes = { rating: PropTypes.number.isRequired };

export default Bubbles;

