import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

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
      currentlyOpen: null,
      id: props.id,
    };

    this.determineIfOpen = this.determineIfOpen.bind(this);
  }

  componentDidMount() {
    // :id hardcoded at the moment
    axios.get(`http://localhost:3002/attractions/${this.state.id}/overview`)
      .then(res => this.setState({ data: res.data }, () => {
        this.determineIfOpen(this.state.data.opens, this.state.data.closes);
      }))
      .catch(err => console.log(err));
  }

  determineIfOpen(opens, closes) {
    // get current time
    const date = new Date();
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
