import React from 'react';
import './App.css';
import Todos from './todos/Todos'
import AppBar from '@material-ui/core/AppBar';

const styles = {
  marginBottom: 10
}

function App() {
  return (
    <div className="App">
      <AppBar position="static" style={styles}>
				<h2>Todos</h2>
      </AppBar>
      <button className="btn btn-small btn-primary"></button>
      <Todos />
    </div>
  );
}

export default App;
