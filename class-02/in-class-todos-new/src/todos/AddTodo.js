
import React from 'react'

class AddTodo extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			addingToDo: false,
			name: ''
		}
	}

	newTodo = () => {
		this.setState(() => {
			return {addingToDo: true}
		})
	}

	nameChange = (event) => {
		this.setState({name: event.target.value})
	}

	addTodo = () => {
		console.log("add to do")
		this.props.addTodoItem(this.state.name)
		this.setState({name: '', addingToDo: false})
	}

	render() {
		if (this.state.addingToDo) {
			return (
				<>
					<span>
						Name: 
					</span> 
					<input value={this.state.name} onChange={this.nameChange} type="text" />
					<button onClick={this.addTodo}>Add Todo</button>
				</>
			)
		} else {
			return (
				<>
					<button onClick={this.newTodo}>New Todo +</button>
				</>
			)
		}
	}
}

export default AddTodo