import React from 'react';
import axios from 'axios';

import styles from './Overview.css';
import Header from '../Header/Header.jsx';
import Bookings from '../Bookings/Bookings.jsx';
import Photos from '../Photos/Photos.jsx';

class Overview extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: null,
    };
  }

  componentDidMount() {
    // :id hardcoded at the moment
    axios.get('http://localhost:3002/attractions/0/overview')
      .then(res => this.setState({ data: res.data }))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className={styles.mainContainer}>
        <div>
          { this.state.data &&
          <Header attr={this.state.data} />
          }
        </div>
        <div className={styles.bookPhotoContainer}>
          <Bookings />
          <Photos />
        </div>
      </div>
    );
  }
}

window.Overview = Overview;
