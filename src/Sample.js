import React from 'react';

import axios from 'axios';

export default class Sample extends React.Component {
  state = {
    persons: []
  }

  componentDidMount() {
    axios.get(`http://localhost:5000/posts`)
      .then(res => {
        const persons = res;
        this.setState({ persons });
        console.log(res);
      })
  }

  render() {
    return (
      <ul>
        
      </ul>
    )
  }
}

