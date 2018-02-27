import React from 'react';
import axios from 'axios';

import Header from './Header/Header.jsx';

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
      <div>
        { this.state.data &&
        <Header attr={this.state.data} />
        }
      </div>
    );
  }
}

window.Overview = Overview;
