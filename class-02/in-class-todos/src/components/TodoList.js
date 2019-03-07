import React, { useState, useEffect, useRef, useReducer } from 'react';

import useInput from '../hooks/useInput';
import useTimer from '../hooks/useTimer';

function todosReducer(todos, action) {
  switch (action.type) {
    case 'add':
      // old way
      // let nextTodos = [...todos];
      // nextTodos.push(action.payload);
      // return nextTodos;

      // new way
      return todos.concat(action.payload);
    case 'remove':
      // action.payload is the id of the todo item
      // old way
      // let nextTodos = [];

      // for (let i = 0; i < todos.length; i++) {
      //   if (i !== action.payload) {
      //     nextTodos.push(todos[i]);
      //   }
      // }

      // return nextTodos;
      // new way
      return todos.filter((_, i) => i !== action.payload);
    default:
      return todos;
  }
}

function TodoList() {

  const todoInput = useInput();
  // const time = useTimer();
  // const [todos, setTodos] = useState([]);
  const [todos, dispatch] = useReducer(todosReducer, []);

  function handleSubmit(e) {
    e.preventDefault();
    dispatch({
      type: 'add',
      payload: todoInput.value
    });
    // setTodos(todos => todos.concat(todoInput.value));
    todoInput.cancel();
  }

  function removeTodo(id) {
    dispatch({
      type: 'remove',
      payload: id
    });
    // setTodos(todos => todos.filter((_, i) => i !== id));
  }

  return (
    <>
      <h1>Todos</h1>
      <form onSubmit={handleSubmit}>
        <input
          value={todoInput.value}
          onChange={todoInput.handleChange}
        />
        <button type="submit">Submit</button>
        <button type="button" onClick={todoInput.cancel}>Cancel</button>
      </form>
      <ul>
        {todos.map((todo, i) => (
          <li onClick={() => removeTodo(i)}>
            {todo}
          </li>
        ))}
      </ul>
    </>
  )
}

// class TodoList extends Component {

//   state = {
//     todos: [],
//     inputValue: '',
//     time: 0
//   }

//   timer = null;

//   componentDidMount() {
//     this.timer = setInterval(() => {
//       this.setState(prevState => ({
//         time: prevState.time + 1,
//       }))
//     }, 1000)
//   }

//   componentDidUpdate(prevProps, prevState) {
//     const { inputValue } = this.state;

//     if (inputValue !== prevState.inputValue) {
//       console.log('new input value!');
//     } else {
//       console.log('input value didn\'t cahnge');
//     }
//   }

//   componentWillUnmount() {
//     console.log('todo list unmounting');
//     console.log(this.timer);
//     clearInterval(this.timer);
//     console.log(this.timer);
//   }

//   handleChange = (event) => {
//     this.setState({
//       inputValue: event.target.value
//     });
//   }

//   render() {

//     const { inputValue, time } = this.state;

//     return (
//       <>
//         <h1>Todos - current time: {time}</h1>
//         <form>
//           <input value={inputValue} onChange={this.handleChange} />
//         </form>
//       </>
//     )
//   }
// }

export default TodoList;