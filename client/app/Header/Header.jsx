import React from 'react';
import PropTypes from 'prop-types';

const Header = props => (
  <div>
    <h1>{props.attr.name}</h1>
    <div>{props.attr.description}</div>
  </div>);

Header.propTypes = { attr: PropTypes.object.isRequired };

export default Header;

