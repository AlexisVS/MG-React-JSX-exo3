import React, { Component } from 'react';

class App extends Component {
  render() {
    const date = new Date()
    return (
      <div>
        <p>{date.toLocaleString()}</p>
      </div>
    );
  }
}

export default App;