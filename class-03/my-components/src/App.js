import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { ThemeProvider } from 'styled-components';

import Button from './Button';

const theme = {
  danger: 'red',
  success: 'green',
  primary: 'blue',
  info: 'chocolate'
}

function MyOldComponent(props) {
  return React.createElement(
    Button,
    {
      use: 'i don\'t exist'
    },
    props.text
  )
}

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <div className="App">
          <Button>
            Click Me
          </Button>
          <MyOldComponent text="Don't touch me" />
          <Button use="success">
            Success!
          </Button>
          <Button use="primary">
            Primary Action
          </Button>
          <Button use="info">
            Get Info
          </Button>
        </div>
      </ThemeProvider>
    );
  }
}

export default App;
