import React, { Component } from 'react';
import Todo from './Todo';
// const TodoList = (props) => {
//   console.log(props.todos);
//   return (
//     <>
//       <ul>
//         {props.todos.map(todo => <li key={todo}>{todo}</li>)}
//       </ul>
//     </>
//   );
// };

class TodoList extends Component {

  constructor(props) {
    super(props);

    this.state = {
      todos: [
        'walk the dog',
        'walk the cat',
        'water the plants',
      ],
      inputValue: 'Carson'
    }
  }

  render() {
    return (
      <>
        <form onSubmit={event => {
          event.preventDefault();

          this.setState(prevState => ({
            inputValue: '',
            todos: [...prevState.todos, prevState.inputValue]
          }));
        }}>
          <div className="form-group">
            <input
              className="form-control"
              type="text"
              value={this.state.inputValue}
              onChange={event => this.setState({ inputValue: event.target.value })}
            />
          </div>
        </form>
        <ul className="list-group">
          {this.state.todos.map(todo => <Todo key={todo} todo={todo} />)}
        </ul>
      </>
    );
  }
}

export default TodoList;