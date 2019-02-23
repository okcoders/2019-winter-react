import React from 'react';

const Todo = (props) => {
  return (
    <li className="list-group-item">{props.todo}</li>
  );
}

export default Todo;