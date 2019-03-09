import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import TodoList from './TodoList';

import { ThemeProvider } from 'styled-components';
import LocationProvider from './LocationProvider';

const theme = {
  headingBlack: '#222',
  bodyBlack: '#444',
}


class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <TodoList />
      </ThemeProvider>
    );
  }
}

export default App;
