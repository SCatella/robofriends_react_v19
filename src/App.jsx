import { Component } from 'react';
import './App.css';
import CardList from './CardList.jsx';
import 'tachyons';
import { robots } from './assets/robots.js'

class App extends Component {
  render() {
    return (
      <>
        <CardList robots={robots}/>
      </>
    )
  }
}

export default App
