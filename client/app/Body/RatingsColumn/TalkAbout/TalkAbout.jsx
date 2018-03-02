import React from 'react';
import PropTypes from 'prop-types';

import styles from './TalkAbout.css';

const TalkAbout = ({ talkAbout }) => (
  <div>
    <div className={styles.title}>TRAVELERS TALK ABOUT</div>
    <div className={styles.keywords}>
      <div className={styles.keywordRow}>
        <img className={styles.user} src={talkAbout[0].avatar} alt="userPhoto" />
        <div className={styles.text}>
          <a className={styles.phrase}>"{talkAbout[0].phrase}"</a><span>({talkAbout[0].mentions} reviews)</span>
        </div>
      </div>
      <div className={styles.keywordRow}>
        <img className={styles.user} src={talkAbout[1].avatar} alt="userPhoto" />
        <div className={styles.text}>
          <a className={styles.phrase}>"{talkAbout[1].phrase}"</a><span>({talkAbout[1].mentions} reviews)</span>
        </div>
      </div>
      <div className={styles.keywordRow}>
        <img className={styles.user} src={talkAbout[2].avatar} alt="userPhoto" />
        <div className={styles.text}>
          <a className={styles.phrase}>"{talkAbout[2].phrase}"</a><span>({talkAbout[2].mentions} reviews)</span>
        </div>
      </div>
    </div>
  </div>
);

TalkAbout.propTypes = {
  talkAbout: PropTypes.array.isRequired,
};

export default TalkAbout;
