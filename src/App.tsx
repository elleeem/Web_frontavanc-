import React, { Component } from 'react';
import './App.css';
import { UserProvider } from './UserContext';
import { Main } from './components/Main';

class App extends Component {
  render() {
    return (
      <UserProvider>
        <Main />
      </UserProvider>
    );
  }
}

export default App;
