import { Component } from 'react';
import Card from './Card.jsx';
import './App.css';
import 'tachyons';
import { robots } from './assets/robots.js'

class App extends Component {
  render() {
    return (
      <>
        <Card id={robots[0].id} name={robots[0].name} email={robots[0].email}/>
      </>
    )
  }
}

export default App
