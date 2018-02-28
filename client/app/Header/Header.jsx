import React from 'react';
import PropTypes from 'prop-types';

import styles from './Header.css';

const Header = ({ attr }) => (
  <div className={styles.topContainer}>
    <h1>{attr.name}</h1>
    <div className={styles.row}>
      <div className={styles.firstRowItem} >**Bubbles**</div>
      <div className={styles.rowItem}>{attr.reviews} Reviews</div>
      <div className={styles.rowItem}>#{attr.cityRating} of {attr.cityAttractions} things to do in {attr.address.split(',')[1]}</div>
      <div className={styles.rowItem}>{attr.category}</div>
    </div>
    <div className={styles.row}>
      <div className={styles.firstRowItem}>{attr.address}</div>
      <div className={styles.rowItem}>{attr.phone}</div>
      <div className={styles.rowItem}>Website</div>
      <div className={styles.rowItem}>Email</div>
      <div className={styles.saveContainer}>
        <div>*heart btn*</div>
        <div>Save</div>
      </div>
    </div>
  </div>);

Header.propTypes = { attr: PropTypes.object.isRequired };

export default Header;

