import React, { Component } from 'react';

class TodoList extends Component {

  state = {
    todos: [],
    inputValue: '',
    time: 0
  }

  timer = null;

  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState(prevState => ({
        time: prevState.time + 1,
      }))
    }, 1000)
  }

  componentDidUpdate(prevProps, prevState) {
    const { inputValue } = this.state;

    if (inputValue !== prevState.inputValue) {
      console.log('new input value!');
    } else {
      console.log('input value didn\'t cahnge');
    }
  }

  componentWillUnmount() {
    console.log('todo list unmounting');
    console.log(this.timer);
    clearInterval(this.timer);
    console.log(this.timer);
  }

  handleChange = (event) => {
    this.setState({
      inputValue: event.target.value
    });
  }

  render() {

    const { inputValue, time } = this.state;

    return (
      <>
        <h1>Todos - current time: {time}</h1>
        <form>
          <input value={inputValue} onChange={this.handleChange} />
        </form>
      </>
    )
  }
}

export default TodoList;