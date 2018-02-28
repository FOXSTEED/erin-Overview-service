import React from 'react';
import PropTypes from 'prop-types';

import styles from './TalkAbout.css';

const TalkAbout = props => (
  <div>
    <div className={styles.title}>TRAVELERS TALK ABOUT</div>
    <div className={styles.keywords}>
      <div className={styles.keywordRow}>
        <div>image__</div>
        <div>
          <a>keyword1</a><span># of mentions</span>
        </div>
      </div>
      <div className={styles.keywordRow}>
        <div>image__</div>
        <div>
          <a>keyword2</a><span># of mentions</span>
        </div>
      </div>
      <div className={styles.keywordRow}>
        <div>image__</div>
        <div>
          <a>keyword3</a><span># of mentions</span>
        </div>
      </div>
    </div>
  </div>
);

TalkAbout.propTypes = {};

export default TalkAbout;
