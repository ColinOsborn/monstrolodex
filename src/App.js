import React, { Component } from 'react';
import { CardList } from './components/card-list/card-list-component'
import './App.css';

//Component also gives us set state
//What set state does is, lets us modify the state object

class App extends Component {
  constructor() {
    super(); 
      this.state = {
        monsters: []        
      };
  }

  componentWillMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({ monsters: users }))
  }

  render() {
      return (
        <div className="App">
          <CardList monsters={this.state.monsters}></CardList>
        </div>
      );
  }
}

export default App;
