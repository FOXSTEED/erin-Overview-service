import React from 'react';
import PropTypes from 'prop-types';

import styles from './Header.css';

const Header = props => (
  <div>
    <h1>{props.attr.name}</h1>
    <div className={styles.test}>{props.attr.description}</div>
  </div>);

Header.propTypes = { attr: PropTypes.object.isRequired };

export default Header;

