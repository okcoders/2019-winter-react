import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import "antd/dist/antd.css";

import TodoList from './TodoList';

import { ThemeProvider } from 'styled-components';


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
