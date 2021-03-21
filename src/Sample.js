import React from 'react';

import axios from 'axios';

export default class Sample extends React.Component {
  state = {
    persons: []
  }

  componentDidMount() {
    fetch("https://floating-ridge-28249.herokuapp.com",{  
          method: 'GET', 
          mode: 'cors',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'uid':localStorage.getItem('uid')
        },
          
        }).then((result) => {        
          result.json().then((rel) => {
              console.log(rel)
          });
        });
  }

  render() {
    return (
      <ul>
        
      </ul>
    )
  }
}

