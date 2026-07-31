import { Component } from 'react';
import './App.css';
import CardList from './CardList.jsx';
import 'tachyons';
import { robots } from './assets/robots.js';

class App extends Component {
  render() {
    return (
      <>
        <h1>Robofriends</h1>
        <CardList robots={robots}/>
      </>
    )
  }
}

export default App;
