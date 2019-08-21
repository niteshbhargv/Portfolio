import React, { Component } from 'react';
import './App.css';
import Hello from './components/hello'
import About from './components/about'
import Skills from './components/skills'
import Follow from './components/follow'
import Header from './components/header'

class App extends Component {
  render(){
    return (
      <div>
        <Header></Header>
        <div>
          <Hello/>
          <About/>
          <Skills/>
          <Follow/>
        </div>
      </div>    
    );
  }
}

export default App;
