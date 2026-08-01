import { Component } from 'react';
import './App.css';
import CardList from '../components/CardList.jsx';
import Scroll from '../components/Scroll.jsx';
import SearchBox from '../components/SearchBox.jsx';
import 'tachyons';



async function fetchWithFallback() {
  const primaryUrl = 'https://jsonplaceholder.typicode.com/users';
  const backupUrl = 'https://jsonplaceholder.cypress.io/users';

  try {
    // 1. Attempt primary fetch
    const response = await fetch(primaryUrl);

    // Check if the server returned an error code (like 404 or 500)
    if (!response.ok) {
      throw new Error(`Primary server failed with status: ${response.status}`);
    }

    return await response.json();

  } catch (primaryError) {
    console.warn('Primary fetch failed. Trying backup URL...', primaryError.message);

    try {
      // 2. Attempt backup fetch
      const backupResponse = await fetch(backupUrl);

      if (!backupResponse.ok) {
        throw new Error(`Backup server also failed with status: ${backupResponse.status}`);
      }

      return await backupResponse.json();

    } catch (backupError) {
      console.error('Both primary and backup fetches failed:', backupError.message);
      throw backupError; // Re-throw if you need to handle it upstream
    }
  }
}



class App extends Component {
  constructor() {
    super()
    this.state = {
      robots: [],
      searchField: '',
    }
  }

  componentDidMount() {
    fetchWithFallback()
      .then(users => this.setState({ robots: users }))
      .catch(err => console.error('Final failure:', err));
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
          <Scroll>
            <CardList robots={ filteredRobots }/>
          </Scroll>
        </div>
      )
    }
  }
}

export default App;
