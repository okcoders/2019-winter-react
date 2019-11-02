
import React from 'react'

class AddTodo extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			addingToDo: false,
			title: ''
		}
	}

	newTodo = () => {
		this.setState(() => {
			return {addingToDo: true}
		})
	}

	titleChange = (event) => {
		this.setState({title: event.target.value})
	}

	addTodo = () => {
		console.log("add to do")
		this.props.addTodoItem(this.state.title)
		this.setState({title: '', addingToDo: false})
	}

	render() {
		if (this.state.addingToDo) {
			return (
				<>
					<span>
						Title: 
					</span> 
					<input value={this.state.title} onChange={this.titleChange} type="text" />
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