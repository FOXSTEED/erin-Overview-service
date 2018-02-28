import React from 'react';
import PropTypes from 'prop-types';

import styles from './GeneralInfoColumn.css';

const GeneralInfoColumn = props => (
  <div className={styles.column}>
    <div className={styles.section}>Hours</div>
    <div className={styles.section}>Location</div>
    <div className={styles.section}>Contact</div>
  </div>
);

GeneralInfoColumn.propTypes = {};

export default GeneralInfoColumn;
