import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import TodoList from './components/TodoList';

class App extends Component {

  state = {
    on: true
  }

  render() {
    return (
      <>
        <button onClick={() => this.setState(({ on: prevOn }) => ({ on: !prevOn }))}>
          {this.state.on ? 'on' : 'off'}
        </button>
        {this.state.on && <TodoList />}
      </>
    );
  }
}

export default App;
