import React from 'react';
import PropTypes from 'prop-types';

import styles from './Header.css';
import Bubbles from '../Bubbles/Bubbles.jsx';

const Header = ({ attr }) => (
  <div className={styles.topContainer}>
    <h1>{attr.name}</h1>
    <div className={styles.row}>
      <div className={styles.bubbles} >
        <Bubbles rating={attr.rating} height={16} width={16} />
      </div>
      <div className={[styles.firstRowItem, styles.decor].join(' ')}>{attr.reviews} Reviews</div>
      <div className={styles.rowItem}>
        <span className={styles.bold}>#{attr.cityRating}</span> of {attr.cityAttractions} <span className={styles.decor}>things to do in {attr.address.split(',')[1]}</span>
      </div>
      <div className={styles.rowItem}>Category: <span className={styles.decor}>{attr.category}</span></div>
    </div>
    <div className={[styles.row, styles.secondRow].join(' ')}>
      <div className={[styles.firstRowItem, styles.decor].join(' ')}><span className={['glyphicon glyphicon-map-marker', styles.icon].join(' ')} />{attr.address}</div>
      <div className={styles.rowItem}><span className={['glyphicon glyphicon-earphone', styles.icon].join(' ')} />{attr.phone}</div>
      <div className={[styles.rowItem, styles.decor].join(' ')}><span className={['glyphicon glyphicon-globe', styles.icon].join(' ')} />Website</div>
      <div className={[styles.rowItem, styles.decor].join(' ')}><span className={['glyphicon glyphicon-envelope', styles.icon].join(' ')} />Email</div>
      <div className={styles.saveContainer}>
        <span className={['glyphicon glyphicon-heart-empty', styles.heart].join(' ')} />
        <div className={styles.save}>Save</div>
      </div>
    </div>
  </div>);

Header.propTypes = { attr: PropTypes.object.isRequired };

export default Header;

