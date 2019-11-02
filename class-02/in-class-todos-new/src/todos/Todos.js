import React from 'react'
import TodoList from './TodoList'
import AddTodo from './AddTodo'

class Todos extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			todos: [
				{name: 'learn react', completed: false},
				{name: 'walk the dog', completed: false},
				{name: 'watch the football game', completed: false}
			]
		}
	}

	addTodoItem = (name) => {
		this.setState(state => {
			return {
				todos: [...state.todos, {name: name, completed: false}]
			}
		})
	}

	render() {
		return (
			<>
				<h1>Todos</h1>
				<AddTodo addTodoItem={this.addTodoItem}/>
				<TodoList items={this.state.todos}/>
			</>
		)
	}
}

export default Todos