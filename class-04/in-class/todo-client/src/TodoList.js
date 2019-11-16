import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { Done, Add } from "@material-ui/icons";
import { Button, Fab, TextField } from "@material-ui/core";

class TodoList extends React.Component {
  constructor(props) {
    super(props);

    this.state = { todos: [], addingTodo: false, newTodoName: "" };
  }

  componentDidMount() {
    this.getTodos();
  }

  getTodos = () => {
    fetch("http://localhost:5000/api/todos")
      .then(res => res.json())
      .then(items => this.setState({ todos: items }));
  };

  addTodo = () => {
    const url = "http://localhost:5000/api/todos";
    const body = { name: this.state.newTodoName };
    const response = fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(body)
    });

    response.then(() => {
      this.setState({ newTodoName: "", addingTodo: false });
      this.getTodos();
    });
  };

  addRow() {
    if (this.state.addingTodo) {
      return (
        <TableRow>
          <TableCell component="th" scope="row">
            <TextField
              label="New Todo Item Name"
              margin="normal"
              value={this.state.newTodoName}
              onChange={e => this.setState({ newTodoName: e.target.value })}
            />
          </TableCell>
          <TableCell align="right">
            <Button
              onClick={() =>
                this.setState({ addingTodo: false, newTodoName: "" })
              }
              variant="contained"
            >
              Cancel
            </Button>
            <Button
              onClick={this.addTodo}
              variant="contained"
              color="secondary"
            >
              Add
            </Button>
          </TableCell>
        </TableRow>
      );
    } else {
      return <></>;
    }
  }

  completeCell(completed) {
    if (completed) {
      return <Done />;
    } else {
      return (
        <Button variant="contained" color="primary">
          Complete Item
        </Button>
      );
    }
  }

  render() {
    return (
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>
              Todo Name
              <Fab
                style={{ marginLeft: "6px" }}
                size="small"
                color="secondary"
                aria-label="add"
                onClick={() => this.setState({ addingTodo: true })}
              >
                <Add />
              </Fab>
            </TableCell>
            <TableCell align="right">Completed</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <>
            {this.addRow()}
            {this.state.todos.map(todo => (
              <TableRow key={todo._id}>
                <TableCell component="th" scope="row">
                  {todo.name}
                </TableCell>
                <TableCell align="right">
                  {this.completeCell(todo.completed)}
                </TableCell>
              </TableRow>
            ))}
          </>
        </TableBody>
      </Table>
    );
  }
}

export default TodoList;
