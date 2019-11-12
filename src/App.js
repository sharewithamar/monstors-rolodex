import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

/*
 function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
         Hello Amar Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
} */
class App extends Component {
  constructor(){
    super();
    this.state ={
      monsters: [
        {
          name :'Frankenstein'
        },
        {
          name : 'Draculla'
        },
        {
          name : 'Zombie'
        },
      ]
   }
  }
  render(){
    return (
    <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>
       Hello {this.state.name} component Edit <code>src/App.js</code> and save to reload.
      </p>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React 
      </a>
      <button onClick={()=> this.setState({name:' Anira'}) } >Change Text</button>
    </header>
  </div>
  )
  }
}
export default App;
