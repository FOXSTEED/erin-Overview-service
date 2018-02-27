import React from 'react';
import PropTypes from 'prop-types';

const Header = props => (
  <div>
    <h1>{props.attr.name}</h1>
    <div>{props.attr.description}</div>
  </div>);

// this is kind of a hack, should be updated later:
Header.propTypes = { attr: PropTypes.shape.isRequired };

export default Header;

