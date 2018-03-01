import React from 'react';
import PropTypes from 'prop-types';

import Bubble from './Bubble.jsx';
import HalfBubble from './HalfBubble.jsx';
import EmptyBubble from './EmptyBubble.jsx';

const Bubbles = ({ rating, height, width }) => {
  const bubbles = [];
  let count = rating;
  let diff = 5 - Math.ceil(count);

  while (count > 0) {
    if (count === 0.5) {
      bubbles.push(<HalfBubble height={height} width={width} />);
      count -= 0.5;
    } else {
      bubbles.push(<Bubble height={height} width={width} />);
      count -= 1;
    }
  }

  while (diff > 0) {
    bubbles.push(<EmptyBubble height={height} width={width} />);
    diff -= 1;
  }
  return (
    <span>{bubbles}</span>
  );
};


Bubbles.propTypes = { 
  rating: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
 };

export default Bubbles;
