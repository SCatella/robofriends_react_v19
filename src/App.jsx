import { Component } from 'react';
import './App.css';
import CardList from './CardList.jsx';
import SearchBox from './SearchBox.jsx'
import 'tachyons';
import { robots } from './assets/robots.js';


class App extends Component {
  constructor() {
    super()
    this.state = {
      robots: robots,
      searchField: '',
    }
  }


  onSearchChange = (event) => {
    this.setState({ searchField: event.target.value })
  }


  render() {
    const filteredRobots = this.state.robots.filter(robots => {
      return robots.name.toLowerCase().includes(this.state.searchField.toLowerCase());
    })

    return (
      <div className='tc'>
        <h1 className='f1'>Robofriends</h1>
        <SearchBox searchChange={ this.onSearchChange } />
        <CardList robots={ filteredRobots }/>
      </div>
    )
  }
}

export default App;
