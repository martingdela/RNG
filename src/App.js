import React, { Component } from 'react';

// CSS Elements
import './skeleton.css'
import './normalize.css'


// Components
import RNSelector from './components/RNSelector'

class App extends Component {
  render() {
    return (
      <div className="App" class="container">
        <h1 class="mainTitle">Random Number Generator</h1>
        <RNSelector/>
      </div>
    );
  }
}

export default App;
