import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

import styles from './Overview.css';
import Header from '../Header/Header.jsx';
import Bookings from '../Bookings/Bookings.jsx';
import Photos from '../Photos/Photos.jsx';
import Body from '../Body/Body.jsx';

export default class Overview extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: null,
      currentlyOpen: null,
    };

    this.determineIfOpen = this.determineIfOpen.bind(this);
  }

  componentDidMount() {
    return axios.get(`${window.location.origin}/overview/${this.props.id}`)
      .then(res => this.setState({ data: res.data }, () => {
        console.log('This is your data: ', this.state.data)
        this.determineIfOpen(this.state.data.opens, this.state.data.closes, new Date());
      }))
      .catch(err => console.log('get Req Error: ', err));
  }

  determineIfOpen(opens, closes, date) {
    // get current time
    const time = date.getHours();
    const closesMilitaryTime = closes + 12;
    // check if in range
    if (time >= opens && time < closesMilitaryTime) {
      // if so, true
      this.setState({ currentlyOpen: true });
    } else {
      // if not false
      this.setState({ currentlyOpen: false });
    }
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
          {this.state.data &&
          <Photos photos={this.state.data.photos} />
          }
        </div>
        <h1 className={styles.bodyTitle}>Overview</h1>
        { this.state.data &&
          <Body
            attr={this.state.data}
            rating={this.state.data.rating}
            open={this.state.currentlyOpen}
          />
        }
      </div>
    );
  }
}

Overview.propTypes = {
  id: PropTypes.number.isRequired,
};

