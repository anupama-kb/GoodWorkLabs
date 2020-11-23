import './App.css';
import flexiConfig from './flexiConfig'
import Flexi from './flexi'
import React, { Component } from 'react'

class App extends Component {
  constructor(props){
    super(props);
    this.onFlexiSubmit = this.onFlexiSubmit.bind(this);
  }
  onFlexiSubmit(e, attributes) {
    console.log("personName", attributes.title)
    console.log("personState", attributes.selectedValue)
  }

  render() {
    return (
      <div className="App">
        <Flexi onFlexiSubmit={this.onFlexiSubmit} config={flexiConfig} />
      </div>
    )
  }
}



export default App;
