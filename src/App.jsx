import { Component } from 'react';
import './App.css';
import CardList from './CardList.jsx';
import SearchBox from './SearchBox.jsx'
import 'tachyons';


class App extends Component {
  constructor() {
    super()
    this.state = {
      robots: [],
      searchField: '',
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ robots: users }))
  }


  onSearchChange = (event) => {
    this.setState({ searchField: event.target.value })
  }


  render() {
    const filteredRobots = this.state.robots.filter(robots => {
      return robots.name.toLowerCase().includes(this.state.searchField.toLowerCase());
    })

    if (this.state.robots.length === 0) {
      return <h1>Loading...</h1>
    } else {
      return (
        <div className='tc'>
          <h1 className='f1'>Robofriends</h1>
          <SearchBox searchChange={ this.onSearchChange } />
          <CardList robots={ filteredRobots }/>
        </div>
      )
    }
  }
}

export default App;
