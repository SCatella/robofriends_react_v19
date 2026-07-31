import { Component } from 'react';
import './App.css';
import CardList from './CardList.jsx';
import SearchBox from './SearchBox.jsx'
import 'tachyons';
import { robots } from './assets/robots.js';

class App extends Component {
  render() {
    return (
      <div className='tc'>
        <h1>Robofriends</h1>
        <SearchBox />
        <CardList robots={robots}/>
      </div>
    )
  }
}

export default App;
