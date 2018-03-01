import React from 'react';
import PropTypes from 'prop-types';

import Bubble from './Bubble.jsx';
import HalfBubble from './HalfBubble.jsx';
import EmptyBubble from './EmptyBubble.jsx';

const Bubbles = ({ rating }) => {
  const bubbles = [];
  let count = rating;
  let diff = 5 - Math.ceil(count);

  while (count > 0) {
    if (count === 0.5) {
      bubbles.push(<HalfBubble />);
      count -= 0.5;
    } else {
      bubbles.push(<Bubble />);
      count -= 1;
    }
  }

  while (diff > 0) {
    bubbles.push(<EmptyBubble />);
    diff -= 1;
  }
  return (
    <span>{bubbles}</span>
  );
};


Bubbles.propTypes = { rating: PropTypes.number.isRequired };

export default Bubbles;
