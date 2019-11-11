
import React from 'react'
import { Button, TextField } from '@material-ui/core';
import OutlinedButton from '../components/outlined-button';

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
					<TextField variant="outlined" value={this.state.title} onChange={this.titleChange} type="text" />
					<OutlinedButton color="secondary" 
					onClick={this.addTodo}>Add Todo</OutlinedButton>
				</>
			)
		} else {
			return (
				<>
					<OutlinedButton color="secondary" onClick={this.newTodo}>New Todo +</OutlinedButton>
				</>
			)
		}
	}
}

export default AddTodo