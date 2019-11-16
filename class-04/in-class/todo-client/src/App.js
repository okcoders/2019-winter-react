import React from "react";
import logo from "./logo.svg";
import "./App.css";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import TodoList from "./TodoList";
import { Container } from "@material-ui/core";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <AppBar>
          <Toolbar>
            <nav>
              <ul>
                <li>
                  <Link to="/todos">Todos</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
              </ul>
            </nav>
          </Toolbar>
        </AppBar>
        <Container style={{ padding: "40px" }}>
          <Switch>
            <Route path="/todos">
              <TodoList />
            </Route>
            <Route path="/about">
              <h1>about!</h1>
            </Route>
            <Route path="/">
              <h1>home!</h1>
            </Route>
          </Switch>
        </Container>
      </Router>
    </>
  );
}

export default App;
