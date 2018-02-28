import React from 'react';
import axios from 'axios';

import styles from './Overview.css';
import Header from '../Header/Header.jsx';
import Bookings from '../Bookings/Bookings.jsx';
import Photos from '../Photos/Photos.jsx';
import Body from '../Body/Body.jsx';

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
        <h1 className={styles.bodyTitle}>Overview</h1>
        { this.state.data &&
          <Body attr={this.state.data} rating={this.state.data.rating} />
        }
      </div>
    );
  }
}

window.Overview = Overview;
