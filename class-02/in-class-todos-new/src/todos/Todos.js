import React from 'react'
import TodoList from './TodoList'
import AddTodo from './AddTodo'
import Search from './Search'

class Todos extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			todos: [],
			currentFilter: ''
		}

	}

	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/todos')
			.then(response => response.json())
			.then(json => this.setState({todos: json}))
	}

	addTodoItem = (title) => {
		this.setState(state => {
			return {
				todos: [...state.todos, {title: title, completed: false}]
			}
		})
	}

	visibleTodos() {
		if (this.state.currentFilter !== '') {
			return this.state.todos.filter(todo => todo.title.includes(this.state.currentFilter))
		} else {
			return this.state.todos
		}
	}

	updateFilter = (filter) => {
		this.setState({currentFilter: filter})
	}

	render() {
		const visible = this.visibleTodos()
		return (
			<>
				<h1>Todos</h1>
				<AddTodo addTodoItem={this.addTodoItem}/>
				<Search updateFilter={this.updateFilter}/>
				<TodoList items={visible}/>
			</>
		)
	}
}

export default Todos